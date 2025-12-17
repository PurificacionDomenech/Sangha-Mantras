
import { Volume2, Mic2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NarrationControlsProps {
  speed: number;
  pitch: number;
  volume: number;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  pauseBetweenPhrases: number;
  onSpeedChange: (value: number) => void;
  onPitchChange: (value: number) => void;
  onVolumeChange: (value: number) => void;
  onVoiceChange: (voiceURI: string) => void;
  onPauseBetweenPhrasesChange: (value: number) => void;
}

export default function NarrationControls({
  speed,
  pitch,
  volume,
  voices,
  selectedVoice,
  pauseBetweenPhrases,
  onSpeedChange,
  onPitchChange,
  onVolumeChange,
  onVoiceChange,
  onPauseBetweenPhrasesChange,
}: NarrationControlsProps) {
  const spanishVoices = voices.filter(v => v.lang.startsWith('es'));
  const voicesToShow = spanishVoices.length > 0 ? spanishVoices : voices;

  return (
    <div className="bg-white/70 dark:bg-stone-800/70 rounded-lg p-3 space-y-3">
      <h3 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
        Controles de Narración
      </h3>

      {voicesToShow.length > 0 && (
        <div>
          <label className="text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5 flex items-center gap-1.5">
            <Mic2 className="w-3.5 h-3.5" />
            Voz del Narrador
          </label>
          <Select value={selectedVoice?.voiceURI || ''} onValueChange={onVoiceChange}>
            <SelectTrigger className="w-full h-8 text-xs">
              <SelectValue placeholder="Seleccionar voz" />
            </SelectTrigger>
            <SelectContent>
              {voicesToShow.map((voice) => (
                <SelectItem key={voice.voiceURI} value={voice.voiceURI} className="text-xs">
                  {voice.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <div>
          <label className="text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center justify-between">
            <span>Pausa entre frases</span>
            <span className="text-xs text-stone-500">{pauseBetweenPhrases}s (+2s en saltos de línea)</span>
          </label>
          <Slider
            value={[pauseBetweenPhrases]}
            onValueChange={([v]) => onPauseBetweenPhrasesChange(v)}
            min={1}
            max={10}
            step={0.5}
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center justify-between">
            <span>Velocidad</span>
            <span className="text-xs text-stone-500">{speed.toFixed(2)}x</span>
          </label>
          <Slider
            value={[speed]}
            onValueChange={([v]) => onSpeedChange(v)}
            min={0.5}
            max={1.5}
            step={0.05}
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center justify-between">
            <span>Tono</span>
            <span className="text-xs text-stone-500">{pitch.toFixed(2)}</span>
          </label>
          <Slider
            value={[pitch]}
            onValueChange={([v]) => onPitchChange(v)}
            min={0.5}
            max={2.0}
            step={0.05}
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              Volumen
            </span>
            <span className="text-xs text-stone-500">{Math.round(volume * 100)}%</span>
          </label>
          <Slider
            value={[volume]}
            onValueChange={([v]) => onVolumeChange(v)}
            min={0}
            max={1}
            step={0.05}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
