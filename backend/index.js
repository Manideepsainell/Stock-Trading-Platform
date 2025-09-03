require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/auth");
const stockRoutes = require("./routes/stocks");

const protect = require("./middleware/authmiddleware");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ===== Middleware =====
const allowedOrigins = [
  "http://localhost:3000",
  "https://main.d3c9ylvigombeq.amplifyapp.com"
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // allow REST tools like Postman
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));


app.use(cookieParser());
app.use(express.json());

// ===== Auth Routes =====
app.use("/api/auth", authRoutes);

app.use("/api/stocks", stockRoutes);

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
// index.js (or wherever your routes are)
app.get("/allHoldings", protect, async (req, res) => {
  const allHoldings = await HoldingsModel.find({ userId: req.user.id });
  res.json(allHoldings);
});

app.get("/allPositions", protect, async (req, res) => {
  const allPositions = await PositionsModel.find({ userId: req.user.id });
  res.json(allPositions);
});

app.get("/allOrders", protect, async (req, res) => {
  const allOrders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(allOrders);
});

app.post("/newOrder", protect, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new OrdersModel({
    name,
    qty: Number(qty),
    price: Number(price),
    mode,
    userId: req.user.id, // assign order to logged-in user
  });
  await newOrder.save();
  res.status(201).json({ message: "Order placed", order: newOrder });
});

// Optional: Seed routes (for testing only)
