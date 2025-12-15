
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

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version);
    onVersionChange?.(version);
  };

  return (
    <button
      onClick={onClick}
      data-testid={`nombre-card-${index}`}
      className={`w-full text-left p-4 rounded-lg transition-all ${
        isSelected
          ? `bg-gradient-to-br ${categoryColor} shadow-xl border-2 border-amber-400 dark:border-amber-500`
          : 'bg-white/10 dark:bg-stone-900/30 hover:bg-white/20 dark:hover:bg-stone-900/40 border border-white/20 dark:border-stone-700/50 backdrop-blur-md'
      }`}
    >
      <div className="text-xs uppercase tracking-wide text-amber-300 dark:text-amber-400 mb-1 font-semibold">
        {nombre.nombre}
      </div>
      
      <div 
        className="text-3xl font-serif text-white mb-2 direction-rtl" 
        style={{ fontFamily: "'Frank Ruhl Libre', serif", direction: 'rtl' }}
      >
        {nombre.hebreo}
      </div>
      
      <div className="text-xs text-stone-200 dark:text-stone-300 leading-snug mb-3 border-t border-white/10 pt-2">
        {nombre.significado}
      </div>

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
