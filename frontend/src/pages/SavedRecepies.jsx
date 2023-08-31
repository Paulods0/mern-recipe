import React, { useEffect, useState } from "react"
import data from "../data/recepies"
import Card from "../components/Card"
import { motion } from "framer-motion"
import axios from "axios"
import useGetUserID from "../hooks/useGetUserID"

const SavedRecepies = () => {
  const [recipes, setRecipes] = useState([])
  const [savedRecipes, setSavedRecipes] = useState([])
  const id = useGetUserID()

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/recipe/savedrecipes/${id}`
        )
        // console.log(response.data.savedRecipes)
        setRecipes(response.data.savedRecipes)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSavedRecipes()
  }, [])

  return (
    <main className="w-full">
      <motion.section
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-[1200px] p-3 mx-auto rounded shadow-xl"
      >
        <h1 className="font-bold text-[22px] mb-6 text-center">
          Saved Recepies
        </h1>
        <div className="p-2 w-full place-items-center gap-3 grid grid-cols-3">
          {recipes.map((recipe) => (
            <div
              className="hover:scale-95 transition-all duration-300 mb-2"
              key={recipe}
            >
              <Card data={savedRecipes} showSave={false} />
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  )
}

export default SavedRecepies
