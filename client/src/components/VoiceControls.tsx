import { Volume2, Mic } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { culturas } from "@/lib/mantras-data";

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
}: VoiceControlsProps) {
  const filteredVoices = voices.filter(v => {
    if (selectedCulture === 'hi-IN') return v.lang.startsWith('hi') || v.lang.startsWith('sa');
    if (selectedCulture === 'bo-CN') return v.lang.startsWith('bo') || v.lang.startsWith('zh') || v.lang.startsWith('hi');
    if (selectedCulture === 'ja-JP') return v.lang.startsWith('ja');
    if (selectedCulture === 'zh-CN') return v.lang.startsWith('zh');
    if (selectedCulture === 'th-TH') return v.lang.startsWith('th');
    if (selectedCulture === 'es-ES') return v.lang.startsWith('es');
    return false;
  });

  const voicesToShow = filteredVoices.length > 0 ? filteredVoices : voices;
  
  const getCultureName = () => {
    const cultura = culturas.find(c => c.id === selectedCulture);
    return cultura?.nombre || 'esta cultura';
  };

  return (
    <div className="bg-white/70 dark:bg-stone-800/70 rounded-2xl p-4 space-y-4" data-testid="voice-controls">
      <div>
        <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
          <Mic className="w-4 h-4" />
          Tradición Cultural
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
          {culturas.map((cultura) => (
            <button
              key={cultura.id}
              onClick={() => onCultureChange(cultura.id)}
              data-testid={`culture-${cultura.id}`}
              className={`p-2 rounded-lg text-xs transition-all border ${
                selectedCulture === cultura.id
                  ? 'bg-amber-100 dark:bg-amber-900/50 border-amber-300 dark:border-amber-600 text-amber-900 dark:text-amber-200'
                  : 'bg-white/50 dark:bg-stone-700/50 border-stone-200 dark:border-stone-600 text-stone-600 dark:text-stone-400'
              }`}
            >
              <span className="font-medium">{cultura.icon}</span>
              <span className="block mt-1 text-xs truncate">{cultura.nombre}</span>
            </button>
          ))}
        </div>
      </div>

      {voicesToShow.length > 0 ? (
        <div>
          <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 block">
            Voz {filteredVoices.length === 0 && '(usando voz genérica)'}
          </label>
          <Select 
            value={selectedVoice?.voiceURI || ''} 
            onValueChange={onVoiceChange}
          >
            <SelectTrigger className="w-full" data-testid="voice-select">
              <SelectValue placeholder="Seleccionar voz" />
            </SelectTrigger>
            <SelectContent>
              {voicesToShow.map((voice) => (
                <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                  {voice.name} ({voice.lang})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {filteredVoices.length === 0 && (
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800">
              ℹ️ No hay voces nativas de {getCultureName()} instaladas. Se usará una voz genérica. Para obtener mejores resultados, instala voces de {getCultureName()} en la configuración de tu sistema operativo.
            </p>
          )}
        </div>
      ) : (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-700 dark:text-red-300">
            ⚠️ No hay voces disponibles en tu navegador. Por favor, verifica la configuración de síntesis de voz de tu sistema.
          </p>
        </div>
      )}

      <div>
        <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 flex items-center justify-between">
          <span>Velocidad</span>
          <span className="text-xs text-stone-500">{speed.toFixed(1)}x</span>
        </label>
        <Slider
          value={[speed]}
          onValueChange={([v]) => onSpeedChange(v)}
          min={0.5}
          max={1.5}
          step={0.1}
          className="mt-2"
          data-testid="speed-slider"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 flex items-center justify-between">
          <span>Tono</span>
          <span className="text-xs text-stone-500">{pitch.toFixed(1)}</span>
        </label>
        <Slider
          value={[pitch]}
          onValueChange={([v]) => onPitchChange(v)}
          min={0.5}
          max={2.0}
          step={0.1}
          className="mt-2"
          data-testid="pitch-slider"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-2 flex items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
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
          className="mt-2"
          data-testid="volume-slider"
        />
      </div>
    </div>
  );
}
