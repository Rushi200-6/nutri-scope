export default function ResultScreen(props) {
  const {
    t,
    verdict,
    riskLevel,
    profile,
    barcode,
    ingredients,
    keyIngredient,
    explanation,
    onReanalyze,
    onScanAnother,
    onChangeProfile,
    height = null,
    weight = null,
  } = props;

  const getContextBadge = () => {
    if (verdict === "UNSAFE") {
      return {
        text: keyIngredient
          ? `Contains restricted ingredient: ${keyIngredient}`
          : `Violates ${profile} profile`,
        color: "bg-red-400/20 text-red-700 border-red-400/40",
        icon: "✕",
      };
    }

    if (verdict === "CAUTION") {
      return {
        text: "Health Advisory (BMI / Nutrition)",
        color: "bg-yellow-300/20 text-yellow-700 border-yellow-300/40",
        icon: "⚠",
      };
    }

    return {
      text: "Profile Compatible",
      color: "bg-emerald-300/20 text-emerald-700 border-emerald-300/40",
      icon: "✓",
    };
  };

  const context = getContextBadge();

  const calculateBMI = () => {
    if (!height || !weight) return null;
    const h = height / 100;
    return (weight / (h * h)).toFixed(1);
  };

  const bmi = calculateBMI();

  const getBmiCategory = () => {
    if (!bmi) return null;
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* VERDICT CARD */}
      <div className={`relative overflow-hidden backdrop-blur-2xl rounded-3xl border p-6 shadow-xl
        ${verdict === "SAFE"
          ? "bg-emerald-100/40 border-emerald-300/50"
          : verdict === "CAUTION"
          ? "bg-yellow-100/40 border-yellow-300/50"
          : "bg-red-100/40 border-red-300/50"
        }`}>

        <div className="relative text-center space-y-4">
          <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center border
            ${verdict === "SAFE"
              ? "bg-emerald-200/40 border-emerald-300"
              : verdict === "CAUTION"
              ? "bg-yellow-200/40 border-yellow-300"
              : "bg-red-200/40 border-red-300"
            }`}>
            <span className="text-4xl">
              {verdict === "SAFE" ? "✓" : verdict === "CAUTION" ? "⚠" : "✕"}
            </span>
          </div>

          <h2 className={`text-3xl font-bold tracking-wide
            ${verdict === "SAFE"
              ? "text-emerald-700"
              : verdict === "CAUTION"
              ? "text-yellow-700"
              : "text-red-700"
            }`}>
            {verdict}
          </h2>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold ${context.color}`}>
            <span>{context.icon}</span>
            <span>{context.text}</span>
          </div>

          <p className="text-emerald-900/70 text-sm font-semibold uppercase tracking-wider">
            {profile}
          </p>
        </div>
      </div>

      {/* CONFIDENCE */}
      <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-emerald-200/50 p-5 shadow-lg">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-semibold text-emerald-700 uppercase">
            {t.confidence}
          </span>
          <span className="text-sm font-bold text-emerald-900">{riskLevel}</span>
        </div>

        <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all
              ${riskLevel === "High"
                ? "w-full bg-red-400"
                : riskLevel === "Medium"
                ? "w-2/3 bg-yellow-400"
                : "w-1/3 bg-emerald-400"
              }`}
          />
        </div>
      </div>

      {/* INFO GRID */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/40 backdrop-blur-xl rounded-xl border border-emerald-200/50 p-4">
          <p className="text-xs text-emerald-700 uppercase mb-1">{t.barcode}</p>
          <p className="text-sm font-semibold text-emerald-900">
            {barcode || "Manual Entry"}
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-xl rounded-xl border border-emerald-200/50 p-4">
          <p className="text-xs text-emerald-700 uppercase mb-1">{t.risk}</p>
          <p className="text-sm font-semibold text-emerald-900">{riskLevel}</p>
        </div>
      </div>

      {/* EXPLANATION */}
      <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-emerald-200/50 p-5 shadow-lg">
        <h3 className="text-sm font-semibold text-emerald-900 mb-2">Explanation</h3>
        <p className="text-sm text-emerald-800">{explanation}</p>
      </div>

      {/* BMI */}
      {bmi && (
        <div className="bg-white/40 backdrop-blur-xl rounded-2xl border border-emerald-200/50 p-5 shadow-lg">
          <p className="text-xs text-emerald-700 uppercase">BMI</p>
          <p className="text-lg font-bold text-emerald-900">{bmi}</p>
          <p className="text-sm text-emerald-700">{getBmiCategory()}</p>
        </div>
      )}

      {/* INGREDIENTS */}
      <details className="bg-white/40 backdrop-blur-xl rounded-2xl border border-emerald-200/50 overflow-hidden">
        <summary className="px-5 py-4 cursor-pointer text-emerald-900 font-semibold">
          {t.fullIngredients}
        </summary>
        <div className="px-5 pb-5 text-sm text-emerald-800">
          {ingredients}
        </div>
      </details>

      {/* ACTIONS */}
      <div className="space-y-3">
        <button
          onClick={onScanAnother}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-lg transition"
        >
          Scan Another Product
        </button>

        <button
          onClick={onChangeProfile}
          className="w-full text-emerald-700 hover:text-emerald-900 text-sm"
        >
          Change Profile
        </button>
      </div>
    </div>
  );
}
