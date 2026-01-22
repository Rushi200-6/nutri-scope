import BarcodeScanner from "./BarcodeScanner";

export default function ScanScreen({
  t,
  onDetected,
  onManualEntry,
  onChangeProfile,
}) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* HEADER */}
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-emerald-900">
          {t.scanTitle}
        </h2>
        <p className="text-sm text-emerald-800/70">{t.scanSubtitle}</p>
      </div>

      {/* SCANNER GLASS CARD */}
      <div className="relative rounded-3xl p-3 bg-white/30 backdrop-blur-2xl border border-white/40 shadow-2xl overflow-hidden">

        {/* Animated Scan Line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-emerald-400/70 animate-scanline"></div>

        {/* Glow Border */}
        <div className="absolute inset-0 rounded-3xl ring-2 ring-emerald-300/40 shadow-[0_0_40px_rgba(16,185,129,0.35)] pointer-events-none"></div>

        {/* Camera Frame */}
        <div className="relative h-72 rounded-2xl overflow-hidden bg-black border border-emerald-300/40 shadow-inner">
          <BarcodeScanner onDetected={onDetected} />
        </div>

        {/* ACTIVE BADGE */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-white/60 backdrop-blur rounded-full border border-emerald-300/40 shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-900">
              {t.scannerActive}
            </span>
          </div>
        </div>
      </div>

      {/* HELP TEXT */}
      <div className="flex items-center justify-between px-1 text-xs text-emerald-800/70">
        <span>{t.barcodeTypes}</span>
        <span>{t.optimalLight}</span>
      </div>

      {/* ACTION BUTTONS */}
      <div className="space-y-3">
        <button
          onClick={onManualEntry}
          className="w-full py-3.5 rounded-xl bg-white/40 backdrop-blur border border-white/50
                     text-emerald-900 font-medium shadow-lg
                     hover:shadow-emerald-300/60 hover:scale-[1.02]
                     transition-all duration-300"
        >
          {t.manualEntry}
        </button>

        <button
          onClick={onChangeProfile}
          className="w-full text-emerald-800 hover:text-emerald-900 text-sm py-2 transition-colors"
        >
          {t.changeProfile}
        </button>
      </div>

      {/* Scanline animation */}
      <style>
        {`
          @keyframes scanline {
            0% { transform: translateY(0); opacity: 0.2; }
            50% { opacity: 1; }
            100% { transform: translateY(280px); opacity: 0.2; }
          }
          .animate-scanline {
            animation: scanline 2.5s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
