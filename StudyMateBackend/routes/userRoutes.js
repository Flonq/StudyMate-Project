const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Tüm kullanıcıları getir
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Yeni kullanıcı ekle
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Kayıt olma
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("Gelen kayıt isteği:", { name, email }); // Debug için log

    // Email kontrolü
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("Email zaten kayıtlı:", email);
      return res.status(400).json({ message: "Bu email zaten kayıtlı" });
    }

    // Şifreyi hashleme
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Yeni kullanıcı oluşturma
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("Yeni kullanıcı oluşturuldu:", user._id);

    res.status(201).json({
      message: "Kayıt başarılı",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Kayıt hatası:", error);
    res.status(500).json({ message: error.message });
  }
});

// Giriş yapma
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcı kontrolü
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Kullanıcı bulunamadı" });
    }

    // Şifre kontrolü
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Geçersiz şifre" });
    }

    // JWT token oluşturma
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
