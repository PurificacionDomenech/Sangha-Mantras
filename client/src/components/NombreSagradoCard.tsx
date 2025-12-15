
import type { NombreSagrado } from "@/lib/mantras-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface NombreSagradoCardProps {
  nombre: NombreSagrado;
  isSelected: boolean;
  categoryColor: string;
  onClick: () => void;
  index: number;
  onVersionChange?: (version: string) => void;
}

const versionLabels: Record<string, string> = {
  'hebreo': 'Pronunciación Hebrea',
  'melodico': 'Recitación Melódica',
  'significado': 'Lectura del Significado',
  'shofar-tekiah': 'Shofar: Tekiah',
  'shofar-shevarim': 'Shofar: Shevarim',
  'shofar-teruah': 'Shofar: Teruah'
};

export default function NombreSagradoCard({ 
  nombre, 
  isSelected, 
  categoryColor, 
  onClick, 
  index,
  onVersionChange 
}: NombreSagradoCardProps) {
  const [selectedVersion, setSelectedVersion] = useState(nombre.audioVersiones[0]);
  const isYHWH = nombre.nombre === "YHWH";

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
    onVersionChange?.(version);
  };

  return (
    <button
      onClick={isYHWH ? undefined : onClick}
      data-testid={`nombre-card-${index}`}
      disabled={isYHWH}
      className={`w-full text-left p-2 rounded-lg transition-all ${
        isYHWH 
          ? `bg-gradient-to-br ${categoryColor} shadow-lg border-2 border-amber-400 dark:border-amber-500 opacity-90 cursor-not-allowed`
          : isSelected
          ? `bg-gradient-to-br ${categoryColor} shadow-lg border-2 border-amber-300 dark:border-amber-600`
          : 'bg-white/70 dark:bg-stone-800/70 hover:bg-white dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700'
      }`}
    >
      <div className="text-[10px] uppercase tracking-wide text-stone-500 dark:text-stone-400 mb-0.5">
        {nombre.nombre}
      </div>
      
      <div 
        className="text-xl font-serif text-stone-800 dark:text-stone-200 mb-0.5" 
        style={{ fontFamily: "'Frank Ruhl Libre', serif", direction: 'rtl' }}
      >
        {nombre.hebreo}
      </div>
      
      <div className="text-[10px] text-stone-600 dark:text-stone-400 leading-snug line-clamp-1">
        {nombre.significado}
      </div>

      {nombre.nombre === "YHWH" && (
        <div className="mt-1 text-[9px] italic text-amber-800 dark:text-amber-900">
          ✦ No reproducible por respeto
        </div>
      )}

      {nombre.audioVersiones.length > 1 && (
        <div onClick={(e) => e.stopPropagation()}>
          <Select value={selectedVersion} onValueChange={handleVersionChange}>
            <SelectTrigger className="w-full h-8 text-xs bg-white/10 border-white/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {nombre.audioVersiones.map(version => (
                <SelectItem key={version} value={version} className="text-xs">
                  {versionLabels[version] || version}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </button>
  );
}
