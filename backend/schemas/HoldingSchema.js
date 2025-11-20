// schemas/HoldingSchema.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean
});

export default HoldingSchema;
