import express from "express";
import dotenv from "dotenv";
import { connectToMongo } from "./config/mongoClient";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Start server
app.listen(PORT, async () => {
  try {
    await connectToMongo();
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error("MongoDB connection failed", err);
  }
});
