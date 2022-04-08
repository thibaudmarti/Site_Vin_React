const router = require("express").Router();
const wineCtrl = require("../controllers/wine.controller");

router.post("/addWine", wineCtrl.addWine);
router.get("/", wineCtrl.getAllWines);

module.exports = router;
