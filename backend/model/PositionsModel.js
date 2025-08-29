const mongoose = require("mongoose");
const PositionSchema = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("positions", PositionSchema);

module.exports = { PositionsModel };
