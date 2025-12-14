import { Volume2, HelpCircle } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-800 border-b border-amber-200 dark:border-stone-700">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-5xl">ༀ</div>
            <div>
              <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 tracking-widest">
                SANGHA MANTRAS
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Práctica de mantras budistas
              </p>
            </div>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <HelpCircle className="w-4 h-4" />
                Instrucciones
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Instrucciones de Práctica</DialogTitle>
                <DialogDescription>
                  Sigue estos pasos para una práctica óptima
                </DialogDescription>
              </DialogHeader>
              <ol className="space-y-3 text-sm text-stone-600 dark:text-stone-400 mt-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">1</span>
                  <span>Encuentra un lugar tranquilo y adopta una postura cómoda</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">2</span>
                  <span>Selecciona una categoría según tu intención de práctica</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">3</span>
                  <span>Elige el mantra que resuene contigo en este momento</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">4</span>
                  <span>Configura la duración y los sonidos ambientales si lo deseas</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">5</span>
                  <span>Respira profundamente y comienza la sesión</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xs font-medium">6</span>
                  <span>Recita el mantra en voz alta o mentalmente junto con la voz guía</span>
                </li>
              </ol>
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <p className="text-xs text-amber-800 dark:text-amber-300 italic">
                  "El mantra es una herramienta para calmar la mente y conectar con la esencia más profunda de nuestro ser."
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}