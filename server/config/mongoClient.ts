import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const dbname = process.env.DATABASE_NAME;

if (!uri) {
  throw new Error("MONGO_URI is not defined in .env");
}

const client = new MongoClient(uri);

export async function connectToMongo() {
  try {
    if (!client.topology?.isConnected()) {
      await client.connect();
    }
    return client.db(dbname); // Replace with your actual DB name
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
