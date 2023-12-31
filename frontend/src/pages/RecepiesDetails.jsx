import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BsTrash3 } from "react-icons/bs"
import { TbEdit } from "react-icons/tb"

const RecepiesDetails = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})
  const navigate = useNavigate()

  const {
    name,
    image,
    ingredients,
    cookingTime,
    description,
    instructions,
    category,
  } = recipe

  useEffect(() => {
    const getSingleRecipe = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/recipe/single/${id}`
      )
      setRecipe(response.data)
    }
    getSingleRecipe()
  }, [id])

  const handleEdit = async () => {}
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:4000/api/recipe/${id}`)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <main className="w-full">
      <motion.section
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 65 }}
        className="w-[1200px] h-[650px] shadow-2xl rounded mx-auto flex flex-row justify-between"
      >
        {/* {/**left */}
        <div className="flex flex-row w-[1200px]">
          <section className=" w-[850px] h-full rounded-l">
            <img
              src={image || null}
              alt={name}
              className="w-full h-full rounded-l bg-cover"
            />
          </section>
          {/**right */}
          <section className="flex flex-col w-[800px] rounded-r items-center">
            <div className="w-full relative h-[calc(520px/3)] flex justify-center items-center flex-col bg-zinc-800 rounded-tr">
              <div className="absolute top-4 right-8 flex gap-4">
                <button
                  onClick={handleEdit}
                  className="text-white flex items-center gap-2  duration-200 transition-all hover:scale-90 bg-emerald-400 p-2 rounded-xl"
                >
                  <span>Edit</span>
                  <TbEdit className="text-[17px]" />
                </button>

                <button
                  onClick={handleDelete}
                  className="text-white flex items-center gap-2 duration-200 transition-all hover:scale-90 bg-red-700 p-2 rounded-xl"
                >
                  <span>Delete</span>
                  <BsTrash3 className="text-[17px]" />
                </button>
              </div>
              <div className="">
                <h1 className="text-[24px] font-bold text-white p-3">{name}</h1>
              </div>
              <div className="flex flex-row items-center ml-3 gap-4">
                <div className="flex gap-2">
                  <p className="text-emerald-400">TIME: </p>
                  <span className="text-white">{cookingTime}</span>
                </div>
                <div className="flex gap-2">
                  <p className="text-emerald-400">CATEGORY: </p>
                  <span className="text-white">{category}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white">{description} </p>
              </div>
            </div>
            <div className="py-3 w-full flex  justify-around">
              <div className="px-6">
                <h1 className="mb-6 font-bold text-[24px] text-center">
                  INGREDIENTS
                </h1>
                <ul className="w-[320px] p-2 rounded shadow-md">
                  {ingredients?.map((ingredient, index) => (
                    <li
                      className="hover:shadow-md hover:bg-zinc-800 hover:text-white w-full p-2 rounded-xl text-[14px] mb-2"
                      key={index}
                    >
                      &gt; {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-full w-[1px] bg-zinc-200"></div>
              <div className="px-8">
                <h1 className="mb-4 font-bold text-[24px] text-center">
                  INSTRUCTIONS
                </h1>
                <ul className="w-[320px] p-2 rounded shadow-md  overflow-y-scroll">
                  {instructions?.map((instruction, index) => (
                    <li
                      className="hover:shadow-md hover:bg-zinc-800 hover:text-white w-full p-2 rounded-xl text-[14px] mb-2"
                      key={index}
                    >
                      &gt; {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
    </main>
  )
}

export default RecepiesDetails
