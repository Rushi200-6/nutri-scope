import { useState } from "react";
import logo from "../assets/nutriscope-logo.png";

export default function ProfileScreen({
  t,
  profiles,
  selectedAllergies,
  setSelectedAllergies,
  mode,
  height,
  setHeight,
  weight,
  setWeight,
  onContinue,
}) {
  const [customAllergy, setCustomAllergy] = useState("");

  const toggleAllergy = (value) => {
    if (selectedAllergies.includes(value)) {
      setSelectedAllergies(selectedAllergies.filter(a => a !== value));
    } else {
      setSelectedAllergies([...selectedAllergies, value]);
    }
  };

  const addCustomAllergy = () => {
    const trimmed = customAllergy.trim();
    if (!trimmed) return;
    if (!selectedAllergies.includes(trimmed)) {
      setSelectedAllergies([...selectedAllergies, trimmed]);
    }
    setCustomAllergy("");
  };

  const canContinue =
    (mode === "allergy" && selectedAllergies.length > 0) ||
    (mode === "bmi" && height && weight) ||
    (mode === "bmi+allergy" && height && weight);

  return (
    <div className="space-y-8 animate-fade-in">

      {/* LOGO HEADER */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-xl
                        border border-emerald-200 shadow-lg
                        flex items-center justify-center overflow-hidden animate-float">
          <img src={logo} alt="Nutri-Scope" className="w-full h-full object-cover scale-110" />
        </div>

        <h1 className="text-2xl font-extrabold tracking-wide
                       bg-gradient-to-r from-emerald-700 to-teal-600
                       bg-clip-text text-transparent">
          Setup Your Health Profile
        </h1>
      </div>

      {/* ALLERGY SELECTION */}
      {mode !== "bmi" && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-emerald-900">
            Select Allergies
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {profiles.map((p) => {
              const isSelected = selectedAllergies.includes(p.value);

              return (
                <button
                  key={p.value}
                  onClick={() => toggleAllergy(p.value)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300
                              backdrop-blur-xl border hover:scale-105
                              ${isSelected
                                ? "bg-emerald-100/70 border-emerald-400 shadow-2xl shadow-emerald-400/60 ring-2 ring-emerald-300 animate-pulse"
                                : "bg-white/40 border-emerald-200 shadow-md hover:shadow-emerald-200/50"
                              }`}
                >
                  <div className="font-semibold text-emerald-900">
                    {t.profiles[p.value].label}
                  </div>
                  <div className="text-xs text-emerald-700/70">
                    {t.profiles[p.value].desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* CUSTOM ALLERGY */}
      {mode !== "bmi" && (
        <div className="space-y-2">
          <label className="text-xs text-emerald-700">
            Add Custom Allergy
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              value={customAllergy}
              onChange={(e) => setCustomAllergy(e.target.value)}
              placeholder="e.g. Sesame, Shellfish"
              className="flex-1 bg-white/50 backdrop-blur border border-emerald-200
                         rounded-xl px-3 py-2 text-emerald-900
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
              onClick={addCustomAllergy}
              className="px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600
                         text-white font-medium transition hover:scale-105"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* BMI INPUTS */}
      {mode !== "allergy" && (
        <div className="bg-white/40 backdrop-blur-xl border border-emerald-200
                        rounded-2xl p-4 space-y-4 shadow-md">
          <h3 className="text-sm font-semibold text-emerald-900">
            Enter Body Details
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Height (cm)"
              className="bg-white/60 border border-emerald-200 rounded-xl px-3 py-2
                         text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight (kg)"
              className="bg-white/60 border border-emerald-200 rounded-xl px-3 py-2
                         text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </div>
      )}

      {/* CONTINUE BUTTON */}
      <button
        onClick={onContinue}
        disabled={!canContinue}
        className="w-full py-4 rounded-2xl font-semibold text-white
                   bg-gradient-to-r from-emerald-600 to-teal-600
                   transition-all duration-300
                   hover:scale-[1.03] hover:shadow-2xl
                   disabled:opacity-50 disabled:scale-100"
      >
        Continue →
      </button>
    </div>
  );
}
