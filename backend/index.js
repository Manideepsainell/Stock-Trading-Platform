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
app.use(cors({
  origin: "*",      // allow all origins
  credentials: true // allows cookies and auth headers
}));


app.use(cookieParser());
app.use(express.json());

// ===== Auth Routes =====
app.use("/api/auth", authRoutes);

app.use("/api/stocks", stockRoutes);
app.use("/api/summary", require("./routes/summary"));


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
  try {
    const allHoldings = await HoldingsModel.find({ userId: req.user.id });

    const updatedHoldingsPromises = allHoldings.map(async (holding) => {
      // Map your DB name to Yahoo Finance symbol
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
      const isLoss = net < 0;

      return {
        ...holding._doc,       // include all DB fields
        price: quote.regularMarketPrice,
        day: quote.regularMarketChange.toFixed(2),
        net: net.toFixed(2),
        isLoss,
      };
    });

    const updatedHoldings = await Promise.all(updatedHoldingsPromises);
    res.json(updatedHoldings);
  } catch (error) {
    console.error("Error fetching live holdings:", error.message);
    res.status(500).json({ error: "Failed to fetch live holdings" });
  }
});

app.get("/allPositions", protect, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({ userId: req.user.id });

    const updatedPositionsPromises = allPositions.map(async (position) => {
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
      const isLoss = net < 0;

      return {
        ...position._doc,
        price: quote.regularMarketPrice,
        day: quote.regularMarketChange.toFixed(2),
        net: net.toFixed(2),
        isLoss,
      };
    });

    const updatedPositions = await Promise.all(updatedPositionsPromises);
    res.json(updatedPositions);
  } catch (error) {
    console.error("Error fetching live positions:", error.message);
    res.status(500).json({ error: "Failed to fetch live positions" });
  }
});


app.get("/allOrders", protect, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 });

    const updatedOrdersPromises = allOrders.map(async (order) => {
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

      return {
        ...order._doc,
        price: quote.regularMarketPrice,
      };
    });

    const updatedOrders = await Promise.all(updatedOrdersPromises);
    res.json(updatedOrders);
  } catch (error) {
    console.error("Error fetching live orders:", error.message);
    res.status(500).json({ error: "Failed to fetch live orders" });
  }
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
