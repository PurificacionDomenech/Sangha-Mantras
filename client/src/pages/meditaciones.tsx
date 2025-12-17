
import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Square } from "lucide-react";
import Header from "@/components/Header";
import MeditacionCard from "@/components/MeditacionCard";
import NarrationControls from "@/components/NarrationControls";
import AmbientSounds from "@/components/AmbientSounds";
import { Button } from "@/components/ui/button";
import { meditacionesGuiadas, estilosNarracion, ambientSounds } from "@/lib/mantras-data";
import { useToast } from "@/hooks/use-toast";

// Mapeo de palabras clave a sonidos ambientales
const soundKeywords: Record<string, string[]> = {
  'water': ['agua', 'río', 'arroyo'],
  'ocean': ['océano', 'mar', 'olas', 'playa'],
  'nature': ['naturaleza', 'bosque', 'árboles', 'hojas'],
  'bells': ['campanas tibetanas'],
  'bells-high': ['campanas agudas', 'tintineando'],
  'bells-low': ['campanas graves'],
  'bowls': ['cuencos tibetanos'],
  'bowls-crystal': ['cuencos de cristal', 'cristalinos'],
  'bowls-deep': ['cuencos profundos'],
  'wind': ['viento'],
  'rain': ['lluvia'],
  'birds': ['pájaros', 'aves'],
  'fire': ['fuego', 'hoguera'],
  'gong': ['gong tibetano'],
  'gong-small': ['gong pequeño'],
  'metronome': ['metrónomo', 'digital', 'código'],
};

export default function Meditaciones() {
  const { toast } = useToast();
  const [selectedCategory] = useState("viajes");
  const [selectedMeditacionIndex, setSelectedMeditacionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0.75);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(0.9);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [autoActivatedSounds, setAutoActivatedSounds] = useState<string[]>([]);

  const isPlayingRef = useRef(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const ambientSoundsRef = useRef<{ activateSound: (soundId: string) => void; deactivateSound: (soundId: string) => void } | null>(null);

  const currentCategory = meditacionesGuiadas[selectedCategory];
  const currentMeditacion = currentCategory.meditaciones[selectedMeditacionIndex];

  // Función para limpiar el texto (eliminar corchetes y paréntesis con contenido)
  const cleanText = (text: string): string => {
    return text
      .replace(/\[.*?\]/g, '') // Eliminar [texto]
      .replace(/\(.*?\)/g, '') // Eliminar (texto)
      .replace(/\n{3,}/g, '\n\n') // Reducir saltos de línea múltiples
      .trim();
  };

  const loadVoices = useCallback(() => {
    const loadedVoices = window.speechSynthesis.getVoices();
    if (loadedVoices.length > 0) {
      setVoices(loadedVoices);
      const spanishVoices = loadedVoices.filter(v => v.lang.startsWith('es'));
      const defaultVoice = spanishVoices[0] || loadedVoices[0];
      setSelectedVoice(defaultVoice);
    }
  }, []);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      toast({
        title: "Audio no disponible",
        description: "Tu navegador no soporta síntesis de voz.",
        variant: "destructive",
      });
      return;
    }

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      stopMeditation();
    };
  }, [loadVoices, toast]);

  const stopMeditation = useCallback(() => {
    window.speechSynthesis.cancel();
    isPlayingRef.current = false;
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    currentUtteranceRef.current = null;
    
    // Desactivar sonidos que fueron auto-activados
    if (autoActivatedSounds.length > 0 && ambientSoundsRef.current) {
      autoActivatedSounds.forEach(soundId => {
        ambientSoundsRef.current?.deactivateSound(soundId);
      });
      setAutoActivatedSounds([]);
    }
  }, [autoActivatedSounds]);

  // Detectar sonidos mencionados en el texto
  const detectSoundsInText = useCallback((text: string): string[] => {
    const lowerText = text.toLowerCase();
    const detectedSounds: string[] = [];

    Object.entries(soundKeywords).forEach(([soundId, keywords]) => {
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        detectedSounds.push(soundId);
      }
    });

    return detectedSounds;
  }, []);

  const speakMeditation = useCallback(() => {
    if (!('speechSynthesis' in window)) return;

    const cleanedText = cleanText(currentMeditacion.texto);
    
    // Detectar y activar sonidos mencionados en el texto (volumen muy bajo: 0.08)
    const soundsToActivate = detectSoundsInText(cleanedText);
    if (soundsToActivate.length > 0 && ambientSoundsRef.current) {
      soundsToActivate.forEach(soundId => {
        ambientSoundsRef.current?.activateSound(soundId, 0.08);
      });
      setAutoActivatedSounds(soundsToActivate);
      
      const soundNames = soundsToActivate.map(id => {
        const sound = ambientSounds.find(s => s.id === id);
        return sound?.nombre || id;
      }).join(', ');
      
      toast({
        title: "Sonidos de fondo activados (muy suaves)",
        description: soundNames,
      });
    }
    
    // Dividir el texto en segmentos (por oraciones)
    const segments = cleanedText
      .split(/(?<=[.!?])\s+/)
      .filter(s => s.trim().length > 0);
    
    let currentSegmentIndex = 0;

    const speakNextSegment = () => {
      if (!isPlayingRef.current || currentSegmentIndex >= segments.length) {
        if (currentSegmentIndex >= segments.length) {
          stopMeditation();
          toast({
            title: "Meditación completada",
            description: "La meditación ha finalizado. Namaste.",
          });
        }
        return;
      }

      const utterance = new SpeechSynthesisUtterance(segments[currentSegmentIndex]);
      
      // Aplicar parámetros ACTUALES (se actualizarán en cada segmento)
      utterance.rate = speed;
      utterance.pitch = pitch;
      utterance.volume = volume;
      utterance.lang = 'es-ES';
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = () => {
        currentSegmentIndex++;
        speakNextSegment();
      };

      utterance.onerror = () => {
        stopMeditation();
      };

      currentUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    };

    speakNextSegment();
  }, [currentMeditacion.texto, speed, pitch, volume, selectedVoice, stopMeditation, toast, detectSoundsInText]);

  const togglePlayPause = useCallback(() => {
    if (!isPlaying) {
      // Iniciar
      setIsPlaying(true);
      setIsPaused(false);
      isPlayingRef.current = true;
      speakMeditation();
    } else if (isPaused) {
      // Reanudar
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      // Pausar
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isPlaying, isPaused, speakMeditation]);

  const handleMeditacionChange = useCallback((index: number) => {
    stopMeditation();
    setSelectedMeditacionIndex(index);
  }, [stopMeditation]);

  const handleVoiceChange = useCallback((voiceURI: string) => {
    const voice = voices.find(v => v.voiceURI === voiceURI);
    if (voice) {
      setSelectedVoice(voice);
    }
  }, [voices]);

  // Los cambios se aplicarán en la próxima reproducción o reanudación
  // No reiniciamos la meditación actual para evitar interrupciones

  const handleSpeedChange = useCallback((value: number) => {
    setSpeed(value);
  }, []);

  const handlePitchChange = useCallback((value: number) => {
    setPitch(value);
  }, []);

  const handleVolumeChange = useCallback((value: number) => {
    setVolume(value);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
            Meditaciones Guiadas
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Viajes profundos narrados con voz cálida y estilos personalizables
          </p>
        </div>

        <div className="grid lg:grid-cols-[420px,1fr] gap-4">
          {/* Columna izquierda: Meditación actual */}
          <div className="space-y-3">
            <div className={`bg-gradient-to-r ${currentCategory.color} rounded-lg p-6 shadow-lg`}>
              <h3 className="text-xl font-semibold text-stone-800 dark:text-stone-900 mb-2">
                {currentMeditacion.titulo}
              </h3>
              <p className="text-sm text-stone-700 dark:text-stone-800 mb-4">
                {currentMeditacion.descripcion}
              </p>
              <div className="flex items-center gap-3">
                <Button
                  onClick={togglePlayPause}
                  size="lg"
                  className="flex-1"
                  variant={isPlaying ? "secondary" : "default"}
                >
                  {isPaused ? (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Reanudar
                    </>
                  ) : isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 mr-2" />
                      Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Iniciar Meditación
                    </>
                  )}
                </Button>
                {isPlaying && (
                  <Button onClick={stopMeditation} size="lg" variant="destructive">
                    <Square className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </div>

            {/* Lista de meditaciones */}
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-stone-100">
              {currentCategory.meditaciones.map((meditacion, idx) => (
                <MeditacionCard
                  key={idx}
                  meditacion={meditacion}
                  isSelected={selectedMeditacionIndex === idx}
                  categoryColor={currentCategory.color}
                  onClick={() => handleMeditacionChange(idx)}
                />
              ))}
            </div>
          </div>

          {/* Columna derecha: Controles */}
          <div className="grid grid-cols-2 gap-3 h-fit">
            <NarrationControls
              speed={speed}
              pitch={pitch}
              volume={volume}
              voices={voices}
              selectedVoice={selectedVoice}
              onSpeedChange={handleSpeedChange}
              onPitchChange={handlePitchChange}
              onVolumeChange={handleVolumeChange}
              onVoiceChange={handleVoiceChange}
            />
            <AmbientSounds 
              isSessionActive={isPlaying} 
              ref={ambientSoundsRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
