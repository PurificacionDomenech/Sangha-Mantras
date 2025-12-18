
import { Link } from "wouter";

export default function Welcome() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
      style={{ backgroundImage: 'url(/galaxia-inicio.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#1a0b2e]/60 to-[#000000]/70"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fadeInDown">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-5xl gold-text">ༀ</div>
            <h1 className="text-5xl md:text-6xl font-bold gold-text-animated tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              MEDIT@
            </h1>
          </div>
          <p className="text-2xl text-[#8ba888] italic tracking-wider mb-3">
            Bienvenido/a a Meditación Guiada
          </p>
          <p className="text-lg text-[#aaa] max-w-3xl mx-auto">
            Explora prácticas de sabiduría y bienestar desde diferentes tradiciones
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Link href="/mantras-reflexiones">
            <a className="glass-effect p-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-xl font-semibold gold-text mb-3 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Mantras y Reflexiones Universales
              </h3>
              <p className="text-[#aaa] text-sm flex-grow">
                Meditaciones generales de conexión, mantras budistas e hindúes. Incluye prácticas de vacío, estrella y conexión con el todo.
              </p>
            </a>
          </Link>

          <Link href="/nombres-sagrados-path">
            <a className="glass-effect p-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-xl font-semibold gold-text mb-3 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                72 Nombres Sagrados
              </h3>
              <p className="text-[#aaa] text-sm flex-grow mb-2">
                Exploraciones espirituales desde la tradición cabalística y meditaciones contemplativas.
              </p>
              <p className="text-xs text-[#888] italic">
                Los 72 Nombres de Dios y prácticas meditativas
              </p>
            </a>
          </Link>

          <Link href="/meditaciones">
            <a className="glass-effect p-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-xl font-semibold gold-text mb-3 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Meditaciones Guiadas
              </h3>
              <p className="text-[#aaa] text-sm flex-grow">
                Viajes místicos y meditaciones narradas. Experiencias profundas de transformación interior.
              </p>
            </a>
          </Link>

          <Link href="/mundo-esoterico">
            <a className="glass-effect p-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-xl font-semibold gold-text mb-3 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Mundo Esotérico
              </h3>
              <p className="text-[#aaa] text-sm flex-grow">
                Tarot Botánico y prácticas de sabiduría ancestral. Explora los arcanos desde la naturaleza.
              </p>
            </a>
          </Link>

          <Link href="/todo">
            <a className="glass-effect p-6 rounded-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all group cursor-pointer h-full flex flex-col">
              <h3 className="text-xl font-semibold gold-text mb-3 group-hover:gold-text-animated uppercase tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                Todo (Explorar Libremente)
              </h3>
              <p className="text-[#aaa] text-sm flex-grow">
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
