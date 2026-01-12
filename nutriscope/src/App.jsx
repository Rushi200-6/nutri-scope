import { useState, useMemo } from "react";
import Tesseract from "tesseract.js";

const languages = [
  { code: "en-IN", name: "English", sub: "Default" },
  { code: "hi-IN", name: "हिंदी", sub: "Hindi" },
  { code: "mr-IN", name: "मराठी", sub: "Marathi" },
  { code: "ta-IN", name: "தமிழ்", sub: "Tamil" },
  { code: "te-IN", name: "తెలుగు", sub: "Telugu" },
  { code: "kn-IN", name: "ಕನ್ನಡ", sub: "Kannada" },
  { code: "ml-IN", name: "മലയാളം", sub: "Malayalam" },
  { code: "gu-IN", name: "ગુજરાતી", sub: "Gujarati" },
  { code: "bn-IN", name: "বাংলা", sub: "Bengali" },
  { code: "pa-IN", name: "ਪੰਜਾਬੀ", sub: "Punjabi" },
  { code: "ur-IN", name: "اردو", sub: "Urdu" },
  { code: "or-IN", name: "ଓଡ଼ିଆ", sub: "Odia" }
];

function App() {
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [allergyList, setAllergyList] = useState(["Peanut", "Gluten", "Milk", "Egg", "Diabetes", "Vegan"]);
  const [customAllergy, setCustomAllergy] = useState("");
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [lang, setLang] = useState(languages[0]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    return languages.filter(l =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.sub.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggle = (item) => {
    setSelectedAllergies(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item]
    );
  };

  const addAllergy = () => {
    if (!customAllergy.trim()) return;
    if (allergyList.includes(customAllergy)) return;
    setAllergyList([...allergyList, customAllergy]);
    setCustomAllergy("");
  };

  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = lang.code;
    window.speechSynthesis.speak(msg);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setResult("🔍 Reading ingredients...");

    const { data: { text } } = await Tesseract.recognize(file, "eng");

    setResult("🧠 Analyzing...");

    const res = await fetch("http://10.157.15.1:5000/analyze-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ingredients: text,
        allergies: selectedAllergies,
        languageName: lang.name
      })
    });

    const data = await res.json();
    setResult(data.text);
    speak(data.text);
  };

  const isDanger = result.toLowerCase().includes("danger");

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Nutri-Scope</h1>
          <p style={styles.tagline}>Smart Food Label Scanner 🇮🇳</p>
        </header>

        <div style={styles.langBox} onClick={() => setIsPickerOpen(true)}>
          <div style={styles.langIcon}>🌐</div>
          <div style={styles.langContent}>
            <span style={styles.langLabel}>Translate Results to</span>
            <span style={styles.langCurrent}>{lang.name} ({lang.sub})</span>
          </div>
          <div style={styles.langArrow}>⌄</div>
        </div>

        <div style={styles.card}>
          <label style={styles.sectionLabel}>⚠ Dietary Restrictions</label>

          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            <input
              style={styles.addInput}
              placeholder="Add allergy (e.g. Soy)"
              value={customAllergy}
              onChange={(e) => setCustomAllergy(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addAllergy()}
            />
            <button style={styles.addBtn} onClick={addAllergy}>Add</button>
          </div>

          <div style={styles.grid}>
            {allergyList.map(a => (
              <div
                key={a}
                style={{
                  ...styles.chip,
                  backgroundColor: selectedAllergies.includes(a) ? "#4f46e5" : "#f1f5f9",
                  color: selectedAllergies.includes(a) ? "#ffffff" : "#475569"
                }}
                onClick={() => toggle(a)}
              >
                {a}
              </div>
            ))}
          </div>
        </div>

        <div style={styles.card}>
          <label style={styles.sectionLabel}>📷 Scan Product</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} id="upload" />
          <label htmlFor="upload" style={styles.uploadBtn}>
            {preview ? "Scan Another Image" : "Upload"}
          </label>
          {preview && <img src={preview} style={styles.previewImg} alt="Preview" />}
        </div>

        {result && (
          <div style={{ ...styles.resCard, borderLeftColor: isDanger ? "#ef4444" : "#22c55e" }}>
            <div style={{
              ...styles.badge,
              background: isDanger ? "#fee2e2" : "#dcfce7",
              color: isDanger ? "#b91c1c" : "#166534"
            }}>
              {isDanger ? "⚠ ALERT: DANGEROUS" : "✅ ANALYSIS: SAFE"}
            </div>
            <p style={styles.resText}>{result}</p>
          </div>
        )}
      </div>

      {isPickerOpen && (
        <div style={styles.overlay} onClick={() => setIsPickerOpen(false)}>
          <div style={styles.sheet} onClick={e => e.stopPropagation()}>
            <div style={styles.handle} />
            <h2 style={styles.sheetTitle}>Choose Language</h2>
            <input
              style={styles.search}
              placeholder="Search Indian languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <div style={styles.list}>
              {filteredLanguages.map(l => (
                <div
                  key={l.code}
                  style={{ ...styles.listItem, background: lang.code === l.code ? "#eef2ff" : "white" }}
                  onClick={() => { setLang(l); setIsPickerOpen(false); setSearchQuery(""); }}
                >
                  <div>
                    <div style={{ fontWeight: "600", color: "#1e293b" }}>{l.name}</div>
                    <div style={{ fontSize: "12px", color: "#64748b" }}>{l.sub}</div>
                  </div>
                  {lang.code === l.code && <div style={{ color: "#4f46e5" }}>●</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* Same UI styles */
const styles = {
  page: { minHeight: "100vh", background: "#f8fafc", padding: "20px 16px", fontFamily: "system-ui, sans-serif" },
  container: { maxWidth: "450px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "20px" },
  title: { fontSize: "32px", fontWeight: "800", color: "#1e293b", margin: 0 },
  tagline: { color: "#64748b", fontSize: "14px", fontWeight: "500" },

  langBox: {
    background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #4f46e5, #06b6d4) border-box",
    border: "2px solid transparent",
    borderRadius: "16px",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },
  langIcon: { fontSize: "24px", marginRight: "12px" },
  langContent: { flex: 1, display: "flex", flexDirection: "column" },
  langLabel: { fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#6366f1" },
  langCurrent: { fontSize: "18px", fontWeight: "700", color: "#1e293b" },
  langArrow: { fontSize: "20px", color: "#94a3b8" },

  card: { background: "white", borderRadius: "20px", padding: "20px", marginBottom: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
  sectionLabel: { fontSize: "12px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", display: "block", marginBottom: "12px" },
  grid: { display: "flex", flexWrap: "wrap", gap: "8px" },
  chip: { padding: "10px 18px", borderRadius: "100px", fontSize: "14px", fontWeight: "600", cursor: "pointer" },

  addInput: { flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #e2e8f0", outline: "none" },
  addBtn: { padding: "10px 14px", borderRadius: "10px", border: "none", background: "#4f46e5", color: "white", fontWeight: "700", cursor: "pointer" },

  uploadBtn: { display: "block", background: "#1e293b", color: "white", textAlign: "center", padding: "16px", borderRadius: "14px", fontWeight: "700", cursor: "pointer" },
  previewImg: { width: "100%", borderRadius: "12px", marginTop: "12px" },

  resCard: { background: "white", padding: "20px", borderRadius: "20px", borderLeft: "6px solid", marginTop: "16px" },
  badge: { display: "inline-block", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: "800", marginBottom: "10px" },
  resText: { margin: 0, fontSize: "15px", lineHeight: "1.6", color: "#334155" },

  overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "flex-end", zIndex: 1000 },
  sheet: { width: "100%", background: "white", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", padding: "24px", maxHeight: "80vh", display: "flex", flexDirection: "column" },
  handle: { width: "40px", height: "4px", background: "#e2e8f0", borderRadius: "10px", alignSelf: "center", marginBottom: "20px" },
  sheetTitle: { margin: "0 0 16px 0", fontSize: "20px", fontWeight: "800" },
  search: { padding: "14px", borderRadius: "12px", border: "1px solid #e2e8f0", background: "#f8fafc", fontSize: "16px", marginBottom: "16px", outline: "none" },
  list: { overflowY: "auto" },
  listItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px", borderRadius: "12px", marginBottom: "4px", cursor: "pointer" }
};

export default App;
