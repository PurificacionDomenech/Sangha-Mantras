
import { Link } from "wouter";
import Home from "./home";
import Meditaciones from "./meditaciones";

export default function MantrasReflexiones() {
  const currentPath = window.location.pathname;
  const showMantras = currentPath === "/mantras-reflexiones";
  const showMeditaciones = currentPath === "/mantras-reflexiones/meditaciones";

  return (
    <div className="min-h-screen">
      <header className="glass-effect border-b-2 border-[rgba(255,215,0,0.3)] mb-4 md:mb-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3 md:py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a className="flex items-center gap-2 md:gap-3">
                  <div className="text-2xl md:text-3xl gold-text">ༀ</div>
                  <h1 className="text-xl md:text-2xl font-bold gold-text-animated tracking-[0.15em] md:tracking-[0.3em]">
                    MEDIT@
                  </h1>
                </a>
              </Link>
            </div>

            <nav className="flex flex-wrap gap-1.5 md:gap-2">
              <Link href="/mantras-reflexiones">
                <a className={`px-2 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all uppercase tracking-wide md:tracking-wider ${
                  showMantras
                    ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                    : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)]'
                }`}>
                  Mantras
                </a>
              </Link>
              <Link href="/mantras-reflexiones/meditaciones">
                <a className={`px-2 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all uppercase tracking-wide md:tracking-wider ${
                  showMeditaciones
                    ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                    : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)]'
                }`}>
                  Meditaciones
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {showMantras ? <Home /> : <Meditaciones />}
    </div>
  );
}
