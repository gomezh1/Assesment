const mongoose = require("mongoose");

const CropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter crop name"],
    },

    /*id:{
      type:String,
      required: true,
      default:"Digite el id de la cultivo"
    },*/
    quantityArea: {
      type: Number,
      required: true,
      default: 0,
    },

    variety: {
      type: String,
      required: false,
      default: "",
    },

    ubication: {
      type: String,
      required: true,
      default: "",
    },

    size: {
      type: Number,
      required: true,
      default: 0,
    },

    sowingDate: {
      type: String,
      required: true,
    },

    harvestDate: {
      type: String,
      required: true,
    },

    purchase: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    offer: {
      type: Number,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

// Permitir que MongoDB use el modelo
const Crop = mongoose.model("Crop", CropSchema);

module.exports = Crop;
