require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/auth");
const protect = require("./middleware/authmiddleware");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ===== Middleware =====
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

// ===== Auth Routes =====
app.use("/api/auth", authRoutes);

// ===== Database Connect =====
mongoose.connect(uri)
  .then(() => {
    console.log("✅ DB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ DB connection failed:", err);
  });

// ===== Routes =====
app.get("/allHoldings", protect, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", protect, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", protect, async (req, res) => {
  const allOrders = await OrdersModel.find().sort({ createdAt: -1 });
  res.json(allOrders);
});

app.post("/newOrder", protect, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || qty == null || price == null || !mode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = new OrdersModel({ name, qty: Number(qty), price: Number(price), mode });
    await newOrder.save();
    res.status(201).json({ message: "Order placed", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Optional: Seed routes (for testing only)
