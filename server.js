const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.OPENAI_API_KEY) {
  console.warn("OPENAI_API_KEY is not set.");
}

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json({ limit: "50kb" }));

app.get("/", (req, res) => {
  res.json({ ok: true, message: "My AI Assistant backend is running." });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, language = "en-US" } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    const languageName =
      language === "ml-IN" ? "Malayalam" :
      language === "hi-IN" ? "Hindi" : "English";

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      instructions:
        "You are My AI Assistant. Be helpful, friendly and concise. " +
        `Reply in ${languageName} unless the user clearly asks for another language. ` +
        "Do not claim to have performed actions you cannot actually perform.",
      input: message
    });

    res.json({ answer: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI server error. Check the backend logs." });
  }
});

app.listen(port, () => {
  console.log(`My AI Assistant backend running on port ${port}`);
});
