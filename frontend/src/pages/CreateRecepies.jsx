import React, { useState } from "react"
import recipeImg from "../assets/images/createrecipe.jpg"
import { easeOut, motion } from "framer-motion"
import axios from "axios"
import useGetUserID from "../hooks/useGetUserID"
import { Link, useNavigate } from "react-router-dom"
import pleaseLogin from "../assets/images/login.jpg"
import { BiMessageSquareError } from "react-icons/bi"

const CreateRecepies = () => {
  const userID = useGetUserID()
  const navigate = useNavigate()

  // console.log(userID)

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: [],
    image: "",
    cookingTime: 0,
    category: "",
    userOwner: userID,
  })
  // console.log(recipe)

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipe({ ...recipe, [name]: value })
  }
  const handleInputChange = (e, index) => {
    const { value } = e.target
    const newRecipe = recipe.ingredients
    newRecipe[index] = value
    setRecipe({ ...recipe, ingredients: newRecipe })
  }
  const handleInstructionsChange = (e, index) => {
    const { value } = e.target
    const newInstructions = recipe.instructions
    newInstructions[index] = value
    setRecipe({ ...recipe, instructions: newInstructions })
  }

  const addIngredients = (e) => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] })
  }
  const addInstructions = (e) => {
    setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", recipe.name)
    formData.append("ingredients", recipe.ingredients)
    formData.append("instructions", recipe.instructions)
    formData.append("cookingTime", recipe.cookingTime)
    formData.append("category", recipe.category)
    formData.append("userOwner", recipe.userOwner)
    formData.append("image", recipe.image)

    console.log(formData)

    try {
      await axios.post("http://localhost:4000/api/recipe/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      console.log(formData)
      alert("Successfuly created!")
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0]
    setRecipe({ ...recipe, image: selectedFile })
  }

  const isLogged = window.localStorage.getItem("userID")

  return (
    <main className="w-full">
      <motion.section
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 75 }}
        className="w-[1200px] mb-12 mx-auto rounded shadow-2xl "
      >
        {isLogged === null ? (
          <div className="w-full h-[600px] rounded shadow-inner">
            <div className="grid grid-cols-2">
              <div className=" px-6 w-full h-full flex flex-col items-center justify-around">
                <div className="w-full shadow-md text-white justify-center p-3 rounded items-center gap-2 bg-red-900 flex ">
                  <h2>Oops!! You're not logged!</h2>
                  <span>
                    <BiMessageSquareError className="text-[26px]" />
                  </span>
                </div>
                <h1 className="text-[28px] font-semibold">
                  Please{" "}
                  <Link className="text-cyan-800 underline" to="/login">
                    Login
                  </Link>{" "}
                  or <br />{" "}
                  <Link className="text-cyan-800 underline" to="/register">
                    Create
                  </Link>{" "}
                  an account!
                </h1>
                <div>
                  <p>
                    You will not be able to create a recipe if you are no logged
                  </p>
                </div>
              </div>

              <div className="h-[600px] w-full rounded-tr rounded-br">
                <img
                  className="h-full w-full object-cover  rounded-tr rounded-br"
                  src={pleaseLogin}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 ">
            <div className="h-[450px] rounded">
              <img
                className="h-full w-full rounded-l bg-cover "
                src={recipeImg}
                alt="recipe image"
              />
            </div>
            <div className="bg-white">
              <form
                onSubmit={handleSubmit}
                className="flex w-[500px] mx-auto flex-col h-full items-center rounded-r relative"
                encType="multipart/form-data"
              >
                <h1 className="text-center  font-semibold text-[24px] py-3 text-zinc-800">
                  Create Your Recipe
                </h1>
                <section className="flex flex-col mb-4 justify-between gap-2 items-center">
                  <div className="w-[200px] shadow-md rounded p-2 text-[12px]">
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      onChange={handleChange}
                      className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                    />
                  </div>

                  <button
                    className="p-2 text-white hover:scale-90 duration-300 transition-all w-[200px] text-[14px] rounded bg-zinc-800"
                    onClick={(e) => addIngredients(e)}
                    type="button"
                  >
                    Add ingredient
                  </button>

                  {recipe.ingredients.length === 0 || null || "" ? (
                    ""
                  ) : (
                    <div className="absolute py-2 px-2 flex flex-col items-center justify-center gap-2 top-[103px] rounded-br-2xl rounded-bl-2xl rounded-tr-2xl right-6 bg-zinc-800 w-[120px] overflow-visible">
                      <button
                        onClick={() =>
                          setRecipe({ ...recipe, ingredients: [] })
                        }
                        type="button"
                        className="absolute w-[20px] top-[-8px] right-[-10px] h-[20px] bg-zinc-700 text-zinc-600 rounded-full flex items-center justify-center"
                      >
                        X
                      </button>

                      {recipe.ingredients.map((item, index) => (
                        <input
                          key={index}
                          type="text"
                          name="ingredients"
                          value={item}
                          placeholder="Add recipe"
                          onChange={(e) => handleInputChange(e, index)}
                          className="w-full text-[12px] outline-none border-none bg-zinc-700 px-2 text-zinc-200 rounded"
                        />
                      ))}
                    </div>
                  )}

                  <div className="w-[200px] shadow-md rounded p-2 text-[12px]">
                    <input
                      type="number"
                      placeholder="cooking time"
                      name="cookingTime"
                      onChange={handleChange}
                      className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                    />
                  </div>
                  <div className="w-[200px] shadow-md rounded p-2 text-[12px]">
                    <textarea
                      placeholder="description"
                      name="description"
                      onChange={handleChange}
                      className="w-full h-full text-zinc-800 resize-none placeholder:text-zinc-800 outline-none border-none"
                    />
                  </div>

                  <button
                    className="p-2 text-white hover:scale-90 duration-300 transition-all w-[200px] text-[14px] rounded bg-zinc-800"
                    onClick={(e) => addInstructions(e)}
                    type="button"
                  >
                    Add instructions
                  </button>

                  {recipe.instructions.length === 0 || null || "" ? (
                    ""
                  ) : (
                    <div className="absolute py-2 px-2 flex flex-col items-center justify-center gap-2 top-[259px] rounded-bl-2xl rounded-br-2xl rounded-tl-2xl left-6 bg-zinc-800 w-[120px] overflow-visible">
                      <button
                        onClick={() =>
                          setRecipe({ ...recipe, instructions: [] })
                        }
                        type="button"
                        className="absolute w-[20px] top-[-8px] left-[-10px] h-[20px] bg-zinc-700 text-zinc-600 rounded-full flex items-center justify-center"
                      >
                        X
                      </button>

                      {recipe.instructions.map((item, index) => (
                        <input
                          key={index}
                          type="text"
                          name="instructions"
                          value={item}
                          placeholder="Add instruction"
                          onChange={(e) => handleInstructionsChange(e, index)}
                          className="w-full text-[12px] outline-none border-none bg-zinc-700 px-2 text-zinc-200 rounded"
                        />
                      ))}
                    </div>
                  )}

                  <div className="w-[200px] shadow-md rounded p-2 text-[12px]">
                    <input
                      type="file"
                      accept="image/"
                      placeholder="image"
                      name="image"
                      onChange={handleImageChange}
                      className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                    />
                  </div>
                  <div className="w-[200px] shadow-md rounded p-2 text-[12px]">
                    <input
                      type="text"
                      placeholder="category"
                      name="category"
                      onChange={handleChange}
                      className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                    />
                  </div>
                </section>
                <button
                  type="submit"
                  className="p-2 text-white hover:scale-90 duration-300 transition-all w-[200px] text-[14px] rounded bg-zinc-800"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        )}
      </motion.section>
    </main>
  )
}

export default CreateRecepies
