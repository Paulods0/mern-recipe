const express = require("express")
const { registerUser, loginUser } = require("../controllers/userController")
const { getSingleUSer } = require("../controllers/recipeController")

const router = express.Router()

router.post("/login", loginUser)
router.post("/register", registerUser)
router.get("/:id", getSingleUSer)

module.exports = router
