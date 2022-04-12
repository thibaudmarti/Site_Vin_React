const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema({
  name: { type: String },
  region: { type: String },
  appellation: { type: String },
  format: { type: String },
  color: { type: String },
  domain: { type: String },
  year: { type: Number },
  quantity: { type: Number },
  guard: { type: String },
  grape: { type: String },
  label: { type: String },
  degree: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  price: { type: Number },
});

const WineModel = mongoose.model("vin", wineSchema);

module.exports = WineModel;
