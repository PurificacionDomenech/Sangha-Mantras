import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import CategorySelector from "@/components/CategorySelector";
import MantraCard from "@/components/MantraCard";
import MantraDisplay from "@/components/MantraDisplay";
import VoiceControls from "@/components/VoiceControls";
import TimerControls from "@/components/TimerControls";
import AmbientSounds from "@/components/AmbientSounds";

import { mantras } from "@/lib/mantras-data";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("compasion");
  const [selectedMantraIndex, setSelectedMantraIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationMinutes, setDurationMinutes] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [speed, setSpeed] = useState(0.9);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(0.8);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [selectedCulture, setSelectedCulture] = useState("hi-IN");
  const [repetitions, setRepetitions] = useState(0);
  const [sessionFinished, setSessionFinished] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isPlayingRef = useRef(false);

  const currentCategory = mantras[selectedCategory];
  const currentMantra = currentCategory.mantras[selectedMantraIndex];

  const loadVoices = useCallback(() => {
    const loadedVoices = window.speechSynthesis.getVoices();
    if (loadedVoices.length > 0) {
      setVoices(loadedVoices);
      const hindiVoice = loadedVoices.find(v => v.lang.startsWith('hi'));
      const asianVoice = loadedVoices.find(v => v.lang.startsWith('ja') || v.lang.startsWith('zh'));
      const defaultVoice = hindiVoice || asianVoice || loadedVoices[0];
      setSelectedVoice(defaultVoice);
    }
  }, []);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      toast({
        title: "Navegador no compatible",
        description: "Tu navegador no soporta síntesis de voz. Recomendamos usar Chrome, Edge o Safari.",
        variant: "destructive"
      });
      return;
    }

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    const retryInterval = setInterval(() => {
      if (voices.length === 0) {
        loadVoices();
      } else {
        clearInterval(retryInterval);
      }
    }, 100);

    return () => {
      clearInterval(retryInterval);
      stopAll();
    };
  }, [loadVoices, toast, voices.length]);

  const stopAll = useCallback(() => {
    window.speechSynthesis.cancel();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    isPlayingRef.current = false;
    setIsPlaying(false);
    setTimeRemaining(0);
    setRepetitions(0);
    startTimeRef.current = null;
  }, []);

  const speakMantra = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(currentMantra.texto);
      utterance.rate = speed;
      utterance.pitch = pitch;
      utterance.volume = volume;
      utterance.lang = selectedCulture;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = () => resolve(true);
      utterance.onerror = () => resolve(false);

      window.speechSynthesis.speak(utterance);
    });
  }, [currentMantra.texto, speed, pitch, volume, selectedCulture, selectedVoice]);

  const mantraLoop = useCallback(async () => {
    while (isPlayingRef.current) {
      setRepetitions(prev => prev + 1);
      await speakMantra();

      // Esperar 1 segundo entre repeticiones
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Verificar si la sesión sigue activa
      if (!isPlayingRef.current) break;
    }
  }, [speakMantra]);

  const startSession = useCallback(async () => {
    if (isPlaying) {
      stopAll();
      return;
    }

    if (!('speechSynthesis' in window)) {
      toast({
        title: "Error",
        description: "Tu navegador no soporta la síntesis de voz. Prueba con Chrome, Edge o Safari.",
        variant: "destructive"
      });
      return;
    }

    setIsPlaying(true);
    isPlayingRef.current = true;
    setSessionFinished(false);
    const totalSeconds = durationMinutes * 60;
    setTimeRemaining(totalSeconds);
    setRepetitions(0);
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      if (!startTimeRef.current) return;

      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = Math.max(0, totalSeconds - elapsed);

      setTimeRemaining(remaining);

      if (remaining <= 0) {
        stopAll();
        setSessionFinished(true);
        toast({
          title: "Sesión completada",
          description: "Namaste. Tu práctica ha finalizado.",
        });
      }
    }, 1000);

    mantraLoop();
  }, [isPlaying, durationMinutes, stopAll, mantraLoop, toast]);

  const playOnce = useCallback(async () => {
    stopAll();
    setIsPlaying(true);
    setRepetitions(1);
    await speakMantra();
    setIsPlaying(false);
  }, [stopAll, speakMantra]);

  const handleCategoryChange = useCallback((category: string) => {
    stopAll();
    setSelectedCategory(category);
    setSelectedMantraIndex(0);
    setSessionFinished(false);
  }, [stopAll]);

  const handleMantraChange = useCallback((index: number) => {
    stopAll();
    setSelectedMantraIndex(index);
    setSessionFinished(false);
  }, [stopAll]);

  const handleVoiceChange = useCallback((voiceURI: string) => {
    const voice = voices.find(v => v.voiceURI === voiceURI);
    if (voice) {
      setSelectedVoice(voice);
    }
  }, [voices]);

  const handleCultureChange = useCallback((culture: string) => {
    setSelectedCulture(culture);
    const compatibleVoices = voices.filter(v => {
      if (culture === 'hi-IN') return v.lang.startsWith('hi') || v.lang.startsWith('sa');
      if (culture === 'bo-CN') return v.lang.startsWith('bo') || v.lang.startsWith('zh') || v.lang.startsWith('hi');
      if (culture === 'ja-JP') return v.lang.startsWith('ja');
      if (culture === 'zh-CN') return v.lang.startsWith('zh');
      if (culture === 'th-TH') return v.lang.startsWith('th');
      if (culture === 'es-ES') return v.lang.startsWith('es');
      return false;
    });

    if (compatibleVoices.length > 0) {
      setSelectedVoice(compatibleVoices[0]);
    } else if (voices.length > 0) {
      // Si no hay voces específicas, usa cualquier voz disponible como respaldo
      setSelectedVoice(voices[0]);
    }
  }, [voices]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        <div className="grid lg:grid-cols-[1fr,380px] gap-4">
          {/* Columna izquierda: Lista de mantras y display */}
          <div className="space-y-3">
            <MantraDisplay
              mantra={currentMantra}
              categoryColor={currentCategory.color}
              isPlaying={isPlaying}
              repetitions={repetitions}
            />

            <div className="space-y-1.5 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-stone-100">
              {currentCategory.mantras.map((mantra, idx) => (
                <MantraCard
                  key={`${selectedCategory}-${idx}`}
                  mantra={mantra}
                  isSelected={selectedMantraIndex === idx}
                  categoryColor={currentCategory.color}
                  onClick={() => handleMantraChange(idx)}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Columna derecha: Controles */}
          <div className="space-y-2.5">
            <TimerControls
              durationMinutes={durationMinutes}
              timeRemaining={timeRemaining}
              isPlaying={isPlaying}
              onDurationChange={setDurationMinutes}
              onToggleSession={startSession}
              onPlayOnce={playOnce}
              sessionFinished={sessionFinished}
            />

            <VoiceControls
              speed={speed}
              pitch={pitch}
              volume={volume}
              selectedCulture={selectedCulture}
              voices={voices}
              selectedVoice={selectedVoice}
              onSpeedChange={setSpeed}
              onPitchChange={setPitch}
              onVolumeChange={setVolume}
              onCultureChange={handleCultureChange}
              onVoiceChange={handleVoiceChange}
            />

            <AmbientSounds isSessionActive={isPlaying} />
          </div>
        </div>
      </div>
    </div>
  );
}