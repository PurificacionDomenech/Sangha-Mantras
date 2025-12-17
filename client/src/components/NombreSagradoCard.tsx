
import type { NombreSagrado } from "@/lib/mantras-data";

interface NombreSagradoCardProps {
  nombre: NombreSagrado;
  isSelected: boolean;
  categoryColor: string;
  onClick: () => void;
  index: number;
}

export default function NombreSagradoCard({ 
  nombre, 
  isSelected, 
  categoryColor, 
  onClick, 
  index
}: NombreSagradoCardProps) {
  const isYHWH = nombre.nombre === "YHWH";

  return (
    <button
      onClick={isYHWH ? undefined : onClick}
      data-testid={`nombre-card-${index}`}
      disabled={isYHWH}
      className={`w-full text-left p-2 rounded-lg transition-all ${
        isYHWH 
          ? 'glass-effect opacity-60 cursor-not-allowed'
          : isSelected
          ? 'glass-effect shadow-[0_0_15px_rgba(255,215,0,0.4)]'
          : 'bg-[rgba(30,30,40,0.5)] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
      }`}
    >
      <div className="text-[10px] uppercase tracking-wide text-[#bf953f] mb-0.5 font-medium">
        {nombre.nombre}
      </div>
      
      <div 
        className={`text-xs font-light mb-0.5 ${isSelected ? 'gold-text' : 'text-[#ddd]'}`}
        style={{ fontFamily: "'Frank Ruhl Libre', serif", direction: 'rtl' }}
      >
        {nombre.hebreo}
      </div>
      
      <div className="text-[10px] text-[#aaa] leading-snug line-clamp-1">
        {nombre.significado}
      </div>

      {isYHWH && (
        <div className="mt-0.5 text-[9px] italic text-[#bf953f]">
          ✦ No reproducible por respeto
        </div>
      )}
    </button>
  );
}
