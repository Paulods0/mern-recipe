const express = require("express")
const {
  createRecipe,
  getRecepies,
  saveRecipe,
  deleteRecipe,
  getSavedRecepies,
  getAllSavedRecipes,
  getSingleRecipe,
  getRecipeByName,
} = require("../controllers/recipeController")

const upload = require("../middlewares/multer")

const router = express.Router()

router.post("/", upload.single("image"), createRecipe)
router.get("/", getRecepies)
router.get("/:nome", getRecipeByName)
router.get("/single/:id", getSingleRecipe)
router.get("/savedrecepies/ids/:userID", getSavedRecepies)
router.get("/savedrecipes/:id", getAllSavedRecipes)
router.put("/:id", saveRecipe)
router.delete("/:id", deleteRecipe)

module.exports = router
