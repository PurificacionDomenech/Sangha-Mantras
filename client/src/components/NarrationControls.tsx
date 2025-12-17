import { Volume2, Mic2, Star, Trash2, Save, Settings } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

interface NarrationPreset {
  id: string;
  nombre: string;
  speed: number;
  pitch: number;
  volume: number;
  voiceURI: string;
  pauseBetweenPhrases: number;
  createdAt: number;
}

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
  const { toast } = useToast();

  const [presets, setPresets] = useState<NarrationPreset[]>(() => {
    const saved = localStorage.getItem('narrationPresets');
    return saved ? JSON.parse(saved) : [];
  });
  const [presetName, setPresetName] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);

  useEffect(() => {
    if (presets.length > 0) {
      localStorage.setItem('narrationPresets', JSON.stringify(presets));
    }
  }, [presets]);

  const savePreset = () => {
    if (!presetName.trim()) {
      toast({
        title: "Nombre requerido",
        description: "Por favor ingresa un nombre para tu favorito",
        variant: "destructive"
      });
      return;
    }

    const newPreset: NarrationPreset = {
      id: Date.now().toString(),
      nombre: presetName.trim(),
      speed,
      pitch,
      volume,
      voiceURI: selectedVoice?.voiceURI || '',
      pauseBetweenPhrases,
      createdAt: Date.now()
    };

    setPresets(prev => [...prev, newPreset]);
    setPresetName('');
    setShowSaveInput(false);

    toast({
      title: "Favorito guardado",
      description: `"${newPreset.nombre}" se ha guardado correctamente`,
    });
  };

  const loadPreset = (preset: NarrationPreset) => {
    onSpeedChange(preset.speed);
    onPitchChange(preset.pitch);
    onVolumeChange(preset.volume);
    if (preset.voiceURI) {
      onVoiceChange(preset.voiceURI);
    }
    onPauseBetweenPhrasesChange(preset.pauseBetweenPhrases);

    toast({
      title: "Favorito cargado",
      description: `"${preset.nombre}" activado`,
    });
  };

  const deletePreset = (presetId: string) => {
    setPresets(prev => {
      const newPresets = prev.filter(p => p.id !== presetId);
      localStorage.setItem('narrationPresets', JSON.stringify(newPresets));
      return newPresets;
    });
    toast({
      title: "Favorito eliminado",
      description: "El favorito se ha eliminado correctamente",
    });
  };

  const spanishVoices = voices.filter(v => v.lang.startsWith('es'));
  const voicesToShow = spanishVoices.length > 0 ? spanishVoices : voices;

  return (
    <div className="glass-effect rounded-lg p-4">
      <h3 className="text-sm font-semibold gold-text mb-3 flex items-center gap-2 uppercase tracking-wider">
        <Settings className="w-4 h-4" />
        Control de Narración
      </h3>

      {/* Sección de Favoritos */}
      {presets.length > 0 && (
        <div className="p-3 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400 uppercase tracking-wider">
              Favoritos de Narración
            </span>
          </div>
          <div className="space-y-1.5">
            {presets.map((preset) => (
              <div
                key={preset.id}
                className="flex items-center gap-2 bg-white dark:bg-stone-800 rounded px-2.5 py-2"
              >
                <Button
                  onClick={() => loadPreset(preset)}
                  variant="ghost"
                  className="flex-1 justify-start h-auto p-0 text-xs text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 font-normal"
                >
                  {preset.nombre}
                </Button>
                <Button
                  onClick={() => deletePreset(preset.id)}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-red-50 dark:hover:bg-red-900/20"
                  title="Eliminar favorito"
                >
                  <Trash2 className="w-3.5 h-3.5 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Guardar nuevo favorito */}
      <div>
        {!showSaveInput ? (
          <Button
            onClick={() => setShowSaveInput(true)}
            size="sm"
            variant="outline"
            className="w-full h-8 text-xs gap-2"
          >
            <Save className="w-3.5 h-3.5" />
            Guardar como favorito
          </Button>
        ) : (
          <div className="flex gap-1.5">
            <Input
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              placeholder="Nombre del favorito..."
              className="h-8 text-xs"
              onKeyDown={(e) => {
                if (e.key === 'Enter') savePreset();
                if (e.key === 'Escape') {
                  setShowSaveInput(false);
                  setPresetName('');
                }
              }}
              autoFocus
            />
            <Button
              onClick={savePreset}
              size="sm"
              className="h-8 px-3"
            >
              <Save className="w-3.5 h-3.5" />
            </Button>
            <Button
              onClick={() => {
                setShowSaveInput(false);
                setPresetName('');
              }}
              size="sm"
              variant="ghost"
              className="h-8 px-3"
            >
              ✕
            </Button>
          </div>
        )}
      </div>

      {voicesToShow.length > 0 && (
        <div>
          <label className="text-xs font-medium text-[#aaa] mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
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
          <label className="text-xs font-medium text-[#aaa] flex items-center justify-between uppercase tracking-wide">
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
          <label className="text-xs font-medium text-[#aaa] flex items-center justify-between uppercase tracking-wide">
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
          <label className="text-xs font-medium text-[#aaa] flex items-center justify-between uppercase tracking-wide">
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
          <label className="text-xs font-medium text-[#aaa] flex items-center justify-between gap-2 uppercase tracking-wide">
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