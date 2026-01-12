import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "AIzaSyCHSwpO_q8drvdxLq450W8AMQO7IiSy1nw";

app.post("/analyze-text", async (req, res) => {
  try {
    const { ingredients, allergies, languageName } = req.body;

    const prompt = `
You are a food safety expert.

First, analyze the food label and decide if it is SAFE or DANGEROUS for the user.

User allergies:
${allergies.join(", ")}

Ingredients:
${ingredients}

Now follow these steps STRICTLY:

1. Create the result in English in this format:

Status:
Risk Ingredient:
Reason:

2. Translate the FULL result into this language: ${languageName}

3. Output ONLY the translated version.
Do NOT include the English version.
Do NOT mix languages.
Do NOT explain anything else.
`;

    const body = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    const text =
      data.candidates?.[0]?.content?.parts?.map(p => p.text).join("\n") ||
      JSON.stringify(data);

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Language translation failed" });
  }
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Nutri-Scope multilingual AI backend running on http://0.0.0.0:5000");
});
