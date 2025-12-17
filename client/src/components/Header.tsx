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
    <header className="glass-effect border-b-2 border-[rgba(255,215,0,0.3)] mb-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl gold-text">ༀ</div>
            <h1 className="text-2xl font-bold gold-text-animated tracking-[0.3em]">
              MEDIT@
            </h1>
          </div>

          <nav className="flex gap-2">
            <Link href="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all uppercase tracking-wider ${
              location === '/'
                ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
            }`}>
              Mantras
            </Link>
            <Link href="/nombres-sagrados" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all uppercase tracking-wider ${
              location === '/nombres-sagrados'
                ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
            }`}>
              Nombres Sagrados
            </Link>
            <Link href="/meditaciones" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all uppercase tracking-wider ${
              location === '/meditaciones'
                ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
            }`}>
              Meditaciones
            </Link>
            <Link href="/tarot-botanico" className={`px-4 py-2 rounded-lg text-sm font-medium transition-all uppercase tracking-wider ${
              location === '/tarot-botanico'
                ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
            }`}>
              Tarot Botánico
            </Link>
          </nav>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 glass-effect text-[#bf953f] hover:text-[#fcf6ba] border-[rgba(255,215,0,0.3)] hover:border-[rgba(255,215,0,0.6)] uppercase tracking-wider">
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