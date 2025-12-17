
import { useState, useEffect, useRef } from "react";
import { Sparkles, RefreshCw, Volume2, VolumeX } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

interface TarotCard {
  number: string;
  name: string;
  arcana: string;
  image: string;
  meaning: string;
  fullMeaning: string;
}

const tarotCards: TarotCard[] = [
  {
    number: "0",
    name: "La Semilla Latente",
    arcana: "El Loco",
    image: "seed",
    meaning: "Inicio absoluto, inocencia, potencial infinito y confianza ciega en la vida.",
    fullMeaning: "Representa el momento antes de tomar tierra, la energía pura antes de la manifestación. Un salto de fe hacia la existencia."
  },
  {
    number: "I",
    name: "La Raíz Primaria",
    arcana: "El Mago",
    image: "root",
    meaning: "Voluntad y manifestación. Tienes las herramientas para comenzar a crecer.",
    fullMeaning: "Es la conexión entre el cielo y la tierra. Acción consciente y canalización de energía para crear realidad."
  },
  {
    number: "II",
    name: "El Agua Subterránea",
    arcana: "La Sacerdotisa",
    image: "water",
    meaning: "Intuición, sabiduría oculta y subconsciente. Lo que nutre pero no se ve.",
    fullMeaning: "Es el conocimiento interior y los recursos emocionales profundos que sustentan la vida sin hacer ruido."
  },
  {
    number: "III",
    name: "La Madre Tierra",
    arcana: "La Emperatriz",
    image: "earth",
    meaning: "Fertilidad, abundancia y creatividad. La naturaleza en su máxima expresión.",
    fullMeaning: "Placer sensorial, belleza y el cuidado materno que permite el crecimiento físico."
  },
  {
    number: "IV",
    name: "El Tronco",
    arcana: "El Emperador",
    image: "trunk",
    meaning: "Estructura, estabilidad y protección. La autoridad y las reglas necesarias.",
    fullMeaning: "La fortaleza que viene de la disciplina y el orden. Límites claros."
  },
  {
    number: "V",
    name: "El Micelio",
    arcana: "El Sumo Sacerdote",
    image: "mycelium",
    meaning: "Tradición, creencias compartidas y educación. Conexión con la sabiduría ancestral.",
    fullMeaning: "El árbol no aprende solo; aprende a través de la red de los que vinieron antes."
  },
  {
    number: "VI",
    name: "La Bifurcación",
    arcana: "Los Enamorados",
    image: "branch",
    meaning: "Elección, unión y armonía. La decisión de cómo crecer.",
    fullMeaning: "La integración de dualidades y la cooperación. El compromiso con un camino o una alianza."
  },
  {
    number: "VII",
    name: "El Impulso de Savia",
    arcana: "El Carro",
    image: "sap",
    meaning: "Determinación, fuerza de voluntad y victoria sobre la inercia.",
    fullMeaning: "Avance rápido y dirección controlada. Superar obstáculos mediante la fuerza interior."
  },
  {
    number: "VIII",
    name: "El Duramen",
    arcana: "La Fuerza",
    image: "core",
    meaning: "Coraje, resistencia pasiva y compasión. Solidez interior.",
    fullMeaning: "No es fuerza bruta, sino la solidez interior que permite aguantar las tormentas sin romperse."
  },
  {
    number: "IX",
    name: "La Dormancia",
    arcana: "El Ermitaño",
    image: "winter",
    meaning: "Introspección, soledad necesaria y búsqueda interior.",
    fullMeaning: "Retirarse del mundo exterior para conservar energía y encontrar respuestas dentro."
  },
  {
    number: "X",
    name: "Los Anillos de Crecimiento",
    arcana: "La Rueda de la Fortuna",
    image: "rings",
    meaning: "Ciclos, destino y cambio inevitable. Todo es estacional.",
    fullMeaning: "Lo que sube baja, y los tiempos difíciles pasan al igual que los buenos."
  },
  {
    number: "XI",
    name: "La Poda",
    arcana: "La Justicia",
    image: "prune",
    meaning: "Causa y efecto, verdad y ajuste. Cortar lo que ya no sirve.",
    fullMeaning: "Decisiones frías pero necesarias. Equilibrio y responsabilidad por las propias acciones."
  },
  {
    number: "XII",
    name: "La Hoja Colgante",
    arcana: "El Colgado",
    image: "leaf",
    meaning: "Pausa, sacrificio y nueva perspectiva. Dejar ir el control.",
    fullMeaning: "Estar en un limbo necesario para la transformación. Ver el mundo desde un ángulo diferente."
  },
  {
    number: "XIII",
    name: "El Humus",
    arcana: "La Muerte",
    image: "humus",
    meaning: "Transformación profunda, final y renacimiento.",
    fullMeaning: "No es el fin de la vida, sino el cambio de estado. La descomposición de lo viejo es el fertilizante obligatorio para lo nuevo."
  },
  {
    number: "XIV",
    name: "La Fotosíntesis",
    arcana: "La Templanza",
    image: "photosynthesis",
    meaning: "Alquimia, equilibrio y moderación. La mezcla correcta de elementos.",
    fullMeaning: "Paciencia y adaptación armoniosa al entorno para crear sanación y sustento."
  },
  {
    number: "XV",
    name: "La Hiedra Asfixiante",
    arcana: "El Diablo",
    image: "ivy",
    meaning: "Ataduras, adicciones y materialismo. Dependencias que restringen la libertad.",
    fullMeaning: "Dependencias que parecen inofensivas al principio pero que terminan restringiendo el crecimiento."
  },
  {
    number: "XVI",
    name: "El Rayo",
    arcana: "La Torre",
    image: "lightning",
    meaning: "Cambio repentino, destrucción de estructuras falsas y revelación impactante.",
    fullMeaning: "El colapso del ego o de una situación insostenible. Doloroso, pero liberador a largo plazo."
  },
  {
    number: "XVII",
    name: "El Rocío Matinal",
    arcana: "La Estrella",
    image: "dew",
    meaning: "Esperanza, sanación y renovación espiritual. La calma después de la tormenta.",
    fullMeaning: "Inspiración pura y fe en el futuro. Conexión con el cosmos."
  },
  {
    number: "XVIII",
    name: "La Sombra del Bosque",
    arcana: "La Luna",
    image: "shadow",
    meaning: "Ilusión, miedo y confusión. El reino de los sueños y las pesadillas.",
    fullMeaning: "Lo que no es lo que parece. Navegar por la incertidumbre y confiar en el instinto."
  },
  {
    number: "XIX",
    name: "El Fruto Maduro",
    arcana: "El Sol",
    image: "fruit",
    meaning: "Éxito, alegría y vitalidad. Realización plena.",
    fullMeaning: "Claridad absoluta y felicidad compartida. El resultado tangible y positivo del trabajo realizado."
  },
  {
    number: "XX",
    name: "La Dispersión",
    arcana: "El Juicio",
    image: "seeds",
    meaning: "El llamado, despertar y renacimiento. Evaluación final.",
    fullMeaning: "El momento de responder a tu vocación superior y expandirte hacia una nueva fase de existencia."
  },
  {
    number: "XXI",
    name: "El Ecosistema",
    arcana: "El Mundo",
    image: "ecosystem",
    meaning: "Completitud, integración y logro final. El ciclo se ha cerrado exitosamente.",
    fullMeaning: "Entender tu lugar en el todo. Plenitud y perfección."
  }
];

const spreads = {
  single: {
    name: "Carta del Día",
    description: "Una carta para guiar tu jornada",
    positions: ["Tu energía de hoy"],
    count: 1
  },
  three: {
    name: "Tirada de Tres Cartas",
    description: "Pasado, Presente y Futuro",
    positions: ["Pasado", "Presente", "Futuro"],
    count: 3
  },
  cross: {
    name: "Cruz Celta Simplificada",
    description: "Una visión profunda de tu situación actual",
    positions: ["Situación Actual", "Desafío", "Pasado", "Futuro Cercano", "Resultado"],
    count: 5
  },
  tree: {
    name: "Tirada del Árbol",
    description: "Explora tu crecimiento personal como un árbol",
    positions: ["Raíces (Base)", "Tronco (Fuerza)", "Ramas (Opciones)", "Hojas (Manifestación)", "Frutos (Resultado)"],
    count: 5
  }
};

export default function TarotBotanico() {
  const [selectedSpread, setSelectedSpread] = useState<keyof typeof spreads | null>(null);
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const shuffleAndDraw = (spreadType: keyof typeof spreads) => {
    const spread = spreads[spreadType];
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const drawn = shuffled.slice(0, spread.count);
    setSelectedSpread(spreadType);
    setDrawnCards(drawn);
    setFlippedCards(new Set());
  };

  const toggleFlip = (index: number) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  const speakText = (text: string) => {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const spanishVoice = availableVoices.find(voice => voice.lang.startsWith('es'));
    
    if (spanishVoice) {
      utterance.voice = spanishVoice;
    }
    
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const readCardAndInterpretation = () => {
    if (!selectedSpread) return;
    
    const flippedCardsArray = Array.from(flippedCards).sort((a, b) => a - b);
    
    let fullText = "Lectura del Tarot Botánico. ";
    
    flippedCardsArray.forEach((index) => {
      const card = drawnCards[index];
      const position = spreads[selectedSpread].positions[index];
      
      fullText += `${position}: ${card.name}, también conocida como ${card.arcana}. `;
      fullText += `${card.fullMeaning} `;
    });
    
    speakText(fullText);
  };

  const reset = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setSelectedSpread(null);
    setDrawnCards([]);
    setFlippedCards(new Set());
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" style={{ backgroundImage: 'url(/fondo-tarot.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e]/90 via-[#000000]/80 to-[#1a0b2e]/90"></div>
      <div className="relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-4 pb-12">
          <header className="text-center mb-8 animate-fadeInDown">
            <h1 className="text-5xl font-bold gold-text-animated mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              🌱 TAROT BOTÁNICO 🌱
            </h1>
            <p className="text-xl text-[#8ba888] italic tracking-wider mb-4">
              Del Loco al Mundo - Un viaje desde la semilla hasta el ecosistema
            </p>
            <p className="text-base text-[#aaa] italic max-w-3xl mx-auto">
              Esta lectura te invita a contemplar cómo estas energías botánicas se entrelazan en tu vida. 
              Como un árbol que crece desde la raíz hasta el fruto, tu camino es un proceso orgánico de transformación y florecimiento.
            </p>
          </header>

          {!selectedSpread ? (
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-lg p-8 mb-6 text-center">
                <h2 className="text-2xl font-semibold gold-text mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                  Bienvenido al Tarot Botánico
                </h2>
                <p className="text-[#ddd] mb-2">
                  Cada carta representa una etapa en el ciclo de vida de un árbol, desde la semilla hasta el ecosistema completo.
                </p>
                <p className="text-[#aaa]">
                  Selecciona una tirada para comenzar tu lectura.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(spreads).map(([key, spread]) => (
                  <button
                    key={key}
                    onClick={() => shuffleAndDraw(key as keyof typeof spreads)}
                    className="glass-effect p-6 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all group"
                  >
                    <h3 className="text-xl font-semibold gold-text mb-2 group-hover:gold-text-animated" style={{ fontFamily: "'Cinzel', serif" }}>
                      {spread.name}
                    </h3>
                    <p className="text-[#aaa] text-sm">{spread.description}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="glass-effect rounded-lg p-6 mb-6 text-center">
                <h2 className="text-2xl font-semibold gold-text mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                  {spreads[selectedSpread].name}
                </h2>
                <p className="text-[#aaa]">{spreads[selectedSpread].description}</p>
              </div>

              <div className="flex justify-center flex-wrap gap-6 mb-8 min-h-[500px] perspective-1000">
                {drawnCards.map((card, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      animation: `cardAppear 0.6s ease-out ${0.1 * (index + 1)}s backwards`
                    }}
                  >
                    <div
                      onClick={() => toggleFlip(index)}
                      className={`w-[200px] h-[350px] cursor-pointer transition-transform duration-800 preserve-3d ${
                        flippedCards.has(index) ? 'rotate-y-180' : ''
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: flippedCards.has(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      {/* Card Back */}
                      <div className="absolute inset-0 backface-hidden glass-effect border-2 border-[rgba(255,215,0,0.5)] rounded-lg p-4 flex items-center justify-center">
                        <div className="w-full h-full border border-[rgba(255,215,0,0.3)] rounded flex items-center justify-center">
                          <Sparkles className="w-16 h-16 gold-text" />
                        </div>
                      </div>

                      {/* Card Front */}
                      <div
                        className="absolute inset-0 backface-hidden rounded-lg p-4 flex flex-col overflow-hidden"
                        style={{ 
                          transform: 'rotateY(180deg)',
                          background: 'linear-gradient(135deg, rgba(26, 47, 26, 0.95) 0%, rgba(13, 26, 13, 0.98) 100%)',
                          border: '3px solid rgba(212, 175, 55, 0.4)',
                          boxShadow: 'inset 0 0 30px rgba(212, 175, 55, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)'
                        }}
                      >
                        <div className="absolute inset-0 rounded-lg opacity-10" style={{ 
                          background: 'radial-gradient(circle at 30% 20%, rgba(138, 168, 136, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(74, 103, 65, 0.3) 0%, transparent 50%)'
                        }}></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="text-center mb-2 pb-2 border-b border-[rgba(212,175,55,0.3)]">
                            <div className="text-lg font-bold gold-text mb-0.5" style={{ fontFamily: "'Cinzel', serif", textShadow: '0 0 8px rgba(212, 175, 55, 0.5)' }}>
                              {card.number}
                            </div>
                            <div className="text-sm font-semibold text-[#8ba888] uppercase tracking-wide leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                              {card.name}
                            </div>
                            <div className="text-xs text-[#d4af37] opacity-70 italic mt-0.5">
                              {card.arcana}
                            </div>
                          </div>
                          
                          <div className="flex-1 flex items-center justify-center mb-2 relative min-h-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8ba888]/10 to-[#4a6741]/10 rounded-lg"></div>
                            <span className="text-6xl relative z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                              {card.image === 'seed' ? '🌱' : card.image === 'fruit' ? '🍎' : '🌿'}
                            </span>
                          </div>
                          
                          <div className="text-xs text-[#c0c0c0] text-center leading-snug px-2 py-2 bg-[rgba(0,0,0,0.3)] rounded-lg border border-[rgba(212,175,55,0.2)] overflow-y-auto max-h-[120px]">
                            {card.meaning}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-[#8ba888] tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                      {spreads[selectedSpread].positions[index]}
                    </div>
                  </div>
                ))}
              </div>

              {flippedCards.size > 0 && (
                <div className="glass-effect rounded-lg p-6 max-w-4xl mx-auto mb-6 animate-fadeIn">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold gold-text text-center flex-1" style={{ fontFamily: "'Cinzel', serif" }}>
                      Interpretación de tu Tirada
                    </h3>
                    <Button
                      onClick={isSpeaking ? stopSpeaking : readCardAndInterpretation}
                      className={`glass-effect border-2 ${
                        isSpeaking 
                          ? 'border-red-500 text-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]' 
                          : 'gold-text hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                      }`}
                      size="sm"
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-4 h-4 mr-2" />
                          Detener
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 mr-2" />
                          Escuchar
                        </>
                      )}
                    </Button>
                  </div>
                  {drawnCards.map((card, index) => (
                    flippedCards.has(index) && (
                      <p key={index} className="text-[#ddd] mb-4 leading-relaxed">
                        <strong className="gold-text">{spreads[selectedSpread].positions[index]}: {card.name}</strong>
                        <br />
                        {card.fullMeaning}
                      </p>
                    )
                  ))}
                </div>
              )}

              <div className="text-center">
                <Button
                  onClick={reset}
                  className="glass-effect gold-text border-2 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] px-8 py-6 text-lg uppercase tracking-wider"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Nueva Lectura
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
