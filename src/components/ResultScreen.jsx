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
  // Safety guards (prevent black screen)
  const safeVerdict = verdict ? verdict.toUpperCase() : "CAUTION";
  const safeRisk = riskLevel || "Low";
  const safeKey = keyIngredient || "Unknown";
  const safeExplain = explanation || "No explanation available.";
  const safeIngredients = ingredients || "No ingredients found.";

  const theme =
    safeVerdict === "SAFE"
      ? "bg-emerald-100 border-emerald-300 text-emerald-800"
      : safeVerdict === "CAUTION"
      ? "bg-yellow-100 border-yellow-300 text-yellow-800"
      : "bg-red-100 border-red-300 text-red-800";

  return (
    <div className="space-y-6">

      {/* Verdict */}
      <div className={`p-4 rounded-xl border ${theme} text-center`}>
        <h2 className="text-xl font-bold">{safeVerdict}</h2>
        <p className="text-sm">Risk Level: {safeRisk}</p>
      </div>

      {/* Key Ingredient */}
      <div className="p-4 rounded-xl bg-white/70 border border-emerald-200">
        <h3 className="text-sm font-semibold text-emerald-700 mb-1">
          Key Ingredient
        </h3>
        <p>{safeKey}</p>
      </div>

      {/* Explanation */}
      <div className="p-4 rounded-xl bg-white/70 border border-emerald-200">
        <h3 className="text-sm font-semibold text-emerald-700 mb-1">
          Medical Explanation
        </h3>
        <p className="text-sm">{safeExplain}</p>
      </div>

      {/* Ingredients */}
      <div className="p-4 rounded-xl bg-white/70 border border-emerald-200">
        <h3 className="text-sm font-semibold text-emerald-700 mb-1">
          Ingredient List
        </h3>
        <p className="text-xs whitespace-pre-wrap">{safeIngredients}</p>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={onScanAnother}
          className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold"
        >
          {t.scanAnother || "Scan Another"}
        </button>

        <button
          onClick={onChangeProfile}
          className="w-full py-2 text-emerald-700 text-sm"
        >
          {t.changeProfile || "Change Profile"}
        </button>
      </div>
    </div>
  );
}
