import React from "react"
import data from "../data/recepies.js"
import Card from "../components/Card"
import Hero from "../components/Hero.jsx"
import FilteredRecipes from "../components/FilteredRecipes.jsx"

const Home = () => {
  return (
    <main className="w-full">
      <section className="pds">
        <Hero />
        <FilteredRecipes />
      </section>
    </main>
  )
}

export default Home
