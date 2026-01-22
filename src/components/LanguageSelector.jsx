export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className="relative bg-white/30 backdrop-blur-xl border border-emerald-300/40
                   shadow-lg rounded-full px-4 py-2
                   transition-all duration-300 ease-out
                   hover:scale-105
                   hover:shadow-[0_0_30px_rgba(16,185,129,0.45)]
                   hover:bg-white/40
                   active:scale-95"
      >
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent text-emerald-900 text-sm font-semibold
                     outline-none ring-0 focus:ring-0 focus:outline-none
                     border-none appearance-none cursor-pointer pr-6
                     transition-colors duration-300
                     hover:text-emerald-700 rounded-full"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none">
          ▼
        </span>
      </div>
    </div>
  );
}
