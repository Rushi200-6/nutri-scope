export default function ResultScreen({
  t,
  verdict,
  riskLevel,
  ingredients,
  keyIngredient,
  explanation,
  onScanAnother,
  onChangeProfile,
}) {
  return (
    <div className="space-y-4 text-emerald-900">

      {/* Verdict Box */}
      <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 text-center shadow">
        <h2 className="text-xl font-bold text-amber-800">{verdict}</h2>
        <p className="text-sm text-amber-700">Risk Level: {riskLevel}</p>
      </div>

      {/* Key Ingredient */}
      <div className="bg-white/70 rounded-xl p-4 shadow border">
        <h3 className="font-semibold text-emerald-800 mb-1">Key Ingredient</h3>
        <p className="text-emerald-700">{keyIngredient}</p>
      </div>

      {/* Medical Explanation */}
      <div className="bg-white/70 rounded-xl p-4 shadow border">
        <h3 className="font-semibold text-emerald-800 mb-1">Medical Explanation</h3>
        <p className="text-emerald-700 text-sm">{explanation}</p>
      </div>

      {/* Ingredient List */}
      <div className="bg-white/70 rounded-xl p-4 shadow border">
        <h3 className="font-semibold text-emerald-800 mb-1">Ingredient List</h3>
        <p className="text-emerald-700 text-sm whitespace-pre-line">
          {ingredients}
        </p>
      </div>

      {/* Buttons */}
      <button
        onClick={onScanAnother}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Scan Another
      </button>

      <button
        onClick={onChangeProfile}
        className="w-full text-emerald-700 hover:underline text-sm"
      >
        Change Profile
      </button>
    </div>
  );
}
