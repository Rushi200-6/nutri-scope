import logo from "../assets/nutriscope-logo.png";
import allergyIcon from "../assets/allergy-icon.png";
import bmiIcon from "../assets/bmi-icon.png";

export default function HomeScreen({ t, onSelectAllergy, onSelectBMI }) {
  return (
    <div className="space-y-12 text-center animate-fade-in">

      {/* LOGO */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 aspect-square rounded-full 
                        bg-white/60 backdrop-blur-2xl
                        border border-emerald-200/60 shadow-xl
                        flex items-center justify-center overflow-hidden
                        transition-all duration-300 hover:scale-105 hover:shadow-emerald-300/50">
          <img
            src={logo}
            alt="Nutri-Scope Logo"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <h1 className="text-3xl font-extrabold tracking-wide text-emerald-900">
          Nutri-Scope
        </h1>
        <p className="text-xs tracking-widest text-emerald-700">
          AI NUTRITION & SAFETY INTELLIGENCE
        </p>
      </div>

      {/* CARDS */}
      <div className="space-y-6">

        {/* Allergy Scan */}
        <button
          onClick={onSelectAllergy}
          className="group w-full p-6 rounded-3xl flex items-center gap-4
                     bg-white/55 backdrop-blur-xl border border-emerald-200/50
                     shadow-lg transition-all duration-300
                     hover:scale-[1.02] hover:shadow-emerald-300/60"
        >
          <div className="w-14 h-14 min-w-[56px] min-h-[56px] aspect-square flex-shrink-0
                          rounded-full bg-white/70 backdrop-blur
                          border border-emerald-200/60
                          flex items-center justify-center overflow-hidden
                          transition-all duration-300
                          group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-300/50">
            <img
              src={allergyIcon}
              alt="Allergy Scan"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          <div className="text-left">
            <h2 className="text-lg font-semibold text-emerald-900">
              Allergy Scan
            </h2>
            <p className="text-sm text-emerald-700">
              Detect harmful or restricted ingredients using AI.
            </p>
          </div>
        </button>

        {/* BMI Health Scan */}
        <button
          onClick={onSelectBMI}
          className="group w-full p-6 rounded-3xl flex items-center gap-4
                     bg-white/55 backdrop-blur-xl border border-teal-200/50
                     shadow-lg transition-all duration-300
                     hover:scale-[1.02] hover:shadow-teal-300/60"
        >
          <div className="w-14 h-14 min-w-[56px] min-h-[56px] aspect-square flex-shrink-0
                          rounded-full bg-white/70 backdrop-blur
                          border border-teal-200/60
                          flex items-center justify-center overflow-hidden
                          transition-all duration-300
                          group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-teal-300/50">
            <img
              src={bmiIcon}
              alt="BMI Health Scan"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          <div className="text-left">
            <h2 className="text-lg font-semibold text-emerald-900">
              BMI Health Scan
            </h2>
            <p className="text-sm text-emerald-700">
              Analyze food safety based on your body metrics.
            </p>
          </div>
        </button>

      </div>
    </div>
  );
}
