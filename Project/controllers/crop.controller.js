const Crop = require("../models/crop.model");

const getCrops = async (req, res) => {
  try {
    const crop = await Crop.find({});
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCrop = async (req, res) => {
  try {
    const crop = await getCrops.create(req.body);
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findById(id);
    const isValidObjectId = /^[a-fA-F0-9]{24}$/.test(id);
    if (!isValidObjectId) {
      return res
        .status(400)
        .json({
          message: "ID no válido, debe tener 24 caracteres hexadecimales",
        });
    } else if (!crop) {
      return res.status(404).json({ message: "Crops not found" });
    }
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findByIdAndUpdate(id, req.body);

    if (!crop) {
      return res
        .status(404)
        .json({ message: "Crops not found or Missing required fields" });
    }

    const updateCrops = await Crop.findById(id);
    res.status(200).json(updateCrops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCrop = async (req, res) => {
    try {
        const { id } = req.params;
        const crop = await Crop.findByIdAndDelete(id);
    
        if (!crop) {
          return res.status(404).json({ message: "Crops not found" });
        }
        res.status(200).json({ message: "Delete Crop successfully" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  };

module.exports = {
  getCrops,
  getCrop,
  createCrop,
  updateCrop,
  deleteCrop
};
