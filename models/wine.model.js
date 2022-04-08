const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  name: { type: String },
  color: { type: String },
  domain: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  year: { type: Number },
  label: { type: String },
});

const WineModel = mongoose.model("vin", wineSchema);

module.exports = WineModel;
