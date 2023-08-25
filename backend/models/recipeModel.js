const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    instructions: [{ type: String, required: true }],
    image: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    category: { type: String, required: true },
    cloudinary_id: { type: String, required: true },
    userOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("recipes", recipeSchema)
