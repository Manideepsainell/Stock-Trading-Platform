const { model } = require("mongoose");
const HoldingSchema = require("../schemas/HoldingSchema");  // no destructuring

// ✅ register the model with the schema
const HoldingsModel = model("Holding", HoldingSchema); // use capitalized model name

module.exports = { HoldingsModel };
