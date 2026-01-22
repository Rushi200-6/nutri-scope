export async function callGemini(prompt) {
  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) throw new Error("AI service unavailable");

    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Fallback so app never crashes (mobile safe)
    return JSON.stringify({
      verdict: "CAUTION",
      risk_level: "Low",
      key_ingredient: "Unknown",
      explanation:
        "AI service is temporarily unavailable. Showing safe fallback result.",
    });
  }
}
