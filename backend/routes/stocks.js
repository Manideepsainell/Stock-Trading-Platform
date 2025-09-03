const express = require("express");
const yahooFinance = require("yahoo-finance2").default;
const watchlistSymbols = ["RELIANCE.NS", "TCS.NS", "INFY.NS"];
const router = express.Router();

// Single stock quote (existing route)
;

// Arrays of NSE symbols
const sensexNseSymbols = [
  "RELIANCE.NS", "TCS.NS", "HDFCBANK.NS", "INFY.NS", "ICICIBANK.NS",
  "ITC.NS", "KOTAKBANK.NS", "SBIN.NS", "BHARTIARTL.NS", "LT.NS"
  // add all 30
];

const niftyNseSymbols = [
  "RELIANCE.NS", "TCS.NS", "INFY.NS", "HDFCBANK.NS", "ICICIBANK.NS",
  "ITC.NS", "KOTAKBANK.NS", "SBIN.NS", "LT.NS", "HCLTECH.NS"
  // add all 50
];

// Helper function to fetch multiple stocks
async function fetchStocks(symbols) {
  return Promise.all(
    symbols.map(async (symbol) => {
      try {
        const quote = await yahooFinance.quote(symbol);
        return {
          symbol: quote.symbol,
          price: quote.regularMarketPrice,
          change: quote.regularMarketChange,
          changePercent: quote.regularMarketChangePercent,
          open: quote.regularMarketOpen,
          high: quote.regularMarketDayHigh,
          low: quote.regularMarketDayLow,
          previousClose: quote.regularMarketPreviousClose,
          marketTime: quote.regularMarketTime
        };
      } catch (error) {
        console.error(`Error fetching ${symbol}:`, error.message);
        return { symbol, error: "Failed to fetch" };
      }
    })
  );
}

// Route for Sensex
router.get("/sensex/all", async (req, res) => {
  const data = await fetchStocks(sensexNseSymbols);
  res.json(data);
});

// Route for Nifty 50
router.get("/nifty/all", async (req, res) => {
  const data = await fetchStocks(niftyNseSymbols);
  res.json(data);
});



router.get("/watchlist", async (req, res) => {
  try {
    const data = await fetchStocks(watchlistSymbols);
    res.json(data);
  } catch (error) {
    console.error("Error fetching watchlist:", error.message);
    res.status(500).json({ error: "Failed to fetch watchlist" });
  }
  router.get("/:symbol", async (req, res) => {
  try {
    const input = req.params.symbol.toUpperCase();

    const nseMap = {
      RELIANCE: "RELIANCE.NS",
      TCS: "TCS.NS",
      INFY: "INFY.NS",
      HDFCBANK: "HDFCBANK.NS",
      ICICIBANK: "ICICIBANK.NS",
      ITC: "ITC.NS",
      KOTAKBANK: "KOTAKBANK.NS",
      SBIN: "SBIN.NS"
    };

    const symbol = nseMap[input] || `${input}.NS`;
    const quote = await yahooFinance.quote(symbol);

    res.json({
      symbol: quote.symbol,
      price: quote.regularMarketPrice,
      change: quote.regularMarketChange,
      changePercent: quote.regularMarketChangePercent,
      open: quote.regularMarketOpen,
      high: quote.regularMarketDayHigh,
      low: quote.regularMarketDayLow,
      previousClose: quote.regularMarketPreviousClose,
      marketTime: quote.regularMarketTime
    });
  } catch (error) {
    console.error("Error fetching Yahoo Finance stock:", error.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
})
});
module.exports = router;
