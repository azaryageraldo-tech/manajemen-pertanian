// Menggunakan ES Module import
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Menjalankan konfigurasi dotenv
dotenv.config();

const app = express();
// Menggunakan port dari file .env atau default 5000
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Mengizinkan akses dari frontend
app.use(express.json()); // Mem-parsing body request sebagai JSON

// Contoh route sederhana untuk tes
app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di API Manajemen Pertanian!" });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
