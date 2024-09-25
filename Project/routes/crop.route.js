const express = require("express");
const Crop = require("../models/crop.model.js");
const router = express.Router();
const {
  getCrops,
  createCrop,
  getCrop,
  updateCrop
} = require("../controllers/crop.controller.js");

router.get("/read/crops", getCrops);
router.post("/create/crop", createCrop);
router.get("/read/:id", getCrop);
router.put("/update/crops/:id", updateCrop);
router.get("/delete/crops/:id", getCrop);

module.exports = router;
