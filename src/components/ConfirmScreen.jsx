export default function ConfirmScreen({
  t,
  productName,
  ingredients,
  setIngredients,
  onAnalyze,
  onEdit,
}) {
  return (
    <div className="space-y-8 animate-fade-in">

      {/* HEADER */}
      <div className="text-center space-y-3">
        <div className="mx-auto w-16 h-16 rounded-full 
                        bg-emerald-100/70 backdrop-blur 
                        border border-emerald-300 shadow-lg
                        flex items-center justify-center">
          <svg
            className="w-8 h-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-xl font-extrabold tracking-wide
                       bg-gradient-to-r from-emerald-700 to-teal-600
                       bg-clip-text text-transparent">
          {productName}
        </h2>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 
                        bg-emerald-100/70 backdrop-blur 
                        border border-emerald-300 rounded-full shadow-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-semibold text-emerald-800">
            Ingredients Retrieved
          </span>
        </div>
      </div>

      {/* INGREDIENT TEXTAREA */}
      <div className="bg-white/45 backdrop-blur-2xl rounded-2xl 
                      border border-emerald-200/60 p-6 shadow-xl">
        <label className="block text-xs font-semibold text-emerald-800 mb-3 uppercase tracking-wide">
          {t.ingredientList}
        </label>

        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full h-40 bg-white/60 border border-emerald-200 
                     focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40
                     px-4 py-3 rounded-xl text-sm text-emerald-900 
                     placeholder:text-emerald-400 outline-none resize-none 
                     transition-all duration-300"
          placeholder="Ingredients will appear here..."
        />
      </div>

      {/* ACTIONS */}
      <div className="space-y-3">
        <button
          onClick={onAnalyze}
          disabled={!ingredients.trim()}
          className="w-full py-4 rounded-2xl font-semibold text-white
                     bg-gradient-to-r from-emerald-600 to-teal-600
                     shadow-lg shadow-emerald-300/40
                     transition-all duration-300
                     hover:scale-[1.02] hover:shadow-emerald-400/60
                     disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
        >
          {t.analyze}
        </button>

        <button
          onClick={onEdit}
          className="w-full text-emerald-700 hover:text-emerald-900 
                     text-sm py-2 transition-colors"
        >
          {t.editDetails}
        </button>
      </div>
    </div>
  );
}
