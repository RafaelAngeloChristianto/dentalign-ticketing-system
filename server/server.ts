import express from "express";
import { connectToMongo } from "../mongoClient.ts";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const db = await connectToMongo();
    const data = await db.collection("test").find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
