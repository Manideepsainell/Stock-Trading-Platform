require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ Middleware first
app.use(cors());
app.use(bodyParser.json());

// ✅ DB connect before starting server
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

// ================= ROUTES =================

app.get("/addPositions", async (req, res) => {
  let temppositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  for (let item of temppositions) {
    let newPosition = new PositionsModel(item);
    await newPosition.save(); // ✅ awaited
  }

  res.send("Positions added!");
});

app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [ /* ...your holdings array... */ ];

  for (let item of tempHoldings) {
    let newHolding = new HoldingsModel(item);
    await newHolding.save();
  }

  res.send("Holdings added!");
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find().sort({ createdAt: -1 });
  res.json(allOrders);
});



app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || qty == null || price == null || !mode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
    });

    await newOrder.save();
    console.log("Saved order:", newOrder);
    res.status(201).json({ message: "Order placed", order: newOrder });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ error: "Server error" });
  }
});


