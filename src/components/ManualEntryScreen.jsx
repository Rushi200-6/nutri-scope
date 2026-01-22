export default function ManualEntryScreen({
  t,
  productName,
  variant,
  setProductName,
  setVariant,
  onSearch,
  onBack,
}) {
  return (
    <div className="space-y-8 animate-fade-in">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-extrabold tracking-wide
                       bg-gradient-to-r from-emerald-700 to-teal-600
                       bg-clip-text text-transparent">
          {t.productSearch}
        </h2>
        <p className="text-sm text-emerald-800/70">
          {t.productSearchDesc}
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white/45 backdrop-blur-2xl rounded-2xl 
                      border border-emerald-200/60 p-6 shadow-xl space-y-5">

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-2 uppercase tracking-wide">
            {t.productName}
          </label>
          <input
            type="text"
            placeholder="e.g., Doritos Tortilla Chips"
            className="w-full bg-white/60 border border-emerald-200 
                       focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40
                       px-4 py-3.5 rounded-xl text-emerald-900 
                       placeholder:text-emerald-400 outline-none transition-all"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-emerald-800 mb-2 uppercase tracking-wide">
            {t.variant}
          </label>
          <input
            type="text"
            placeholder="e.g., Nacho Cheese"
            className="w-full bg-white/60 border border-emerald-200 
                       focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40
                       px-4 py-3.5 rounded-xl text-emerald-900 
                       placeholder:text-emerald-400 outline-none transition-all"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          />
        </div>
      </div>

      {/* ACTIONS */}
      <div className="space-y-3">
        <button
          onClick={onSearch}
          disabled={!productName.trim()}
          className="w-full py-4 rounded-2xl font-semibold text-white
                     bg-gradient-to-r from-emerald-600 to-teal-600
                     shadow-lg shadow-emerald-300/40
                     transition-all duration-300
                     hover:scale-[1.02] hover:shadow-emerald-400/60
                     disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
        >
          {t.searchIngredients}
        </button>

        <button
          onClick={onBack}
          className="w-full text-emerald-700 hover:text-emerald-900 
                     text-sm py-2 transition-colors"
        >
          {t.backToScanner}
        </button>
      </div>
    </div>
  );
}
