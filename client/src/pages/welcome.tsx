
import { Link } from "wouter";

export default function Welcome() {
  return (
    <div 
      className="min-h-screen relative flex items-center justify-center bg-black"
    >
      <img 
        src="/Galaxia.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fadeInDown">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-5xl gold-text">ༀ</div>
            <h1 className="text-5xl md:text-6xl font-bold gold-text tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              MEDIT@
            </h1>
          </div>
          <p className="text-2xl gold-text tracking-wider mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
            Bienvenid@
          </p>
          <p className="text-base text-[#ddd] max-w-3xl mx-auto leading-relaxed">
            Este es un espacio dedicado a nutrir y desarrollar tu lado espiritual. Entendemos que cada persona alimenta su espíritu desde perspectivas únicas y diversas, y nuestro único propósito es acompañarte en ese crecimiento, sin importar el camino, tradición o sendero que hayas elegido. Aquí todos los enfoques son bienvenidos y respetados.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          <Link href="/mantras-reflexiones">
            <a className="glass-effect p-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-base font-semibold gold-text mb-2 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Mantras y Reflexiones Universales
              </h3>
              <p className="text-[#aaa] text-xs flex-grow leading-relaxed">
                Meditaciones generales de conexión, mantras budistas e hindúes. Incluye prácticas de vacío, estrella y conexión con el todo.
              </p>
            </a>
          </Link>

          <Link href="/nombres-sagrados-path">
            <a className="glass-effect p-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-base font-semibold gold-text mb-2 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                72 Nombres Sagrados
              </h3>
              <p className="text-[#aaa] text-xs flex-grow mb-1 leading-relaxed">
                Exploraciones espirituales desde la tradición cabalística y meditaciones contemplativas.
              </p>
              <p className="text-[10px] text-[#888] italic">
                Los 72 Nombres de Dios y prácticas meditativas
              </p>
            </a>
          </Link>

          <Link href="/meditaciones">
            <a className="glass-effect p-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-base font-semibold gold-text mb-2 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Meditaciones Guiadas
              </h3>
              <p className="text-[#aaa] text-xs flex-grow leading-relaxed">
                Viajes místicos y meditaciones narradas. Experiencias profundas de transformación interior.
              </p>
            </a>
          </Link>

          <Link href="/mundo-esoterico">
            <a className="glass-effect p-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-base font-semibold gold-text mb-2 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Mundo Esotérico
              </h3>
              <p className="text-[#aaa] text-xs flex-grow leading-relaxed">
                Tarot Botánico y prácticas de sabiduría ancestral. Explora los arcanos desde la naturaleza.
              </p>
            </a>
          </Link>

          <Link href="/todo">
            <a className="glass-effect p-4 rounded-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-base font-semibold gold-text mb-2 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Todo (Explorar Libremente)
              </h3>
              <p className="text-[#aaa] text-xs flex-grow leading-relaxed">
                Accede a todas las secciones sin restricciones. Explora libremente todas las prácticas.
              </p>
            </a>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#888] italic max-w-4xl mx-auto leading-relaxed">
            Medit@ presenta diferentes tradiciones espirituales de forma separada y respetuosa. 
            No promovemos el sincretismo ni la mezcla de prácticas. 
            Cada camino mantiene su integridad y contexto cultural.
          </p>
        </div>
      </div>
    </div>
  );
}
