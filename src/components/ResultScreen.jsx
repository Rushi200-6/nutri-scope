export default function ResultScreen({
  t,
  verdict,
  riskLevel,
  profile,
  barcode,
  ingredients,
  keyIngredient,
  explanation,
  height,
  weight,
  onScanAnother,
  onChangeProfile,
}) {
  const theme =
    verdict === "SAFE"
      ? "from-emerald-200/70 to-emerald-100/60 border-emerald-400 text-emerald-900"
      : verdict === "CAUTION"
      ? "from-amber-200/70 to-amber-100/60 border-amber-400 text-amber-900"
      : "from-rose-200/70 to-rose-100/60 border-rose-400 text-rose-900";

  const icon =
    verdict === "SAFE" ? "✔️" : verdict === "CAUTION" ? "⚠️" : "⛔";

  return (
    <div className="space-y-8 animate-fade-in">

      {/* VERDICT CARD */}
      <div
        className={`bg-gradient-to-br ${theme} backdrop-blur-2xl
                    border rounded-3xl shadow-xl p-6 text-center`}
      >
        <div className="text-5xl mb-2">{icon}</div>
        <h2 className="text-2xl font-extrabold tracking-wide">{verdict}</h2>
        <p className="text-sm opacity-80 mt-1">
          Risk Level: <span className="font-semibold">{riskLevel}</span>
        </p>
      </div>

      {/* KEY INGREDIENT */}
      <div className="bg-white/50 backdrop-blur-2xl rounded-2xl 
                      border border-emerald-200/60 p-5 shadow-md">
        <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
          Key Ingredient
        </h3>
        <p className="text-emerald-900 font-medium">
          {keyIngredient || "None"}
        </p>
      </div>

      {/* EXPLANATION */}
      <div className="bg-white/50 backdrop-blur-2xl rounded-2xl 
                      border border-emerald-200/60 p-5 shadow-md">
        <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
          Medical Explanation
        </h3>
        <p className="text-sm text-emerald-900 leading-relaxed">
          {explanation}
        </p>
      </div>

      {/* INGREDIENTS */}
      <div className="bg-white/40 backdrop-blur-2xl rounded-2xl 
                      border border-emerald-200/60 p-5 shadow-inner">
        <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
          Ingredient List
        </h3>
        <p className="text-xs text-emerald-900 whitespace-pre-wrap">
          {ingredients}
        </p>
      </div>

      {/* ACTIONS */}
      <div className="space-y-3">
        <button
          onClick={onScanAnother}
          className="w-full py-4 rounded-2xl font-semibold text-white
                     bg-gradient-to-r from-emerald-600 to-teal-600
                     shadow-lg shadow-emerald-300/40
                     transition-all duration-300
                     hover:scale-[1.02] hover:shadow-emerald-400/60"
        >
          {t.scanAnother}
        </button>

        <button
          onClick={onChangeProfile}
          className="w-full text-emerald-700 hover:text-emerald-900 
                     text-sm py-2 transition-colors"
        >
          {t.changeProfile}
        </button>
      </div>
    </div>
  );
}
