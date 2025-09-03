const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

// GET stock quote
router.get("/:symbol", async (req, res) => {
  try {
    // Add exchange prefix for NSE/BSE
    // Example: RELIANCE -> NSE:RELIANCE, TCS -> NSE:TCS
    const symbol = `NSE:${req.params.symbol.toUpperCase()}`;

    const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`;
    console.log("Fetching URL:", url);

    const response = await axios.get(url);
    console.log("API Response:", response.data);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching stock:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;
