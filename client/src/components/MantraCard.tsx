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
      className={`w-full text-left p-3 rounded-lg transition-all ${
        isSelected
          ? `bg-gradient-to-br ${categoryColor} shadow-lg border-2 border-amber-300 dark:border-amber-600`
          : 'bg-white/70 dark:bg-stone-800/70 hover:bg-white dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700'
      }`}
    >
      <div className="text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-0.5">
        {mantra.deidad}
      </div>
      <div className="text-sm font-light text-stone-800 dark:text-stone-200 mb-1">
        {mantra.nombre}
      </div>
      <div className="text-xs text-stone-600 dark:text-stone-400 leading-snug line-clamp-1">
        {mantra.significado}
      </div>
    </button>
  );
}
