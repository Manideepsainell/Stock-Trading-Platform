<<<<<<< HEAD
const { model } = require("mongoose");
const OrdersSchema = require("../schemas/OrdersSchema");  // no destructuring

// ✅ register the model with the schema
const OrdersModel = model("Orders", OrdersSchema); // use capitalized model name

module.exports = { OrdersModel };
=======
// model/OrdersModel.js
import { model } from "mongoose";
import OrdersSchema from "../schemas/OrdersSchema.js";

export const OrdersModel = model("Orders", OrdersSchema);
>>>>>>> clean-main
