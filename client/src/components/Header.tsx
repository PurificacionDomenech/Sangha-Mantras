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
import { Link, useLocation } from "wouter";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800 mb-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">ༀ</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              MEDIT@
            </h1>
          </div>

          <nav className="flex gap-2">
            <Link href="/">
              <a className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                location === '/'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700'
              }`}>
                Mantras
              </a>
            </Link>
            <Link href="/nombres-sagrados">
              <a className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                location === '/nombres-sagrados'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700'
              }`}>
                Nombres Sagrados
              </a>
            </Link>
            <Link href="/meditaciones">
              <a className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                location === '/meditaciones'
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white/50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-stone-700'
              }`}>
                Meditaciones
              </a>
            </Link>
          </nav>

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