import type { Mantra } from "@/lib/mantras-data";

interface MantraDisplayProps {
  mantra: Mantra;
  categoryColor: string;
  isPlaying: boolean;
  repetitions: number;
}

export default function MantraDisplay({ mantra, categoryColor, isPlaying, repetitions }: MantraDisplayProps) {
  return (
    <div 
      className={`bg-gradient-to-br ${categoryColor} rounded-xl p-4 shadow-md border border-amber-200 dark:border-amber-700`}
      data-testid="mantra-display"
    >
      <div className="text-center">
        <div className="text-xs uppercase tracking-wide text-stone-600 dark:text-stone-700 mb-2">
          Mantra Actual
        </div>
        <div className={`text-xl font-serif text-stone-800 dark:text-stone-900 leading-snug tracking-wide ${isPlaying ? 'animate-pulse' : ''}`}>
          ༀ {mantra.texto} ༀ
        </div>
        <div className="mt-2 text-xs text-stone-600 dark:text-stone-700">
          {mantra.deidad}
        </div>
        {repetitions > 0 && (
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-white/30 rounded-full">
            <span className="text-xs font-medium text-amber-800 dark:text-amber-900" data-testid="repetition-counter">
              {repetitions} repeticiones
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
