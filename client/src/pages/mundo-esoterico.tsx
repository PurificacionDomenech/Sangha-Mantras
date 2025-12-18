
import { Link } from "wouter";
import TarotBotanico from "./tarot-botanico";

export default function MundoEsoterico() {
  return (
    <div className="min-h-screen">
      <header className="glass-effect border-b-2 border-[rgba(255,215,0,0.3)] mb-4 md:mb-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl gold-text">ༀ</div>
                <h1 className="text-xl md:text-2xl font-bold gold-text-animated tracking-[0.15em] md:tracking-[0.3em]">
                  MEDIT@
                </h1>
              </a>
            </Link>

            <nav>
              <div className="px-2 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)] uppercase tracking-wide md:tracking-wider">
                Tarot Botánico
              </div>
            </nav>
          </div>
        </div>
      </header>

      <TarotBotanico />
    </div>
  );
}
