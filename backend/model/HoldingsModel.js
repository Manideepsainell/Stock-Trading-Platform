// model/HoldingsModel.js
import { model } from "mongoose";
import HoldingSchema from "../schemas/HoldingSchema.js"; // default export from schema

export const HoldingsModel = model("Holding", HoldingSchema);
