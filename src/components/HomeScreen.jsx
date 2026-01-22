import logo from "../assets/nutriscope-logo.png";
import allergyIcon from "../assets/allergy-icon.png";
import bmiIcon from "../assets/bmi-icon.png";

export default function HomeScreen({ t, onSelectAllergy, onSelectBMI }) {
  return (
    <div className="space-y-10 animate-fade-in text-center">

      {/* LOGO */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-xl
                        border border-white/50 shadow-xl
                        flex items-center justify-center">
          <img
            src={logo}
            alt="Nutri-Scope Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
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
                     hover:scale-[1.02] transition-all duration-300
                     flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur
                          flex items-center justify-center shadow-md overflow-hidden">
            <img
              src={allergyIcon}
              alt="Allergy Scan"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-emerald-900">
              🛡️ Allergy Safety Scan
            </h2>
            <p className="text-sm text-emerald-700">
              Check products strictly against your allergy profile.
            </p>
          </div>
        </button>

        {/* BMI Scan */}
        <button
          onClick={onSelectBMI}
          className="w-full p-6 rounded-3xl
                     bg-white/30 backdrop-blur-xl border border-white/50
                     shadow-lg hover:shadow-teal-300/50
                     hover:scale-[1.02] transition-all duration-300
                     flex items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur
                          flex items-center justify-center shadow-md overflow-hidden">
            <img
              src={bmiIcon}
              alt="BMI Scan"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-emerald-900">
              💚 BMI Health Scan
            </h2>
            <p className="text-sm text-emerald-700">
              Personalized safety using BMI and nutrition context.
            </p>
          </div>
        </button>

      </div>
    </div>
  );
}
