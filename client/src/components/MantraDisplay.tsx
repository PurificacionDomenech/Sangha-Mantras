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
      className="glass-effect rounded-lg p-6 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
      data-testid="mantra-display"
    >
      <div className="text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-[#bf953f] mb-2 font-medium">
          {mantra.deidad}
        </div>
        <div
          className={`text-4xl font-light leading-tight mb-3 gold-text ${isPlaying ? 'animate-pulse' : ''}`}
        >
          {mantra.nombre}
        </div>
        <div className="text-xl mb-2 font-serif italic text-[#ddd]">
          {mantra.texto}
        </div>
        <div className="text-sm border-t border-[rgba(255,215,0,0.2)] pt-3 text-[#aaa] leading-relaxed">
          {mantra.significado}
        </div>
        {repetitions > 0 && (
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(191,149,63,0.2)] rounded-full border border-[rgba(255,215,0,0.3)]">
            <span className="text-xs font-medium gold-text" data-testid="repetition-counter">
              {repetitions} repeticiones
            </span>
          </div>
        )}
      </div>
    </div>
  );
}