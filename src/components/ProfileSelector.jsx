export default function ProfileSelector({
  t,
  profiles,
  selectedProfile,
  onSelect,
}) {
  return (
    <div className="bg-white/50 backdrop-blur-2xl rounded-2xl 
                    border border-emerald-200/60 p-6 shadow-xl">

      <div className="mb-5">
        <h2 className="text-base font-bold text-emerald-900 mb-1">
          {t.selectProfile}
        </h2>
        <p className="text-xs text-emerald-700/70">
          {t.selectProfileDesc}
        </p>
      </div>

      <div className="space-y-3">
        {profiles.map((p) => {
          const isActive = selectedProfile === p.value;

          return (
            <button
              key={p.value}
              onClick={() => onSelect(p.value)}
              className={`w-full text-left px-4 py-4 rounded-xl border 
                          transition-all duration-300 flex items-center gap-3
                          hover:scale-[1.02]
                          ${
                            isActive
                              ? "bg-emerald-100/70 border-emerald-400 shadow-2xl shadow-emerald-300/60 ring-2 ring-emerald-300"
                              : "bg-white/40 border-emerald-200 hover:shadow-lg hover:shadow-emerald-200/40"
                          }`}
            >
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-full
                            backdrop-blur border transition
                            ${
                              isActive
                                ? "bg-emerald-200/70 border-emerald-400 shadow-md"
                                : "bg-white/50 border-emerald-200"
                            }`}
              >
                <span className="text-xl">{p.icon}</span>
              </div>

              <div className="flex-1">
                <div className="font-semibold text-sm text-emerald-900">
                  {t.profiles[p.value].label}
                </div>
                <div className="text-xs text-emerald-700/70 mt-0.5">
                  {t.profiles[p.value].desc}
                </div>
              </div>

              {isActive && (
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
