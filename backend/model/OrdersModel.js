// model/OrdersModel.js
import { model } from "mongoose";
import OrdersSchema from "../schemas/OrdersSchema.js";

export const OrdersModel = model("Orders", OrdersSchema);
