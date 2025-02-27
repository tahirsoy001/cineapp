require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// ✅ CORS-u düzəldirik
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ MongoDB bağlantısını qururuq
const mongoURI = "mongodb+srv://zaurtahirsoy:db_zaurtahirsoy123@cluster0.43lwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB bağlantısı uğurla quruldu! 🚀"))
  .catch((err) => console.error("❌ MongoDB bağlantı xətası:", err));

app.get("/", (req, res) => {
  res.send("🚀 CineApp Backend İşləyir!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda işləyir!`);
});