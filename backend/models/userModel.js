const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  savedRecipies: [{ type: mongoose.Schema.Types.ObjectId, ref:"recipes" }],
})

module.exports = mongoose.model("users", userSchema)
