const Recipe = require("../models/recipeModel")
const User = require("../models/userModel")
const cloudinary = require("../config/cloudinary")

const createRecipe = async (req, res) => {
  const { name, cookingTime, instructions, ingredients, category, userOwner } =
    req.body
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "mern-recipe",
      use_filename: true,
    })

    const recipe = new Recipe({
      cookingTime,
      ingredients,
      name,
      image: result.secure_url,
      category,
      instructions,
      cloudinary_id: result.public_id,
      userOwner,
    })

    await recipe.save()
    res.status(200).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
const getRecepies = async (req, res) => {
  try {
    const recepies = await Recipe.find({})
    res.status(200).json(recepies)
  } catch (error) {
    res.status(404).json(error)
  }
}

const getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    res.status(200).json(recipe)
  } catch (error) {
    res.status(404).json({ msg: "Couldn't find the recipe", error })
  }
}

const saveRecipe = async (req, res) => {
  const id = req.params.id
  try {
    const recipe = await Recipe.findById(id)
    const user = await User.findById(req.body.userID)

    user.savedRecipies.push(recipe)
    await user.save()

    res.status(200).json({ savedRecipies: user.savedRecipies })
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndDelete({ _id: req.params.id })
    if (!recipe) {
      return res.status(404).json("Recipe not found")
    }
    if (recipe.cloudinary_id) {
      await cloudinary.uploader.destroy(recipe.cloudinary_id)
    }
    await recipe.remove()
    res.status(200).json({ msg: "Successfuly Deleted", deleted: recipe })
  } catch (error) {
    res.status(500).json({ msg: "Could not delete the recipe", error })
  }
}

const getSingleUSer = async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({ _id: id })
    res.status(200).json({ user: user })
  } catch (error) {
    res.status(404).json({ msg: "Could not find this user", error })
  }
}

const getRecipeByName = async (req, res) => {
  const name = req.params.nome
  try {
    const recipe = await Recipe.aggregate([
      {
        $match: {
          name: name,
        },
      },
    ])
    res.json({ msg: "Here it goes", recipes: recipe })
  } catch (error) {
    res.status(404).json(error)
  }
}

const getSavedRecepies = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json({ data: user?.savedRecipies })
  } catch (error) {
    res.json({ error })
  }
}

const getAllSavedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const savedRecipes = await Recipe.find({
      _id: { $in: user.savedRecipies },
    })
    res.status(200).json({ savedRecipes })
  } catch (error) {
    res.status(404).json({ error })
  }
}

module.exports = {
  createRecipe,
  getRecepies,
  getRecipeByName,
  getSingleRecipe,
  getSingleUSer,
  saveRecipe,
  deleteRecipe,
  getSavedRecepies,
  getAllSavedRecipes,
}
