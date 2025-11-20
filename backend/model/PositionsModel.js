// model/PositionsModel.js
import mongoose from "mongoose";
import PositionSchema from "../schemas/PositionsSchema.js";

export const PositionsModel = mongoose.model("Positions", PositionSchema);
