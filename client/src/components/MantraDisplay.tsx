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
      className={`bg-gradient-to-br ${categoryColor} rounded-lg p-3 shadow-md border border-amber-200 dark:border-amber-700`}
      data-testid="mantra-display"
    >
      <div className="text-center">
        <div className="text-[10px] uppercase tracking-wide text-stone-600 dark:text-stone-700 mb-1">
          Mantra Actual
        </div>
        <div className={`text-base font-serif text-stone-800 dark:text-stone-900 leading-snug tracking-wide ${isPlaying ? 'animate-pulse' : ''}`}>
          ༀ {mantra.texto} ༀ
        </div>
        <div className="mt-1 text-[10px] text-stone-600 dark:text-stone-700">
          {mantra.deidad}
        </div>
        {repetitions > 0 && (
          <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/50 dark:bg-white/30 rounded-full">
            <span className="text-[10px] font-medium text-amber-800 dark:text-amber-900" data-testid="repetition-counter">
              {repetitions} repeticiones
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
