import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import data from "../data/recepies"
import { motion } from "framer-motion"
import axios from "axios"

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/recipe/")
        setRecipes(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllRecipes()
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
        <h1 className="font-bold text-[22px] mb-6 text-center">All Recipes</h1>
        <div className="p-2 w-full place-items-center gap-3 grid grid-cols-3">

          {recipes.map((recipe) => (
            <div
              className="hover:scale-95 transition-all duration-300 mb-2"
              key={recipe._id}
            >
              <Card data={recipe} />
            </div>
          ))}

        </div>
      </motion.section>
    </main>
  )
}

export default AllRecipes
