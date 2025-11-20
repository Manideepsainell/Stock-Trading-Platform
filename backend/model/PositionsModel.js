<<<<<<< HEAD
const mongoose = require("mongoose");
const PositionSchema = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("positions", PositionSchema);

module.exports = { PositionsModel };
=======
// model/PositionsModel.js
import mongoose from "mongoose";
import PositionSchema from "../schemas/PositionsSchema.js";

export const PositionsModel = mongoose.model("Positions", PositionSchema);
>>>>>>> clean-main
