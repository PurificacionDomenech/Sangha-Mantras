
import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Square, Plus, Edit, Trash2, Save, X } from "lucide-react";
import Header from "@/components/Header";
import MeditacionCard from "@/components/MeditacionCard";
import NarrationControls from "@/components/NarrationControls";
import AmbientSounds from "@/components/AmbientSounds";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { meditacionesGuiadas, estilosNarracion, ambientSounds, type Meditacion } from "@/lib/mantras-data";
import { useToast } from "@/hooks/use-toast";

interface MeditacionPersonalizada extends Meditacion {
  id: string;
}

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
  const [pauseBetweenPhrases, setPauseBetweenPhrases] = useState(3); // Pausa en segundos entre frases
  
  // Estados para meditaciones personalizadas
  const [meditacionesPersonalizadas, setMeditacionesPersonalizadas] = useState<MeditacionPersonalizada[]>([]);
  const [showCustomDialog, setShowCustomDialog] = useState(false);
  const [editingCustomId, setEditingCustomId] = useState<string | null>(null);
  const [customForm, setCustomForm] = useState({
    titulo: "",
    descripcion: "",
    texto: "",
    duracion: "10 min"
  });
  const [isCustomMeditation, setIsCustomMeditation] = useState(false);
  const [selectedCustomIndex, setSelectedCustomIndex] = useState(0);

  const isPlayingRef = useRef(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const ambientSoundsRef = useRef<{ activateSound: (soundId: string) => void; deactivateSound: (soundId: string) => void } | null>(null);

  const currentCategory = meditacionesGuiadas[selectedCategory];
  const currentMeditacion = isCustomMeditation 
    ? meditacionesPersonalizadas[selectedCustomIndex]
    : currentCategory.meditaciones[selectedMeditacionIndex];

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

  // Cargar meditaciones personalizadas del localStorage
  useEffect(() => {
    const saved = localStorage.getItem('meditacionesPersonalizadas');
    if (saved) {
      try {
        setMeditacionesPersonalizadas(JSON.parse(saved));
      } catch (e) {
        console.error('Error cargando meditaciones personalizadas:', e);
      }
    }
  }, []);

  // Guardar meditaciones personalizadas en localStorage
  useEffect(() => {
    if (meditacionesPersonalizadas.length > 0) {
      localStorage.setItem('meditacionesPersonalizadas', JSON.stringify(meditacionesPersonalizadas));
    }
  }, [meditacionesPersonalizadas]);

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

  

  const speakMeditation = useCallback(() => {
    if (!('speechSynthesis' in window)) return;

    const cleanedText = cleanText(currentMeditacion.texto);
    
    // Dividir el texto por saltos de línea y oraciones
    const lines = cleanedText.split('\n');
    const segments: Array<{ text: string; hasLineBreakAfter: boolean }> = [];
    
    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();
      if (trimmedLine.length === 0) return;
      
      // Dividir cada línea en oraciones
      const sentences = trimmedLine.split(/(?<=[.!?…])\s+/).filter(s => s.trim().length > 0);
      
      sentences.forEach((sentence, sentIndex) => {
        const isLastSentenceInLine = sentIndex === sentences.length - 1;
        const hasLineBreakAfter = isLastSentenceInLine && lineIndex < lines.length - 1;
        
        segments.push({
          text: sentence.trim(),
          hasLineBreakAfter
        });
      });
    });
    
    let currentSegmentIndex = 0;

    const speakNextSegment = async () => {
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

      const segment = segments[currentSegmentIndex];
      const utterance = new SpeechSynthesisUtterance(segment.text);
      
      // Aplicar parámetros ACTUALES
      utterance.rate = speed;
      utterance.pitch = pitch;
      utterance.volume = volume;
      utterance.lang = 'es-ES';
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.onend = async () => {
        // Calcular pausa: base + 2 segundos extra si hay salto de línea
        const pauseDuration = segment.hasLineBreakAfter 
          ? (pauseBetweenPhrases + 2) * 1000 
          : pauseBetweenPhrases * 1000;
        
        // Esperar la pausa antes de continuar
        await new Promise(resolve => setTimeout(resolve, pauseDuration));
        
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
  }, [currentMeditacion.texto, speed, pitch, volume, selectedVoice, stopMeditation, toast, pauseBetweenPhrases]);

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
    setIsCustomMeditation(false);
    setSelectedMeditacionIndex(index);
  }, [stopMeditation]);

  const handleCustomMeditacionChange = useCallback((index: number) => {
    stopMeditation();
    setIsCustomMeditation(true);
    setSelectedCustomIndex(index);
  }, [stopMeditation]);

  const openCustomDialog = useCallback((editId?: string) => {
    if (editId) {
      const medToEdit = meditacionesPersonalizadas.find(m => m.id === editId);
      if (medToEdit) {
        setCustomForm({
          titulo: medToEdit.titulo,
          descripcion: medToEdit.descripcion,
          texto: medToEdit.texto,
          duracion: medToEdit.duracion
        });
        setEditingCustomId(editId);
      }
    } else {
      setCustomForm({
        titulo: "",
        descripcion: "",
        texto: "",
        duracion: "10 min"
      });
      setEditingCustomId(null);
    }
    setShowCustomDialog(true);
  }, [meditacionesPersonalizadas]);

  const saveCustomMeditation = useCallback(() => {
    if (!customForm.titulo.trim() || !customForm.texto.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa el título y el texto de la meditación",
        variant: "destructive"
      });
      return;
    }

    if (editingCustomId) {
      // Editar existente
      setMeditacionesPersonalizadas(prev => 
        prev.map(m => m.id === editingCustomId 
          ? { ...customForm, id: editingCustomId, categoria: "Personalizada" }
          : m
        )
      );
      toast({
        title: "Meditación actualizada",
        description: `"${customForm.titulo}" se ha actualizado correctamente`
      });
    } else {
      // Crear nueva
      const newMed: MeditacionPersonalizada = {
        ...customForm,
        id: Date.now().toString(),
        categoria: "Personalizada"
      };
      setMeditacionesPersonalizadas(prev => [...prev, newMed]);
      toast({
        title: "Meditación guardada",
        description: `"${customForm.titulo}" se ha guardado correctamente`
      });
    }

    setShowCustomDialog(false);
    setEditingCustomId(null);
  }, [customForm, editingCustomId, toast]);

  const deleteCustomMeditation = useCallback((id: string) => {
    const medToDelete = meditacionesPersonalizadas.find(m => m.id === id);
    setMeditacionesPersonalizadas(prev => prev.filter(m => m.id !== id));
    
    // Si estamos reproduciendo la que se borra, detener
    if (isCustomMeditation && meditacionesPersonalizadas[selectedCustomIndex]?.id === id) {
      stopMeditation();
    }
    
    toast({
      title: "Meditación eliminada",
      description: `"${medToDelete?.titulo}" se ha eliminado correctamente`
    });
  }, [meditacionesPersonalizadas, isCustomMeditation, selectedCustomIndex, stopMeditation, toast]);

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

            {/* Lista de meditaciones predefinidas */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-stone-100">
              {currentCategory.meditaciones.map((meditacion, idx) => (
                <MeditacionCard
                  key={idx}
                  meditacion={meditacion}
                  isSelected={!isCustomMeditation && selectedMeditacionIndex === idx}
                  categoryColor={currentCategory.color}
                  onClick={() => handleMeditacionChange(idx)}
                />
              ))}
            </div>

            {/* Sección de Meditaciones Personalizadas */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                  Mis Meditaciones
                </h4>
                <Button
                  onClick={() => openCustomDialog()}
                  size="sm"
                  variant="outline"
                  className="h-8 gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  Nueva
                </Button>
              </div>
              
              {meditacionesPersonalizadas.length === 0 ? (
                <div className="text-center py-6 bg-white/50 dark:bg-stone-800/50 rounded-lg">
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Aún no tienes meditaciones personalizadas.
                    <br />
                    Crea una para que se lea con tu voz preferida.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-stone-100">
                  {meditacionesPersonalizadas.map((meditacion, idx) => (
                    <div key={meditacion.id} className="relative group">
                      <MeditacionCard
                        meditacion={meditacion}
                        isSelected={isCustomMeditation && selectedCustomIndex === idx}
                        categoryColor="from-amber-100 to-orange-100"
                        onClick={() => handleCustomMeditacionChange(idx)}
                      />
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            openCustomDialog(meditacion.id);
                          }}
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0 bg-white/90 dark:bg-stone-700/90"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteCustomMeditation(meditacion.id);
                          }}
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0 bg-white/90 dark:bg-stone-700/90 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
              pauseBetweenPhrases={pauseBetweenPhrases}
              onSpeedChange={handleSpeedChange}
              onPitchChange={handlePitchChange}
              onVolumeChange={handleVolumeChange}
              onVoiceChange={handleVoiceChange}
              onPauseBetweenPhrasesChange={setPauseBetweenPhrases}
            />
            <AmbientSounds 
              isSessionActive={isPlaying} 
              ref={ambientSoundsRef}
            />
          </div>
        </div>
      </div>

      {/* Diálogo para crear/editar meditación personalizada */}
      <Dialog open={showCustomDialog} onOpenChange={setShowCustomDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCustomId ? "Editar Meditación" : "Nueva Meditación Personalizada"}
            </DialogTitle>
            <DialogDescription>
              Escribe el texto de tu meditación. Puedes incluir pausas usando (5 seg), (10 seg), etc.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5 block">
                Título
              </label>
              <Input
                value={customForm.titulo}
                onChange={(e) => setCustomForm(prev => ({ ...prev, titulo: e.target.value }))}
                placeholder="Ej: Mi meditación de gratitud"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5 block">
                Descripción breve
              </label>
              <Input
                value={customForm.descripcion}
                onChange={(e) => setCustomForm(prev => ({ ...prev, descripcion: e.target.value }))}
                placeholder="Ej: Una meditación para cultivar gratitud diaria"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5 block">
                Duración estimada
              </label>
              <Input
                value={customForm.duracion}
                onChange={(e) => setCustomForm(prev => ({ ...prev, duracion: e.target.value }))}
                placeholder="Ej: 10 min"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5 block">
                Texto de la meditación
              </label>
              <Textarea
                value={customForm.texto}
                onChange={(e) => setCustomForm(prev => ({ ...prev, texto: e.target.value }))}
                placeholder="Respira profundamente...(5 seg)&#10;Siente tu cuerpo...(7 seg)&#10;Suelta la tensión..."
                className="w-full min-h-[300px] font-mono text-sm"
              />
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1.5">
                Tip: Usa (X seg) para indicar pausas. Ej: "Respira...(5 seg)"
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button
              onClick={() => {
                setShowCustomDialog(false);
                setEditingCustomId(null);
              }}
              variant="outline"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button onClick={saveCustomMeditation}>
              <Save className="w-4 h-4 mr-2" />
              {editingCustomId ? "Actualizar" : "Guardar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
