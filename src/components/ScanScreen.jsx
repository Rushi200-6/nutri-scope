import BarcodeScanner from "./BarcodeScanner";

export default function ScanScreen({
  t,
  onDetected,
  onManualEntry,
  onChangeProfile,
}) {
  return (
    <div className="space-y-8 animate-fade-in">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-extrabold tracking-wide
                       bg-gradient-to-r from-emerald-700 to-teal-600
                       bg-clip-text text-transparent">
          {t.scanTitle}
        </h2>
        <p className="text-sm text-emerald-800/70">
          {t.scanSubtitle}
        </p>
      </div>

      {/* SCANNER GLASS FRAME */}
      <div className="relative bg-white/50 backdrop-blur-2xl rounded-3xl 
                      border border-emerald-200/60 p-4 shadow-xl">

        {/* Glow Overlay */}
        <div className="absolute inset-0 rounded-3xl 
                        bg-gradient-to-br from-emerald-300/20 to-transparent 
                        pointer-events-none"></div>

        {/* Camera View */}
        <div className="relative h-72 rounded-2xl overflow-hidden 
                        bg-black border border-emerald-300/40 shadow-inner">

          {/* Scanning Line Animation */}
          <div className="absolute top-0 left-0 right-0 h-[2px] 
                          bg-gradient-to-r from-transparent via-emerald-400 to-transparent
                          animate-scan-line z-10"></div>

          <BarcodeScanner onDetected={onDetected} />
        </div>

        {/* ACTIVE BADGE */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 
                        px-4 py-2 bg-white/70 backdrop-blur-md 
                        rounded-full border border-emerald-300 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-semibold text-emerald-800">
              {t.scannerActive}
            </span>
          </div>
        </div>
      </div>

      {/* HELP TEXT */}
      <div className="flex items-center justify-between px-1 text-xs text-emerald-700/70">
        <span>{t.barcodeTypes}</span>
        <span>{t.optimalLight}</span>
      </div>

      {/* ACTION BUTTONS */}
      <div className="space-y-3">

        <button
          onClick={onManualEntry}
          className="w-full py-3.5 rounded-2xl font-semibold text-white
                     bg-gradient-to-r from-emerald-600 to-teal-600
                     shadow-lg shadow-emerald-300/40
                     transition-all duration-300
                     hover:scale-[1.02] hover:shadow-emerald-400/60"
        >
          {t.manualEntry}
        </button>

        <button
          onClick={onChangeProfile}
          className="w-full text-emerald-700 hover:text-emerald-900 
                     text-sm py-2 transition-colors"
        >
          {t.changeProfile}
        </button>

      </div>

      {/* Scanning line animation */}
      <style>
        {`
          @keyframes scan {
            0% { transform: translateY(0%); }
            50% { transform: translateY(100%); }
            100% { transform: translateY(0%); }
          }

          .animate-scan-line {
            animation: scan 2.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
