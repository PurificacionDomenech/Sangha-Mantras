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
      className={`bg-gradient-to-br ${categoryColor} rounded-2xl p-8 shadow-lg border border-amber-200 dark:border-amber-700`}
      data-testid="mantra-display"
    >
      <div className="text-center">
        <div className="text-sm uppercase tracking-widest text-stone-600 dark:text-stone-700 mb-4">
          Mantra Actual
        </div>
        <div className={`text-3xl font-serif text-stone-800 dark:text-stone-900 leading-relaxed tracking-wide ${isPlaying ? 'animate-pulse' : ''}`}>
          ༀ {mantra.texto} ༀ
        </div>
        <div className="mt-4 text-sm text-stone-600 dark:text-stone-700">
          {mantra.deidad}
        </div>
        {repetitions > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/30 rounded-full">
            <span className="text-sm font-medium text-amber-800 dark:text-amber-900" data-testid="repetition-counter">
              {repetitions} repeticiones
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
