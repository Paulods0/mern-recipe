import React, { useEffect, useState } from "react"
import Card from "./Card"
import { AiOutlineCaretRight, AiFillCaretLeft } from "react-icons/ai"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import axios from "axios"
import Loader from "./Loader"

const FilteredRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/recipe/")
        setRecipes(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
      // console.log(recipes)
    }

    fetchRecipes()
  }, [])
  const showAllRecipes = () => {
    setRecipes(recipes.map((recipe) => recipe))
  }

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredRecipes([...recipes])
    } else {
      setFilteredRecipes(
        recipes.filter((item) => {
          return item.category === category
        })
      )
    }
  }

  return (
    <>
      <section className="w-full mt-8 mb-6">
        <div className="w-[1200px] mx-auto rounded p-2 shadow-md flex justify-around items-center">
          <div className="flex">
            <button
              onClick={() => filterByCategory("All")}
              className=" hover:bg-zinc-800 p-3 hover:text-white rounded transition-all "
            >
              All
            </button>
            <button
              onClick={() => filterByCategory(recipes[0].category)}
              className=" p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              {recipes[0].category}
            </button>
            <button
              onClick={() => filterByCategory(recipes[1].category)}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              {recipes[1].category}
            </button>
            <button
              onClick={() => filterByCategory(recipes[3].category)}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              {recipes[3].category}
            </button>
          </div>

          <div>
            <h1 className="font-bold text-zinc-800 text-[21px]">
              Filter Your Recipes
            </h1>
          </div>

          <div className="flex gap-3">
            <select
              onChange={(e) => {
                filterByCategory(e.target.value)
                console.log(e.target.value)
              }}
              className="py-2 outline-none border-none px-2 bg-zinc-800 rounded text-white flex justify-around"
            >
              <option value="All">All</option>

              {recipes.map((option) => (
                <option
                  value={option.category}
                  className="rounded"
                  key={option._id}
                >
                  {option.category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      {/** Bottom Section */}
      <section className=" mb-12 w-[1200px] mx-auto ">
        <div className="w-full py-3">
          <Swiper
            modules={[Autoplay]}
            direction="horizontal"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="h-full flex py-3 flex-col-reverse"
            spaceBetween={20}
            slidesPerView={3}
          >
            <div className="p-3 w-full h-[60px]">
              <SlideButtons />
            </div>
            {filteredRecipes.map((food) => (
              <SwiperSlide key={food._id}>
                <Card data={food} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default FilteredRecipes

const SlideButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="flex absolute right-0 gap-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 rounded bg-zinc-800 text-white"
      >
        <AiFillCaretLeft className="text-white" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 rounded bg-zinc-800 text-white"
      >
        <AiOutlineCaretRight className="text-white" />
      </button>
    </div>
  )
}
