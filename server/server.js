const express = require('express');
const dotenv = require('dotenv');
const { connectToMongo } = require('./config/mongoClient');
const usersRoute = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/service/user', usersRoute);

// Start server
app.listen(PORT, async () => {
  try {
    await connectToMongo();
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error('MongoDB connection failed', err);
  }
});
