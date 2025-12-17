import type { Mantra } from "@/lib/mantras-data";

interface MantraCardProps {
  mantra: Mantra;
  isSelected: boolean;
  categoryColor: string;
  onClick: () => void;
  index: number;
}

export default function MantraCard({ mantra, isSelected, categoryColor, onClick, index }: MantraCardProps) {
  return (
    <button
      onClick={onClick}
      data-testid={`mantra-card-${index}`}
      className={`w-full text-left p-2 rounded-lg transition-all ${
        isSelected
          ? 'glass-effect shadow-[0_0_15px_rgba(255,215,0,0.4)]'
          : 'bg-[rgba(30,30,40,0.5)] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
      }`}
    >
      <div className="text-[10px] uppercase tracking-wide text-[#bf953f] mb-0.5">
        {mantra.deidad}
      </div>
      <div className={`text-xs font-light mb-0.5 ${isSelected ? 'gold-text' : 'text-[#ddd]'}`}>
        {mantra.nombre}
      </div>
      <div className="text-[10px] text-[#aaa] leading-snug line-clamp-1">
        {mantra.significado}
      </div>
    </button>
  );
}
