// server.js (ES Module version)
import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/games", async (req, res) => {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.listen(3001, () => {
  console.log("Proxy server running on http://localhost:3001");
});
