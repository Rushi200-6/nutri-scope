export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-white/30 backdrop-blur-xl
                   border border-white/40
                   text-emerald-900 text-sm
                   px-4 py-2 rounded-xl
                   shadow-lg shadow-emerald-300/40
                   hover:shadow-emerald-400/60
                   hover:scale-[1.03]
                   transition-all duration-300
                   outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="mr">मराठी</option>
      </select>
    </div>
  );
}
