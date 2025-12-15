import { Info } from "lucide-react";

export default function InstructionsPanel() {
  return (
    <div className="bg-white/50 dark:bg-stone-800/50 rounded-2xl p-6" data-testid="instructions-panel">
      <h3 className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-4 flex items-center gap-2">
        <Info className="w-4 h-4" />
        Instrucciones de Práctica
      </h3>
      <ol className="space-y-3 text-sm text-stone-600 dark:text-stone-400">
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">1</span>
          <span>Encuentra un lugar tranquilo y adopta una postura cómoda</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">2</span>
          <span>Elige entre Mantras o Nombres Sagrados según tu práctica</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">3</span>
          <span>Selecciona una categoría y el mantra o nombre que resuene contigo</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">4</span>
          <span>Elige la tradición cultural y personaliza la voz guía</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">5</span>
          <span>Configura la duración y añade sonidos ambientales si lo deseas</span>
        </li>
        <li className="flex gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">6</span>
          <span>Respira profundamente y comienza la sesión meditativa</span>
        </li>
      </ol>
      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
        <p className="text-xs text-amber-800 dark:text-amber-300 italic">
          "La recitación consciente de mantras y nombres sagrados es un puente hacia la paz interior y la conexión espiritual."
        </p>
      </div>
    </div>
  );
}
