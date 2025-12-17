import { useState, useEffect, useRef, useCallback } from "react";
import Header from "@/components/Header";
import NombreSagradoCard from "@/components/NombreSagradoCard";
import TimerControls from "@/components/TimerControls";
import VoiceControls from "@/components/VoiceControls";
import AmbientSounds from "@/components/AmbientSounds";
import { nombresSagrados } from "@/lib/mantras-data";
import { useToast } from "@/hooks/use-toast";

export default function NombresSagrados() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("tetragramaton");
  const [selectedNombreIndex, setSelectedNombreIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationMinutes, setDurationMinutes] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [speed, setSpeed] = useState(0.9);
  const [pitch, setPitch] = useState(1.0);
  const [volume, setVolume] = useState(0.8);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [selectedCulture, setSelectedCulture] = useState("he-IL");
  const [repetitions, setRepetitions] = useState(0);
  const [sessionFinished, setSessionFinished] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const isPlayingRef = useRef(false);

  const currentCategory = nombresSagrados[selectedCategory];
  const currentNombre = currentCategory.nombres[selectedNombreIndex];

  const loadVoices = useCallback(() => {
    const loadedVoices = window.speechSynthesis.getVoices();
    if (loadedVoices.length > 0) {
      setVoices(loadedVoices);
      const hebrewVoice = loadedVoices.find(v => v.lang.startsWith('he'));
      const defaultVoice = hebrewVoice || loadedVoices[0];
      setSelectedVoice(defaultVoice);
    }
  }, []);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!('speechSynthesis' in window)) {
      toast({
        title: "Modo solo texto",
        description: isMobile
          ? "Tu navegador móvil no soporta síntesis de voz. Usa Safari (iOS) o Chrome (Android) para audio, o continúa en modo lectura."
          : "Tu navegador no soporta síntesis de voz. Usa Chrome, Edge o Safari para mejor experiencia.",
        variant: "default",
        duration: 8000
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

  const speakNombre = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        const readingTime = (currentNombre.nombre.length * 100) / speed;
        setTimeout(() => resolve(true), readingTime);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(currentNombre.nombre);
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
  }, [currentNombre.nombre, speed, pitch, volume, selectedCulture, selectedVoice]);

  const nombreLoop = useCallback(async () => {
    while (isPlayingRef.current) {
      setRepetitions(prev => prev + 1);
      await speakNombre();
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (!isPlayingRef.current) break;
    }
  }, [speakNombre]);

  const startSession = useCallback(async () => {
    if (isPlaying) {
      stopAll();
      return;
    }

    // Verificar que el nombre actual sea reproducible
    if (currentNombre.audioVersiones.length === 0) {
      toast({
        title: "Nombre no reproducible",
        description: "Por respeto a la tradición, YHWH no puede ser pronunciado. Por favor selecciona otro nombre sagrado.",
        variant: "default",
        duration: 5000
      });
      return;
    }

    const hasSpeech = 'speechSynthesis' in window;
    if (!hasSpeech) {
      toast({
        title: "Modo lectura activo",
        description: "La app funcionará sin audio. Lee el nombre en pantalla durante la sesión.",
        variant: "default",
        duration: 5000
      });
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
          description: "Shalom. Tu práctica ha finalizado.",
        });
      }
    }, 1000);

    nombreLoop();
  }, [isPlaying, durationMinutes, stopAll, nombreLoop, toast]);

  const playOnce = useCallback(async () => {
    // Verificar que el nombre actual sea reproducible
    if (currentNombre.audioVersiones.length === 0) {
      toast({
        title: "Nombre no reproducible",
        description: "Por respeto a la tradición, YHWH no puede ser pronunciado.",
        variant: "default",
        duration: 3000
      });
      return;
    }

    if (!('speechSynthesis' in window)) {
      toast({
        title: "Modo lectura",
        description: "Lee el nombre en pantalla. Audio no disponible en este navegador.",
        variant: "default",
        duration: 3000
      });
      return;
    }
    stopAll();
    setIsPlaying(true);
    setRepetitions(1);
    await speakNombre();
    setIsPlaying(false);
  }, [stopAll, speakNombre, toast]);

  const handleCategoryChange = useCallback((category: string) => {
    stopAll();
    setSelectedCategory(category);
    // Si es la categoría del Tetragrámaton, mantener YHWH visible pero no seleccionable
    // Seleccionar el primer nombre reproducible
    const newCategory = nombresSagrados[category];
    const firstPlayableIndex = newCategory.nombres.findIndex(n => n.audioVersiones.length > 0);
    setSelectedNombreIndex(firstPlayableIndex >= 0 ? firstPlayableIndex : 0);
    setSessionFinished(false);
  }, [stopAll]);

  const handleNombreChange = useCallback((index: number) => {
    stopAll();
    setSelectedNombreIndex(index);
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
      if (culture === 'he-IL') return v.lang.startsWith('he');
      if (culture === 'yi') return v.lang.startsWith('yi') || v.lang.startsWith('he');
      if (culture === 'ar') return v.lang.startsWith('ar');
      if (culture === 'es-ES') return v.lang.startsWith('es');
      return false;
    });

    if (compatibleVoices.length > 0) {
      setSelectedVoice(compatibleVoices[0]);
    } else if (voices.length > 0) {
      setSelectedVoice(voices[0]);
    }
  }, [voices]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 dark:from-stone-900 dark:via-stone-900 dark:to-stone-800">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Selector de Categorías - 10 Sefirot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {Object.entries(nombresSagrados).map(([key, categoria]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`py-3 px-3 rounded-lg transition-all text-center ${
                selectedCategory === key
                  ? `bg-gradient-to-br ${categoria.color} shadow-lg border-2 border-amber-300 dark:border-amber-600`
                  : 'bg-white/70 dark:bg-stone-800/70 hover:bg-white dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700'
              }`}
            >
              <div className={`text-xs font-medium ${
                selectedCategory === key ? 'text-stone-800 dark:text-stone-900' : 'text-stone-700 dark:text-stone-300'
              }`}>
                {categoria.nombre}
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[420px,1fr] gap-4">
          {/* Panel izquierdo: Display actual y lista */}
          <div className="space-y-3">
            <div
              className={`bg-gradient-to-br ${currentCategory.color} rounded-lg p-6 shadow-xl border-2 border-amber-300 dark:border-amber-600`}
              data-testid="nombre-display"
            >
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest text-stone-600 dark:text-stone-700 mb-2 font-medium">
                  Nombre Sagrado Actual
                </div>
                <div
                  className={`text-5xl font-serif leading-tight mb-3 text-stone-800 dark:text-stone-900 ${isPlaying ? 'animate-pulse' : ''}`}
                  style={{ fontFamily: "'Frank Ruhl Libre', serif", direction: 'rtl' }}
                >
                  {currentNombre.hebreo}
                </div>
                <div className="text-lg mb-2 font-semibold text-stone-800 dark:text-stone-900">
                  {currentNombre.nombre}
                </div>
                <div className="text-sm border-t border-stone-800/20 pt-3 text-stone-700 dark:text-stone-800 leading-relaxed">
                  {currentNombre.significado}
                </div>
                {repetitions > 0 && (
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/50 dark:bg-white/30 rounded-full">
                    <span className="text-xs font-medium text-amber-800 dark:text-amber-900" data-testid="repetition-counter">
                      {repetitions} repeticiones
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Lista de nombres */}
            <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-stone-100">
              {currentCategory.nombres.map((nombre, idx) => (
                <NombreSagradoCard
                  key={`${selectedCategory}-${idx}`}
                  nombre={nombre}
                  isSelected={selectedNombreIndex === idx}
                  categoryColor={currentCategory.color}
                  onClick={() => handleNombreChange(idx)}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Panel derecho: Controles en 2 columnas */}
          <div className="grid grid-cols-2 gap-3 h-fit">
            <div className="space-y-3">
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
                useJewishCultures={true}
              />
            </div>

            <AmbientSounds isSessionActive={isPlaying} />
          </div>
        </div>
      </div>
    </div>
  );
}