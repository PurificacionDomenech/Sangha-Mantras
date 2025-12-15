import { Volume2, Mic, Music } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { culturas, culturasJudias, chantingStyles } from "@/lib/mantras-data";

interface VoiceControlsProps {
  speed: number;
  pitch: number;
  volume: number;
  selectedCulture: string;
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  onSpeedChange: (value: number) => void;
  onPitchChange: (value: number) => void;
  onVolumeChange: (value: number) => void;
  onCultureChange: (value: string) => void;
  onVoiceChange: (voiceURI: string) => void;
  useJewishCultures?: boolean;
  chantingStyle?: string;
  onChantingStyleChange?: (value: string) => void;
}

export default function VoiceControls({
  speed,
  pitch,
  volume,
  selectedCulture,
  voices,
  selectedVoice,
  onSpeedChange,
  onPitchChange,
  onVolumeChange,
  onCultureChange,
  onVoiceChange,
  useJewishCultures = false,
  chantingStyle = 'normal',
  onChantingStyleChange,
}: VoiceControlsProps) {
  const culturasToUse = useJewishCultures ? culturasJudias : culturas;
  const currentStyle = chantingStyles.find(s => s.id === chantingStyle) || chantingStyles[0];

  const filteredVoices = voices.filter(v => {
    if (selectedCulture === 'hi-IN') return v.lang.startsWith('hi') || v.lang.startsWith('sa');
    if (selectedCulture === 'bo-CN') return v.lang.startsWith('bo') || v.lang.startsWith('zh') || v.lang.startsWith('hi');
    if (selectedCulture === 'ja-JP') return v.lang.startsWith('ja');
    if (selectedCulture === 'zh-CN') return v.lang.startsWith('zh');
    if (selectedCulture === 'th-TH') return v.lang.startsWith('th');
    if (selectedCulture === 'he-IL') return v.lang.startsWith('he');
    if (selectedCulture === 'ar') return v.lang.startsWith('ar');
    if (selectedCulture === 'es-ES') return v.lang.startsWith('es');
    return false;
  });

  const voicesToShow = filteredVoices.length > 0 ? filteredVoices : voices;
  
  const getCultureName = () => {
    const cultura = culturasToUse.find(c => c.id === selectedCulture);
    return cultura?.nombre || 'esta cultura';
  };

  return (
    <div className="bg-white/70 dark:bg-stone-800/70 rounded-lg p-3 space-y-3 h-full flex flex-col" data-testid="voice-controls">
      <div>
        <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 flex items-center gap-2">
          <Mic className="w-4 h-4" />
          Tradición
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {culturasToUse.map((cultura) => (
            <button
              key={cultura.id}
              onClick={() => onCultureChange(cultura.id)}
              data-testid={`culture-${cultura.id}`}
              className={`p-1.5 rounded text-xs transition-all border ${
                selectedCulture === cultura.id
                  ? 'bg-amber-100 dark:bg-amber-900/50 border-amber-300 dark:border-amber-600 text-amber-900 dark:text-amber-200'
                  : 'bg-white/50 dark:bg-stone-700/50 border-stone-200 dark:border-stone-600 text-stone-600 dark:text-stone-400'
              }`}
            >
              <span className="text-base">{cultura.icon}</span>
              <span className="block text-[10px] truncate">{cultura.nombre}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 space-y-2.5">
        {!useJewishCultures && onChantingStyleChange && (
          <div>
            <label className="text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5 flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5" />
              Estilo de Canto
            </label>
            <Select value={chantingStyle} onValueChange={onChantingStyleChange}>
              <SelectTrigger className="w-full h-8 text-xs" data-testid="chanting-style-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {chantingStyles.map((style) => (
                  <SelectItem key={style.id} value={style.id} className="text-xs">
                    <div>
                      <div className="font-medium">{style.nombre}</div>
                      <div className="text-[10px] text-stone-500">{style.descripcion}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {voicesToShow.length > 0 ? (
          <div>
            <label className="text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5 block">
              Voz
            </label>
            <Select 
              value={selectedVoice?.voiceURI || ''} 
              onValueChange={onVoiceChange}
            >
              <SelectTrigger className="w-full h-8 text-xs" data-testid="voice-select">
                <SelectValue placeholder="Seleccionar" />
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
        ) : null}

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
              max={1.5}
              step={0.1}
              className="mt-1"
              data-testid="speed-slider"
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
              min={0.5}
              max={2.0}
              step={0.1}
              className="mt-1"
              data-testid="pitch-slider"
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
              data-testid="volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
