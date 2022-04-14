const WineModel = require("../models/wine.model");
const ObjectID = require("mongoose").Types.ObjectId;

// CREATE
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

// GET
exports.getAllWines = async (req, res) => {
  const wines = await WineModel.find().select();
  res.status(200).json(wines);
};

exports.getOneWine = async (req, res) => {
  const wine = await WineModel.findOne({ _id: req.params.id });
  res.status(200).json(wine);
};

// UPDATE
exports.updateWine = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).json({ error: "ID unknow : " + req.params.id });
  }

  WineModel.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

// DELETE
exports.deleteWine = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).json({ error: "ID unknow : " + req.params.id });
  }

  WineModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs._id);
    else console.log("delete error : " + err);
  });
};
