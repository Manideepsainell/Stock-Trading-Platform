// routes/auth.js
import express from "express";
import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";

const router = express.Router();

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
  maxAge: 60 * 60 * 1000 // 1 hour
};

// ===== Signup =====
router.post("/signup", async (req, res) => {
  try {
    const username = (req.body.username || "").trim();
    const email = (req.body.email || "").trim().toLowerCase();
    const password = req.body.password;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // optional: basic password length check
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    // Let the model's pre-save hook hash the password (do not hash again).
    const newUser = new User({ username, email, password });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res
      .cookie("token", token, COOKIE_OPTS)
      .status(201)
      .json({
        message: "Signup successful",
        token, // optional: remove if you want cookie-only auth
        user: { id: newUser._id, username: newUser.username, email: newUser.email },
      });
  } catch (err) {
    console.error("🔥 Signup error:", err);
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// ===== Login =====
router.post("/login", async (req, res) => {
  try {
    const email = (req.body.email || "").trim().toLowerCase();
    const password = req.body.password;

    if (!email || !password) return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email }).select("+password"); // if you used select: false on password
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password); // model method
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res
      .cookie("token", token, COOKIE_OPTS)
      .json({
        message: "Login successful",
        token, // optional
        user: { id: user._id, username: user.username, email: user.email },
      });
  } catch (err) {
    console.error("🔥 Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

export default router;
