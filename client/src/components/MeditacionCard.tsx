
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
          ? `bg-gradient-to-r ${categoryColor} shadow-lg scale-[1.02]`
          : 'bg-white/70 dark:bg-stone-800/70 hover:bg-white/90 dark:hover:bg-stone-800/90'
      }`}
    >
      <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">
        {meditacion.titulo}
      </h3>
      <p className="text-xs text-stone-600 dark:text-stone-400 mb-2">
        {meditacion.descripcion}
      </p>
      <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-500">
        <Clock className="w-3 h-3" />
        <span>{meditacion.duracion}</span>
        <span className="ml-2 px-2 py-0.5 bg-stone-100 dark:bg-stone-700 rounded-full">
          {meditacion.categoria}
        </span>
      </div>
    </button>
  );
}
