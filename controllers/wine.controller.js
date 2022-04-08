const WineModel = require("../models/wine.model");

module.exports.addWine = async (req, res) => {
  console.log(req.body);
  const { name, price, color, domain, description, quantity, imageUrl } =
    req.body;

  try {
    const wine = await WineModel.create({
      name,
      price,
      color,
      domain,
      description,
      quantity,
      imageUrl,
    });
    res.status(201).json({ wine: wine._id });
  } catch (err) {
    res.status(200).json({ err });
  }
};

exports.getAllWines = async (req, res) => {
  const wines = await WineModel.find().select();
  res.status(200).json(wines);
};
