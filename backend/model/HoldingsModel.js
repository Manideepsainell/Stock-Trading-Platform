<<<<<<< HEAD
const { model } = require("mongoose");
const HoldingSchema = require("../schemas/HoldingSchema");  // no destructuring

// ✅ register the model with the schema
const HoldingsModel = model("Holding", HoldingSchema); // use capitalized model name

module.exports = { HoldingsModel };
=======
// model/HoldingsModel.js
import { model } from "mongoose";
import HoldingSchema from "../schemas/HoldingSchema.js"; // default export from schema

export const HoldingsModel = model("Holding", HoldingSchema);
>>>>>>> clean-main
