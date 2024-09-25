const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter crop Username"],
    },

    userLastName: {
      type: String,
      required: [true, "Please enter crop Username"],
    },

    email: {
      type: String,
      required: true,
      default: "@",
    },

    role: {
      type: String,
      required: true,
      default: "",
    }
  },

  {
    timestamps: true,
  }
);

// Permitir que MongoDB use el modelo
const User = mongoose.model("User", UserSchema);

module.exports = User;
