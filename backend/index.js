require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const yahooFinance = require("yahoo-finance2").default;

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
// Universal CORS for simplicity
const allowedOrigins = [
  "http://localhost:3001",
  "https://main.d1trzlmgp9l0ln.amplifyapp.com",
  "https://main.dnhat8qvs6b5l.amplifyapp.com",

];

// General middleware
app.use((req, res, next) => {
  if (req.path.startsWith("/api/stocks")) {
    // Public endpoints → allow all origins
    res.header("Access-Control-Allow-Origin", "*");
  } else {
    // Authenticated endpoints → allow only your frontends
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Origin", origin);
      res.header("Access-Control-Allow-Credentials", "true");
    }
  }
  
  // Common headers
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
  // Handle preflight
  if (req.method === "OPTIONS") return res.sendStatus(200);

  next();
});



app.use(cookieParser());
app.use(express.json());

// ===== Auth & Stock Routes =====
app.use("/api/auth", authRoutes);
app.use("/api/stocks", stockRoutes);
app.use("/api/summary", require("./routes/summary"));

// ===== Database Connect =====
mongoose.connect(uri)
  .then(() => {
    console.log("✅ DB connected");
    app.listen(PORT, () => console.log(`🚀 Server started on http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ DB connection failed:", err));

// ===== User Data Routes =====

// Holdings
app.get("/allHoldings", protect, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({ userId: req.user.id });
    if (!allHoldings || allHoldings.length === 0) return res.json([]); // empty for new users

    const updatedHoldings = await Promise.all(allHoldings.map(async (holding) => {
const symbolMap = {
  RELIANCE: "RELIANCE.NS",
  TCS: "TCS.NS",
  INFY: "INFY.NS",
  HDFCBANK: "HDFCBANK.NS",
  ICICIBANK: "ICICIBANK.NS",
  ITC: "ITC.NS",
  KOTAKBANK: "KOTAKBANK.NS",
  SBIN: "SBIN.NS",
};
      const symbol = symbolMap[holding.name] || `${holding.name}.NS`;
    const quote = await yahooFinance.quote(symbol);
      const curValue = quote.regularMarketPrice * holding.qty;
      const net = curValue - holding.avg * holding.qty;
      return { ...holding._doc, price: quote.regularMarketPrice, day: quote.regularMarketChange.toFixed(2), net: net.toFixed(2), isLoss: net < 0 };
    }));

    res.json(updatedHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err.message);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Positions
app.get("/allPositions", protect, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({ userId: req.user.id });
    if (!allPositions || allPositions.length === 0) return res.json([]);

    const updatedPositions = await Promise.all(allPositions.map(async (position) => {
      const symbolMap = {
        RELIANCE: "RELIANCE.NS",
        TCS: "TCS.NS",
        INFY: "INFY.NS",
        HDFCBANK: "HDFCBANK.NS",
        ICICIBANK: "ICICIBANK.NS",
        ITC: "ITC.NS",
        KOTAKBANK: "KOTAKBANK.NS",
        SBIN: "SBIN.NS",
      };
      const symbol = symbolMap[position.name] || `${position.name}.NS`;
      const quote = await yahooFinance.quote(symbol);
      const curValue = quote.regularMarketPrice * position.qty;
      const net = curValue - position.avg * position.qty;
      return { ...position._doc, price: quote.regularMarketPrice, day: quote.regularMarketChange.toFixed(2), net: net.toFixed(2), isLoss: net < 0 };
    }));

    res.json(updatedPositions);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

// Orders
app.get("/allOrders", protect, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 });
    if (!allOrders || allOrders.length === 0) return res.json([]);

    const updatedOrders = await Promise.all(allOrders.map(async (order) => {
      const symbolMap = {
        RELIANCE: "RELIANCE.NS",
        TCS: "TCS.NS",
        INFY: "INFY.NS",
        HDFCBANK: "HDFCBANK.NS",
        ICICIBANK: "ICICIBANK.NS",
        ITC: "ITC.NS",
        KOTAKBANK: "KOTAKBANK.NS",
        SBIN: "SBIN.NS",
      };
      const symbol = symbolMap[order.name] || `${order.name}.NS`;
      const quote = await yahooFinance.quote(symbol);
      return { ...order._doc, price: quote.regularMarketPrice };
    }));

    res.json(updatedOrders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// New Order
app.post("/newOrder", protect, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty: Number(qty), price: Number(price), mode, userId: req.user.id });
    await newOrder.save();
    res.status(201).json({ message: "Order placed", order: newOrder });
  } catch (err) {
    console.error("Error creating order:", err.message);
    res.status(500).json({ error: "Failed to create order" });
  }
});
