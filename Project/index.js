// Using Node.js `require()`
const express = require("express");
//import mongoose from 'mongoose';
const mongoose = require("mongoose");
// Importar funciones consumo api externa
const { getData, postData } = require("./apiService");
// Importar libreria dotenv para gestonar variables de entorno
require('dotenv').config();
//Importa bd model
const Crop = require("./models/crop.model.js");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
const cropRoute = require("./routes/crop.route.js");
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/read/crops", cropRoute);
app.use("/read/:id", cropRoute);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Return all crops
app.get("/read/crops", async (req, res) => {
  try {
    const crop = await Crop.find();
    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Create Crop
app.post("/create/crop", async (req, res) => {
  try {
    const crop = await Crop.create(req.body);
    res.status(201).json(crop);
    console.log("Crop created");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get one Crop
app.get("/read/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Crop.findById(id);
    const isValidObjectId = /^[a-fA-F0-9]{24}$/.test(id);
    if (!isValidObjectId) {
      return res
        .status(400)
        .json({
          message: "ID no válido, debe tener 24 caracteres hexadecimales",
        });
    } else if (!product) {
      return res.status(404).json({ message: "Crops not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update Crops
app.put("/update/crop/:id", async (req, res) => {
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
});

//delete a Crop
app.delete("/delete/crop/:id", async (req, res) => {
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
});


// Create user
app.post("./")

/*mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.error("Connection refused: ", error);
  });*/

mongoose
  .connect(
    "mongodb+srv://admin:SmkLs197@backenddb.ycp3v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.error("Connection refused: ", error);
  });
