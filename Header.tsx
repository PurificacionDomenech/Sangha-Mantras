export default function Header() {
  return (
    <div className="text-center py-8 px-4" data-testid="header">
      <div className="inline-block">
        <h1 className="text-5xl font-light text-amber-900 dark:text-amber-200 tracking-wider mb-2 font-serif">
          ༀ
        </h1>
        <h2 className="text-2xl font-light text-amber-800 dark:text-amber-300 tracking-widest">
          SANGHA MANTRAS
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-3"></div>
      </div>
    </div>
  );
}
