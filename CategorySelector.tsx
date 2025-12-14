import { mantras } from "@/lib/mantras-data";

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategorySelector({ selectedCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="mb-8" data-testid="category-selector">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.keys(mantras).map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            data-testid={`category-${cat}`}
            className={`py-4 px-4 rounded-lg font-light tracking-wide transition-all border ${
              selectedCategory === cat
                ? 'bg-white dark:bg-stone-800 shadow-lg border-amber-300 dark:border-amber-600 text-amber-900 dark:text-amber-200'
                : 'bg-white/50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-amber-200 dark:hover:border-amber-700'
            }`}
          >
            {mantras[cat].nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
