const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error('MONGO_URI is not defined in .env');
}

async function connectToMongo() {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully using Mongoose');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on connection failure
  }
}

module.exports = { connectToMongo };
