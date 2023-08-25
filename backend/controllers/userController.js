const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const User = require("../models/userModel")

const salt = bcrypt.genSaltSync(10)
const secretKey = crypto.randomBytes(32).toString("hex")

const registerUser = async (req, res) => {
  const { name, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, salt)
  try {
    const registedUser = await User.create({
      name: name,
      password: hashedPassword,
    })
    registedUser.save()
    res.status(200).json(registedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

const loginUser = async (req, res) => {
  const { name, password } = req.body
  try {
    const user = await User.findOne({ name })
    if (!user) {
      res.status(404).json({ message: "User doesn't exists" })
    }
    const isPassword = bcrypt.compareSync(password, user.password)
    if (!isPassword) {
      res.status(404).json({ message: "Name or Password is incorrect" })
    }
    const token = jwt.sign({ id: user._id }, secretKey)
    res.status(200).json({
      token,
      userID: user._id,
      username: user.name,
    })
  } catch (error) {
    console.error(error)
  }
}



module.exports = {
  registerUser,
  loginUser,
}
