export async function callGemini(prompt) {
  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) throw new Error("API failed");

    const text = await res.text();   // <-- text, not json
    return text;
  } catch (e) {
    console.error("Gemini call failed:", e);
    return null;
  }
}
