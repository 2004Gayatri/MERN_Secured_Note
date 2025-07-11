require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Test MongoDB connected"))
  .catch(err => console.error("❌ Test MongoDB error:", err));
