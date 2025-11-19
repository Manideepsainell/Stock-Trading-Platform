// schemas/PositionsSchema.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const PositionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

export default PositionSchema;
