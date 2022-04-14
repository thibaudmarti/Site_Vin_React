const router = require("express").Router();
const wineCtrl = require("../controllers/wine.controller");

router.post("/addWine", wineCtrl.addWine);
router.get("/", wineCtrl.getAllWines);
router.get("/:id", wineCtrl.getOneWine);
router.put("/:id", wineCtrl.updateWine);
router.delete("/:id", wineCtrl.deleteWine);

module.exports = router;
