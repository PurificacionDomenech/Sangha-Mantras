import { mantras } from "@/lib/mantras-data";

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategorySelector({ selectedCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="mb-8" data-testid="category-selector">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {Object.entries(mantras).map(([key, categoria]) => (
          <button
            key={key}
            onClick={() => onSelectCategory(key)}
            className={`py-3 px-3 rounded-lg transition-all text-center uppercase tracking-wider ${
              selectedCategory === key
                ? 'glass-effect gold-text shadow-[0_0_15px_rgba(255,215,0,0.4)]'
                : 'bg-[rgba(30,30,40,0.5)] text-[#ddd] border border-[rgba(255,215,0,0.2)] hover:border-[rgba(255,215,0,0.5)] hover:shadow-[0_0_10px_rgba(255,215,0,0.3)]'
            }`}
          >
            <div className="text-xs font-medium">
              {categoria.nombre}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}