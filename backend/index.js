// routes/userData.js
const express = require("express");
const yahooFinance = require("yahoo-finance2").default;
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");
const protect = require("../middleware/authmiddleware");

const router = express.Router();

// Map DB names to Yahoo Finance symbols
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

// Utility function to fetch live price safely
async function fetchPrice(symbol) {
  try {
    const quote = await yahooFinance.quote(symbol);
    return {
      price: quote?.regularMarketPrice || 0,
      day: quote?.regularMarketChange?.toFixed(2) || 0,
    };
  } catch (err) {
    console.error(`Yahoo fetch error for ${symbol}:`, err.message);
    return { price: 0, day: 0 };
  }
}

// ===== Holdings =====
router.get("/allHoldings", protect, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({ userId: req.user.id }) || [];
    const updated = await Promise.all(
      holdings.map(async (h) => {
        const { price, day } = await fetchPrice(symbolMap[h.name] || `${h.name}.NS`);
        const curValue = price * h.qty;
        const net = curValue - h.avg * h.qty;
        return { ...h._doc, price, day, net: net.toFixed(2), isLoss: net < 0 };
      })
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

// ===== Positions =====
router.get("/allPositions", protect, async (req, res) => {
  try {
    const positions = await PositionsModel.find({ userId: req.user.id }) || [];
    const updated = await Promise.all(
      positions.map(async (p) => {
        const { price, day } = await fetchPrice(symbolMap[p.name] || `${p.name}.NS`);
        const curValue = price * p.qty;
        const net = curValue - p.avg * p.qty;
        return { ...p._doc, price, day, net: net.toFixed(2), isLoss: net < 0 };
      })
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

// ===== Orders =====
router.get("/allOrders", protect, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id }).sort({ createdAt: -1 }) || [];
    const updated = await Promise.all(
      orders.map(async (o) => {
        const { price } = await fetchPrice(symbolMap[o.name] || `${o.name}.NS`);
        return { ...o._doc, price };
      })
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
});

// ===== Place New Order =====
router.post("/newOrder", protect, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const order = await OrdersModel.create({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
      userId: req.user.id,
    });
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;
