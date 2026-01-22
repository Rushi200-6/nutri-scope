import logo from "../assets/nutriscope-logo.png";

export default function HomeScreen({ t, onSelectAllergy, onSelectBMI }) {
  return (
    <div className="space-y-10 animate-fade-in text-center">

      {/* LOGO */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-3xl bg-white/30 backdrop-blur-2xl
                        border border-white/40 shadow-xl
                        flex items-center justify-center
                        hover:scale-105 transition-transform duration-300">
          <img
            src={logo}
            alt="Nutri-Scope Logo"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-emerald-700 tracking-tight">
            {t.appTitle}
          </h1>
          <p className="text-sm font-medium text-emerald-600">
            Nutri-Scope • Smart Food Safety
          </p>
        </div>

        <p className="text-sm text-emerald-700/80 max-w-xs">
          {t.appSubtitle || "Scan food products safely using AI & health profiles"}
        </p>
      </div>

      {/* MODE SELECTION */}
      <div className="space-y-4 text-left">

        {/* Allergy Scan */}
        <button
          onClick={onSelectAllergy}
          className="w-full p-6 rounded-3xl
                     bg-white/30 backdrop-blur-xl border border-white/50
                     shadow-lg hover:shadow-emerald-300/50
                     hover:scale-[1.02] transition-all duration-300"
        >
          <h2 className="text-lg font-semibold text-emerald-900 flex items-center gap-2">
            🛡️ Allergy Safety Scan
          </h2>
          <p className="text-sm text-emerald-700 mt-1">
            Check products strictly against your allergy profile.
          </p>
        </button>

        {/* BMI Scan */}
        <button
          onClick={onSelectBMI}
          className="w-full p-6 rounded-3xl
                     bg-white/30 backdrop-blur-xl border border-white/50
                     shadow-lg hover:shadow-teal-300/50
                     hover:scale-[1.02] transition-all duration-300"
        >
          <h2 className="text-lg font-semibold text-emerald-900 flex items-center gap-2">
            💚 BMI Health Scan
          </h2>
          <p className="text-sm text-emerald-700 mt-1">
            Personalized safety using BMI and nutrition context.
          </p>
        </button>

      </div>
    </div>
  );
}
