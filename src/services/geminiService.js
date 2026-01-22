export async function callGemini(prompt) {
  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err || "API failed");
    }

    const data = await res.json(); // ✅ must be JSON
    return data.result;            // your backend sends { result: "..." }

  } catch (e) {
    console.error("Gemini call failed:", e);
    return null;
  }
}
