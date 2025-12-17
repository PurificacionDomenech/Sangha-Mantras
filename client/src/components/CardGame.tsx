
import { useState } from "react";
import { Volume2, X } from "lucide-react";
import type { NombreSagrado } from "@/lib/mantras-data";
import { Button } from "@/components/ui/button";

interface CardGameProps {
  nombres: NombreSagrado[];
  onClose: () => void;
  categoria?: string;
}

export default function CardGame({ nombres, onClose, categoria }: CardGameProps) {
  const [selectedCard, setSelectedCard] = useState<NombreSagrado | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledDeck, setShuffledDeck] = useState(() => {
    const deck = [...nombres].filter(n => n.audioVersiones && n.audioVersiones.length > 0);
    return deck.sort(() => Math.random() - 0.5);
  });

  const selectCard = (nombre: NombreSagrado) => {
    setSelectedCard(nombre);
    setIsFlipped(false);
  };

  const resetGame = () => {
    setSelectedCard(null);
    setIsFlipped(false);
    const deck = [...nombres].filter(n => n.audioVersiones && n.audioVersiones.length > 0);
    setShuffledDeck(deck.sort(() => Math.random() - 0.5));
  };

  const readCard = () => {
    if (!selectedCard) return;
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const textToRead = isFlipped 
        ? `${selectedCard.nombre}. ${selectedCard.hebreo}. ${selectedCard.significado}${categoria ? `. ${categoria}` : ''}`
        : `${selectedCard.nombre}. ${selectedCard.hebreo}`;
      
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'es-ES';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const totalCards = Math.min(shuffledDeck.length, 20);
  const angleStep = 8;
  const baseAngle = -((totalCards - 1) * angleStep) / 2;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: "radial-gradient(circle at center, #1a0b2e 0%, #000000 100%)" }}>
      {/* Logo en la esquina superior */}
      <div className="absolute top-6 left-6 text-4xl gold-text" style={{ fontFamily: "'Cinzel', serif" }}>
        ༀ
      </div>

      {/* Botón de cerrar en la esquina superior derecha */}
      <Button
        onClick={onClose}
        className="absolute top-6 right-6 glass-effect text-[#bf953f] border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.8)] hover:bg-[rgba(191,149,63,0.1)]"
        size="icon"
      >
        <X className="w-5 h-5" />
      </Button>

      {!selectedCard ? (
        <div className="text-center">
          <h3 className="text-xl gold-text uppercase tracking-[0.3em] mb-12 opacity-70">
            SHEM HAMEPHORASH
          </h3>
          <div className="relative w-[300px] h-[200px]" style={{ perspective: "1000px" }}>
            {shuffledDeck.slice(0, totalCards).map((nombre, index) => {
              const rotation = baseAngle + (index * angleStep);
              return (
                <div
                  key={index}
                  onClick={() => selectCard(nombre)}
                  className="absolute w-[60px] h-[100px] glass-effect rounded-lg left-1/2 bottom-0 cursor-pointer transition-all duration-300 hover:bottom-5 hover:border-[rgba(255,215,0,0.8)] hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:z-50"
                  style={{
                    transform: `translateX(-50%) rotate(${rotation}deg) translateY(${Math.abs(rotation) * 0.5}px)`,
                    transformOrigin: "bottom center"
                  }}
                />
              );
            })}
          </div>
          <button
            onClick={onClose}
            className="mt-12 px-6 py-2 glass-effect text-[#bf953f] border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.8)] hover:bg-[rgba(191,149,63,0.1)] uppercase tracking-[0.2em] transition-all"
          >
            Volver
          </button>
        </div>
      ) : (
        <div className="text-center" style={{ perspective: "1000px" }}>
          <div
            className="w-[300px] h-[480px] cursor-pointer transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Cara frontal */}
            <div
              className="absolute w-full h-full glass-effect rounded-2xl flex flex-col justify-center items-center p-6"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div
                className="text-6xl font-bold mb-4 gold-text"
                style={{ fontFamily: "'Frank Ruhl Libre', serif", direction: "rtl" }}
              >
                {selectedCard.hebreo}
              </div>
              <div className="text-xl text-[#ddd] uppercase tracking-[0.15em] mb-6">
                {selectedCard.nombre}
              </div>
              <div className="text-xs opacity-50 mt-6">Pulsa para revelar</div>
            </div>

            {/* Cara trasera */}
            <div
              className="absolute w-full h-full glass-effect rounded-2xl flex flex-col justify-center items-center p-6"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "rgba(20, 10, 20, 0.85)",
                borderColor: "rgba(255, 255, 255, 0.1)"
              }}
            >
              <div className="text-xl gold-text mb-3 pb-2 border-b border-[#bf953f] uppercase tracking-wider">
                {selectedCard.nombre}
              </div>
              {categoria && (
                <div className="text-xs text-[#bf953f] mb-3 uppercase tracking-wide opacity-80">
                  {categoria}
                </div>
              )}
              <div className="text-xl gold-text mb-4 pb-3 border-b border-[#bf953f] uppercase tracking-wider">
                Significado
              </div>
              <div className="text-sm text-[#e0e0e0] leading-relaxed">
                {selectedCard.significado}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8 justify-center">
            <button
              onClick={readCard}
              className="px-6 py-2 glass-effect text-[#bf953f] border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.8)] hover:bg-[rgba(191,149,63,0.1)] uppercase tracking-[0.2em] transition-all flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" />
              Leer Carta
            </button>
            <button
              onClick={resetGame}
              className="px-6 py-2 glass-effect text-[#bf953f] border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.8)] hover:bg-[rgba(191,149,63,0.1)] uppercase tracking-[0.2em] transition-all"
            >
              Elegir otra carta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
