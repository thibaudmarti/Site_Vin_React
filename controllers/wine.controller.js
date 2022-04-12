const WineModel = require("../models/wine.model");

exports.addWine = async (req, res) => {
  console.log(req.body);
  const {
    name,
    region,
    appellation,
    format,
    color,
    domain,
    year,
    quantity,
    guard,
    grape,
    label,
    degree,
    description,
    imageUrl,
    price,
  } = req.body;

  try {
    const wine = await WineModel.create({
      name,
      region,
      appellation,
      format,
      color,
      domain,
      year,
      quantity,
      guard,
      grape,
      label,
      degree,
      description,
      imageUrl,
      price,
    });
    res.status(201).json({ message: `Wine ${wine._id} created !` });
  } catch (err) {
    res.status(200).json({ err });
  }
};

exports.getAllWines = async (req, res) => {
  const wines = await WineModel.find().select();
  res.status(200).json(wines);
};
