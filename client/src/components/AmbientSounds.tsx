
import { useState, useEffect, useRef, useCallback } from "react";
import { Droplets, TreePine, Bell, Wind, CloudRain, Volume2, Circle, Disc3, Star, Save, Trash2, VolumeX } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ambientSounds, type AmbientSound, type SoundPreset } from "@/lib/mantras-data";
import { useToast } from "@/hooks/use-toast";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  TreePine,
  Bell,
  Circle,
  Disc3,
  Wind,
  CloudRain,
};

interface SoundState {
  active: boolean;
  volume: number;
}

interface AmbientSoundsProps {
  isSessionActive: boolean;
}

class OscillatorSound {
  private audioContext: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;

  start(type: string, volume: number) {
    this.stop();
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = volume * 0.3;
    this.gainNode.connect(this.audioContext.destination);

    switch (type) {
      case 'water':
        this.createWaterSound();
        break;
      case 'nature':
        this.createNatureSound();
        break;
      case 'bells':
        this.createBellsSound();
        break;
      case 'bells-high':
        this.createBellsHighSound();
        break;
      case 'bells-low':
        this.createBellsLowSound();
        break;
      case 'wind':
        this.createWindSound();
        break;
      case 'rain':
        this.createRainSound();
        break;
      case 'bowls':
        this.createBowlsSound();
        break;
      case 'bowls-crystal':
        this.createBowlsCrystalSound();
        break;
      case 'bowls-deep':
        this.createBowlsDeepSound();
        break;
      case 'gong':
        this.createGongSound();
        break;
      case 'gong-small':
        this.createGongSmallSound();
        break;
      case 'metronome':
        this.createMetronomeSound();
        break;
    }
  }

  private createNoiseBuffer(): AudioBuffer {
    const bufferSize = this.audioContext!.sampleRate * 2;
    const buffer = this.audioContext!.createBuffer(1, bufferSize, this.audioContext!.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  private createWaterSound() {
    this.noiseNode = this.audioContext!.createBufferSource();
    this.noiseNode.buffer = this.createNoiseBuffer();
    this.noiseNode.loop = true;

    this.filterNode = this.audioContext!.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.value = 800;

    const lfo = this.audioContext!.createOscillator();
    lfo.frequency.value = 0.3;
    const lfoGain = this.audioContext!.createGain();
    lfoGain.gain.value = 200;
    lfo.connect(lfoGain);
    lfoGain.connect(this.filterNode.frequency);
    lfo.start();

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode!);
    this.noiseNode.start();
  }

  private createNatureSound() {
    this.noiseNode = this.audioContext!.createBufferSource();
    this.noiseNode.buffer = this.createNoiseBuffer();
    this.noiseNode.loop = true;

    this.filterNode = this.audioContext!.createBiquadFilter();
    this.filterNode.type = 'bandpass';
    this.filterNode.frequency.value = 1000;
    this.filterNode.Q.value = 0.5;

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode!);
    this.noiseNode.start();
  }

  private createBellsSound() {
    const playBell = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      const frequencies = [523.25, 659.25, 783.99, 1046.50];
      osc.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
      osc.type = 'sine';

      oscGain.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 3);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      osc.stop(this.audioContext.currentTime + 3);
    };

    playBell();
    this.oscillator = setInterval(playBell, 4000 + Math.random() * 3000) as any;
  }

  private createWindSound() {
    this.noiseNode = this.audioContext!.createBufferSource();
    this.noiseNode.buffer = this.createNoiseBuffer();
    this.noiseNode.loop = true;

    this.filterNode = this.audioContext!.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.value = 400;

    const lfo = this.audioContext!.createOscillator();
    lfo.frequency.value = 0.1;
    const lfoGain = this.audioContext!.createGain();
    lfoGain.gain.value = 150;
    lfo.connect(lfoGain);
    lfoGain.connect(this.filterNode.frequency);
    lfo.start();

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode!);
    this.noiseNode.start();
  }

  private createRainSound() {
    this.noiseNode = this.audioContext!.createBufferSource();
    this.noiseNode.buffer = this.createNoiseBuffer();
    this.noiseNode.loop = true;

    this.filterNode = this.audioContext!.createBiquadFilter();
    this.filterNode.type = 'highpass';
    this.filterNode.frequency.value = 2000;

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode!);
    this.noiseNode.start();
  }

  private createBowlsSound() {
    const playBowl = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      const frequencies = [174, 285, 396, 417, 528];
      osc.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
      osc.type = 'sine';

      oscGain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 8);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      osc.stop(this.audioContext.currentTime + 8);
    };

    playBowl();
    this.oscillator = setInterval(playBowl, 6000 + Math.random() * 4000) as any;
  }

  private createBellsHighSound() {
    const playBell = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      const frequencies = [880, 1046.50, 1318.51, 1568];
      osc.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
      osc.type = 'sine';

      oscGain.gain.setValueAtTime(0.25, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 2.5);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      osc.stop(this.audioContext.currentTime + 2.5);
    };

    playBell();
    this.oscillator = setInterval(playBell, 3500 + Math.random() * 2500) as any;
  }

  private createBellsLowSound() {
    const playBell = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      const frequencies = [261.63, 329.63, 392, 493.88];
      osc.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
      osc.type = 'sine';

      oscGain.gain.setValueAtTime(0.35, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 4);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      osc.stop(this.audioContext.currentTime + 4);
    };

    playBell();
    this.oscillator = setInterval(playBell, 5000 + Math.random() * 3500) as any;
  }

  private createBowlsCrystalSound() {
    const playBowl = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      const frequencies = [432, 528, 639, 741, 852];
      osc.frequency.value = frequencies[Math.floor(Math.random() * frequencies.length)];
      osc.type = 'sine';

      oscGain.gain.setValueAtTime(0.35, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 10);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      osc.stop(this.audioContext.currentTime + 10);
    };

    playBowl();
    this.oscillator = setInterval(playBowl, 7000 + Math.random() * 5000) as any;
  }

  private createBowlsDeepSound() {
    const playBowl = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc1 = this.audioContext.createOscillator();
      const osc2 = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      const frequencies = [110, 146.83, 174, 196];
      const baseFreq = frequencies[Math.floor(Math.random() * frequencies.length)];
      osc1.frequency.value = baseFreq;
      osc2.frequency.value = baseFreq * 1.5;
      osc1.type = 'sine';
      osc2.type = 'sine';

      oscGain.gain.setValueAtTime(0.45, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 9);

      osc1.connect(oscGain);
      osc2.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc1.start();
      osc2.start();
      osc1.stop(this.audioContext.currentTime + 9);
      osc2.stop(this.audioContext.currentTime + 9);
    };

    playBowl();
    this.oscillator = setInterval(playBowl, 8000 + Math.random() * 4500) as any;
  }

  private createGongSound() {
    const playGong = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc1 = this.audioContext.createOscillator();
      const osc2 = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      osc1.frequency.value = 110;
      osc2.frequency.value = 165;
      osc1.type = 'triangle';
      osc2.type = 'sine';

      oscGain.gain.setValueAtTime(0.5, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 12);

      osc1.connect(oscGain);
      osc2.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc1.start();
      osc2.start();
      osc1.stop(this.audioContext.currentTime + 12);
      osc2.stop(this.audioContext.currentTime + 12);
    };

    playGong();
    this.oscillator = setInterval(playGong, 15000 + Math.random() * 10000) as any;
  }

  private createGongSmallSound() {
    const playGong = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc1 = this.audioContext.createOscillator();
      const osc2 = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      osc1.frequency.value = 220;
      osc2.frequency.value = 330;
      osc1.type = 'triangle';
      osc2.type = 'sine';

      oscGain.gain.setValueAtTime(0.4, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 6);

      osc1.connect(oscGain);
      osc2.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc1.start();
      osc2.start();
      osc1.stop(this.audioContext.currentTime + 6);
      osc2.stop(this.audioContext.currentTime + 6);
    };

    playGong();
    this.oscillator = setInterval(playGong, 8000 + Math.random() * 6000) as any;
  }

  private createMetronomeSound() {
    const playClick = () => {
      if (!this.audioContext || !this.gainNode) return;

      const osc = this.audioContext.createOscillator();
      const oscGain = this.audioContext.createGain();

      osc.frequency.value = 1000;
      osc.type = 'sine';

      oscGain.gain.setValueAtTime(0.5, this.audioContext.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.05);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();
      osc.stop(this.audioContext.currentTime + 0.05);
    };

    playClick();
    this.oscillator = setInterval(playClick, 1000) as any;
  }

  setVolume(volume: number) {
    if (this.gainNode) {
      this.gainNode.gain.value = volume * 0.3;
    }
  }

  stop() {
    if (typeof this.oscillator === 'number') {
      clearInterval(this.oscillator);
    }
    if (this.oscillator && typeof this.oscillator !== 'number') {
      try { this.oscillator.stop(); } catch {}
    }
    if (this.noiseNode) {
      try { this.noiseNode.stop(); } catch {}
    }
    if (this.audioContext) {
      try { this.audioContext.close(); } catch {}
    }
    this.oscillator = null;
    this.noiseNode = null;
    this.gainNode = null;
    this.filterNode = null;
    this.audioContext = null;
  }
}

export default function AmbientSounds({ isSessionActive }: AmbientSoundsProps) {
  const { toast } = useToast();
  const [sounds, setSounds] = useState<Record<string, SoundState>>(() => {
    const initialState: Record<string, SoundState> = {};
    ambientSounds.forEach(s => {
      initialState[s.id] = { active: false, volume: 0.5 };
    });
    return initialState;
  });
  const [presets, setPresets] = useState<SoundPreset[]>(() => {
    const saved = localStorage.getItem('soundPresets');
    return saved ? JSON.parse(saved) : [];
  });
  const [presetName, setPresetName] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);

  const soundRefs = useRef<Record<string, OscillatorSound>>({});

  const toggleSound = useCallback((soundId: string) => {
    setSounds(prev => {
      const newState = { ...prev, [soundId]: { ...prev[soundId], active: !prev[soundId].active } };

      if (newState[soundId].active) {
        if (!soundRefs.current[soundId]) {
          soundRefs.current[soundId] = new OscillatorSound();
        }
        soundRefs.current[soundId].start(soundId, newState[soundId].volume);
      } else {
        soundRefs.current[soundId]?.stop();
      }

      return newState;
    });
  }, []);

  const changeVolume = useCallback((soundId: string, volume: number) => {
    setSounds(prev => {
      const newState = { ...prev, [soundId]: { ...prev[soundId], volume } };
      if (soundRefs.current[soundId]) {
        soundRefs.current[soundId].setVolume(volume);
      }
      return newState;
    });
  }, []);

  useEffect(() => {
    return () => {
      Object.values(soundRefs.current).forEach(s => s.stop());
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('soundPresets', JSON.stringify(presets));
  }, [presets]);

  const savePreset = useCallback(() => {
    if (!presetName.trim()) {
      toast({
        title: "Nombre requerido",
        description: "Por favor ingresa un nombre para tu favorito",
        variant: "destructive"
      });
      return;
    }

    const newPreset: SoundPreset = {
      id: Date.now().toString(),
      nombre: presetName.trim(),
      sounds: { ...sounds },
      createdAt: Date.now()
    };

    setPresets(prev => [...prev, newPreset]);
    setPresetName('');
    setShowSaveInput(false);
    
    toast({
      title: "Favorito guardado",
      description: `"${newPreset.nombre}" se ha guardado correctamente`,
    });
  }, [presetName, sounds, toast]);

  const loadPreset = useCallback((preset: SoundPreset) => {
    Object.values(soundRefs.current).forEach(s => s.stop());

    setSounds(preset.sounds);

    Object.entries(preset.sounds).forEach(([soundId, state]) => {
      if (state.active) {
        if (!soundRefs.current[soundId]) {
          soundRefs.current[soundId] = new OscillatorSound();
        }
        soundRefs.current[soundId].start(soundId, state.volume);
      }
    });

    toast({
      title: "Favorito cargado",
      description: `"${preset.nombre}" activado`,
    });
  }, [toast]);

  const deletePreset = useCallback((presetId: string) => {
    setPresets(prev => prev.filter(p => p.id !== presetId));
    toast({
      title: "Favorito eliminado",
      description: "El favorito se ha eliminado correctamente",
    });
  }, [toast]);

  const stopAllSounds = useCallback(() => {
    Object.values(soundRefs.current).forEach(s => s.stop());
    
    setSounds(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(soundId => {
        newState[soundId] = { ...newState[soundId], active: false };
      });
      return newState;
    });

    toast({
      title: "Sonidos detenidos",
      description: "Todos los sonidos ambientales han sido desactivados",
    });
  }, [toast]);

  return (
    <div className="bg-white/70 dark:bg-stone-800/70 rounded-lg p-4" data-testid="ambient-sounds">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-stone-700 dark:text-stone-300 flex items-center gap-2">
          <Volume2 className="w-4 h-4" />
          Sonidos Ambientales
        </h3>
        {Object.values(sounds).some(s => s.active) && (
          <Button
            onClick={stopAllSounds}
            size="sm"
            variant="ghost"
            className="h-7 px-2 text-xs gap-1.5"
            title="Detener todos los sonidos"
          >
            <VolumeX className="w-3.5 h-3.5" />
            Detener todos
          </Button>
        )}
      </div>

      <p className="text-xs text-stone-500 dark:text-stone-400 mb-3">
        Puedes activar los sonidos solos o junto con los mantras
      </p>

      {/* Sección de Favoritos */}
      {presets.length > 0 && (
        <div className="mb-4 p-3 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg border border-amber-200 dark:border-amber-800">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Mis Favoritos
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
      <div className="mb-4">
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

      {/* Lista de sonidos */}
      <div className="space-y-2">
        {ambientSounds.map((sound, index) => {
          const IconComponent = iconMap[sound.icon];
          const soundState = sounds[sound.id];
          const isFirstNatural = sound.id === 'water';
          const isMetronome = sound.id === 'metronome';

          if (!soundState) return null;

          return (
            <div key={sound.id}>
              {isFirstNatural && (
                <div className="pt-3 pb-2 border-t border-stone-200 dark:border-stone-600 mt-2">
                  <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Naturales</span>
                </div>
              )}
              {isMetronome && (
                <div className="pt-3 pb-2 border-t border-stone-200 dark:border-stone-600 mt-2">
                  <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Ritmo</span>
                </div>
              )}
              {index === 0 && (
                <div className="pb-2">
                  <span className="text-xs font-medium text-stone-500 dark:text-stone-400">Orientales</span>
                </div>
              )}
              
              <div className="space-y-2">
                <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                  soundState.active
                    ? 'bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 shadow-sm'
                    : 'hover:bg-stone-100 dark:hover:bg-stone-700/30'
                }`}>
                  <div className="flex items-center gap-2">
                    {IconComponent && <IconComponent className="w-4 h-4 text-stone-500 dark:text-stone-400" />}
                    <span className="text-xs text-stone-700 dark:text-stone-300">{sound.nombre}</span>
                  </div>
                  <Switch
                    checked={soundState.active}
                    onCheckedChange={() => toggleSound(sound.id)}
                    data-testid={`ambient-toggle-${sound.id}`}
                  />
                </div>
                
                {soundState.active && (
                  <div className="px-3">
                    <Slider
                      value={[soundState.volume]}
                      onValueChange={([v]) => changeVolume(sound.id, v)}
                      min={0}
                      max={1}
                      step={0.05}
                      data-testid={`ambient-volume-${sound.id}`}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
