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
  // const [isLoading,setIsLoading] = useState(false)

  // const [foods, setFoods] = useState(data)
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/recipe/")
        setRecipes(response.data)
      } catch (error) {
        console.error(error)
      }
      // console.log(recipes)
    }

    fetchRecipes()
  }, [])

  const filterByCategory = (category) => {
    setRecipes(
      recipes.filter((item) => {
        return item.category === category
      })
    )
  }

  return (
    <>
      <section className="w-full mt-8 mb-6">
        
        <div className="w-[1200px] mx-auto rounded p-2 shadow-md flex justify-around items-center">
          <div className="flex">
            <button
              onClick={() => setRecipes(recipes)}
              className=" hover:bg-zinc-800 p-3 hover:text-white rounded transition-all "
            >
              All
            </button>
            <button
              // onClick={() => filterByCategory("Breakfast")}
              className=" p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              Breakfast
            </button>
            <button
              // onClick={() => filterByCategory("Salad")}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              Salad
            </button>
            <button
              // onClick={() => filterByCategory("Soup")}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              Soup
            </button>
          </div>

          <div>
            <h1 className="font-bold text-zinc-800 text-[21px]">
              Filter Your Recipes
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              // onClick={() => filterByCategory("Dessert")}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              Dessert
            </button>
            <button
              // onClick={() => filterByCategory("Tacos")}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              Tacos
            </button>
            <button
              // onClick={() => filterByCategory("Pasta")}
              className="p-3 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-800 rounded"
            >
              Pasta
            </button>
            <select
              onChange={(e) => filterByCategory(e.target.value)}
              className="py-2 outline-none border-none px-2 bg-zinc-800 rounded text-white flex justify-around"
            >
             
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
            {recipes.map((food) => (
              <SwiperSlide key={food._id}>
                <Card data={food}/>
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
