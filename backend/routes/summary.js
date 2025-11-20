// routes/summary.js
import express from "express";
const router = express.Router();

// Example mock calculation (replace with DB aggregation later)
router.get("/", async (req, res) => {
  try {
    const summary = {
      marginAvailable: 3740,
      marginUsed: 0,
      openingBalance: 3740,
      pnl: 1550,
      pnlPercent: 5.2,
      currentValue: 31430,
      investment: 29880,
      holdingsCount: 13,
      user: "Manideep" // replace with actual user from auth/session
    };

    res.json(summary);
  } catch (err) {
    console.error("Summary fetch failed:", err.message);
    res.status(500).json({ error: "Failed to fetch summary" });
  }
});

export default router;
