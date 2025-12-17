
import { Volume2, Mic2, Music2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { estilosNarracion } from "@/lib/mantras-data";

interface NarrationControlsProps {
  speed: number;
  pitch: number;
  volume: number;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  narrationStyle: string;
  onSpeedChange: (value: number) => void;
  onPitchChange: (value: number) => void;
  onVolumeChange: (value: number) => void;
  onVoiceChange: (voiceURI: string) => void;
  onNarrationStyleChange: (value: string) => void;
}

export default function NarrationControls({
  speed,
  pitch,
  volume,
  voices,
  selectedVoice,
  narrationStyle,
  onSpeedChange,
  onPitchChange,
  onVolumeChange,
  onVoiceChange,
  onNarrationStyleChange,
}: NarrationControlsProps) {
  const spanishVoices = voices.filter(v => v.lang.startsWith('es'));
  const voicesToShow = spanishVoices.length > 0 ? spanishVoices : voices;

  return (
    <div className="bg-white/70 dark:bg-stone-800/70 rounded-lg p-3 space-y-3">
      <div>
        <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 flex items-center gap-2">
          <Music2 className="w-4 h-4" />
          Estilo de Narración
        </label>
        <Select value={narrationStyle} onValueChange={onNarrationStyleChange}>
          <SelectTrigger className="w-full h-9 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {estilosNarracion.map((estilo) => (
              <SelectItem key={estilo.id} value={estilo.id} className="text-xs">
                <div>
                  <div className="font-medium">{estilo.nombre}</div>
                  <div className="text-[10px] text-stone-500">{estilo.descripcion}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
            <span>Velocidad</span>
            <span className="text-xs text-stone-500">{speed.toFixed(1)}x</span>
          </label>
          <Slider
            value={[speed]}
            onValueChange={([v]) => onSpeedChange(v)}
            min={0.5}
            max={1.2}
            step={0.05}
            className="mt-1"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center justify-between">
            <span>Tono</span>
            <span className="text-xs text-stone-500">{pitch.toFixed(1)}</span>
          </label>
          <Slider
            value={[pitch]}
            onValueChange={([v]) => onPitchChange(v)}
            min={0.7}
            max={1.3}
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
