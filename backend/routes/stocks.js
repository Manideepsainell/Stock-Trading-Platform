const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol; // e.g., RELIANCE:NSE
    const url = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${process.env.TWELVE_API_KEY}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;
