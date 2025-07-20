import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

app.use(cors());
app.use(express.json());

// ✅ Main route used by frontend
app.post("/api/generate", async (req, res) => {
  try {
    const body = req.body;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
