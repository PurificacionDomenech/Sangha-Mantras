
import { Clock } from "lucide-react";
import type { Meditacion } from "@/lib/mantras-data";

interface MeditacionCardProps {
  meditacion: Meditacion;
  isSelected: boolean;
  categoryColor: string;
  onClick: () => void;
}

export default function MeditacionCard({
  meditacion,
  isSelected,
  categoryColor,
  onClick,
}: MeditacionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all mb-2 ${
        isSelected
          ? 'glass-effect shadow-[0_0_15px_rgba(255,215,0,0.4)]'
          : 'bg-[rgba(30,30,40,0.5)] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
      }`}
    >
      <h3 className={`font-semibold mb-2 ${isSelected ? 'gold-text' : 'text-[#ddd]'}`}>
        {meditacion.titulo}
      </h3>
      <p className="text-xs text-[#aaa] mb-2">
        {meditacion.descripcion}
      </p>
      <div className="flex items-center gap-2 text-xs text-[#aaa]">
        <Clock className="w-3 h-3" />
        <span>{meditacion.duracion}</span>
        <span className="ml-2 px-2 py-0.5 bg-[rgba(191,149,63,0.2)] border border-[rgba(255,215,0,0.2)] rounded-full text-[#bf953f]">
          {meditacion.categoria}
        </span>
      </div>
    </button>
  );
}
