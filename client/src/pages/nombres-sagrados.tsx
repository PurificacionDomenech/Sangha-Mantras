
import { useState, useCallback } from "react";
import Header from "@/components/Header";
import NombreSagradoCard from "@/components/NombreSagradoCard";
import { nombresSagrados } from "@/lib/mantras-data";
import { useToast } from "@/hooks/use-toast";

export default function NombresSagrados() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("principales");
  const [selectedNombreIndex, setSelectedNombreIndex] = useState(0);

  const currentCategory = nombresSagrados[selectedCategory];
  const currentNombre = currentCategory.nombres[selectedNombreIndex];

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setSelectedNombreIndex(0);
  }, []);

  const handleNombreChange = useCallback((index: number) => {
    setSelectedNombreIndex(index);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Selector de Categorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {Object.entries(nombresSagrados).map(([key, categoria]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`py-4 px-4 rounded-lg transition-all text-center ${
                selectedCategory === key
                  ? `bg-gradient-to-br ${categoria.color} shadow-xl border-2 border-amber-400`
                  : 'bg-white/5 border border-white/10 hover:border-amber-400/50 backdrop-blur-sm'
              }`}
            >
              <div className={`text-sm font-semibold ${
                selectedCategory === key ? 'text-white' : 'text-amber-200'
              }`}>
                {categoria.nombre}
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[420px,1fr] gap-4">
          {/* Panel izquierdo: Display actual */}
          <div className="space-y-3">
            <div 
              className={`bg-gradient-to-br ${currentCategory.color} rounded-lg p-6 shadow-xl border border-amber-300/50`}
              data-testid="nombre-display"
            >
              <div className="text-center">
                <div className="text-xs uppercase tracking-wide text-amber-200 mb-2">
                  Nombre Sagrado Actual
                </div>
                <div 
                  className="text-5xl font-serif text-white leading-snug mb-3"
                  style={{ fontFamily: "'Frank Ruhl Libre', serif", direction: 'rtl' }}
                >
                  {currentNombre.hebreo}
                </div>
                <div className="text-base text-amber-100 mb-2 font-semibold">
                  {currentNombre.nombre}
                </div>
                <div className="text-sm text-white/90 border-t border-white/20 pt-3">
                  {currentNombre.significado}
                </div>
              </div>
            </div>

            {/* Lista de nombres */}
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-stone-900/20">
              {currentCategory.nombres.map((nombre, idx) => (
                <NombreSagradoCard
                  key={`${selectedCategory}-${idx}`}
                  nombre={nombre}
                  isSelected={selectedNombreIndex === idx}
                  categoryColor={currentCategory.color}
                  onClick={() => handleNombreChange(idx)}
                  index={idx}
                />
              ))}
            </div>
          </div>

          {/* Panel derecho: Instrucciones */}
          <div className="bg-white/5 dark:bg-stone-900/30 rounded-lg p-6 backdrop-blur-md border border-white/10">
            <h3 className="text-xl font-semibold text-amber-300 mb-4">
              Acerca de los Nombres Sagrados
            </h3>
            <div className="text-sm text-stone-200 space-y-3">
              <p>
                Los nombres sagrados de Dios en la tradición hebrea representan diferentes aspectos 
                de lo divino. Cada nombre revela una faceta única de la naturaleza de Dios.
              </p>
              <p>
                <strong className="text-amber-200">YHWH (יהוה)</strong> - El Tetragrámaton, 
                considerado el nombre más sagrado, representa la esencia eterna de Dios.
              </p>
              <p>
                <strong className="text-amber-200">Pronunciación:</strong> En la tradición judía, 
                el nombre YHWH no se pronuncia directamente. En su lugar, se usa "Adonai" o "Hashem".
              </p>
              <p className="text-amber-200 font-semibold pt-2 border-t border-white/10">
                Selecciona un nombre para meditar sobre su significado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
