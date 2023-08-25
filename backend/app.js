const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const recipeRoute = require("./routes/recipesRoute")
const userRoute = require("./routes/userRoute")

const app = express()
const port = process.env.PORT || 5000

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use("/api/auth", userRoute)
app.use("/api/recipe", recipeRoute)

//database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useUndefiedTopology:true
  })
  .then(() => {
    app.listen(port, () => console.log("Server and Database are running"))
  })
  .catch((error) => console.log(error))
