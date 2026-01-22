export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }

    const apiKey = process.env.nutriapi; // your Vercel variable

    if (!apiKey) {
      return res.status(500).send("API Key missing");
    }

    const { prompt } = req.body;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error("Gemini raw response:", data);
      return res.status(500).send("Gemini returned empty response");
    }

    // Send raw model output (your frontend already parses JSON from it)
    res.status(200).send(text);

  } catch (err) {
    console.error("Gemini API failure:", err);
    res.status(500).send("AI Service Error");
  }
}
