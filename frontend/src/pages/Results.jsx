import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import data from "../data/recepies"
import { Swiper, SwiperSlide } from "swiper/react"
import Card from "../components/Card"
import "swiper/css"
import { motion } from "framer-motion"
import axios from "axios"
import { useLocation } from "react-router-dom"
import ErrorCard from "../components/ErrorCard"

const Results = () => {
  // const searchParams = new URLSearchParams(location.search)
  // const name = searchParams.get("nome")
  // const { nome } = useParams()
  // const location = useLocation()

  const [searched, setSearched] = useState([])
  const { nome } = useParams()

  useEffect(() => {
    const fetchByName = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/recipe/${nome}`
        )
        console.log(response.data.recipes)
        setSearched(response.data.recipes)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(searched)
    fetchByName()
  }, [nome])

  return (
    <section className="w-[1200px] mx-auto">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full p-3 rounded shadow-xl h-[420px]"
      >
        <div className="flex gap-2">
          <h1 className="font-bold mb-12">Results for:</h1>
          <span>{nome.toLowerCase()}</span>
        </div>
        <div className="w-full h-full">
          <Swiper slidesPerView={3} direction="horizontal" spaceBetween={1}>
            {searched.length === 0 ? (
              <div className="w-full py-4 h-full flex items-center justify-center text-center">
                <ErrorCard />
              </div>
            ) : (
              searched.map((recipe, index) => (
                <SwiperSlide className="p-3" key={index}>
                  <Card data={recipe} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </motion.div>
    </section>
  )
}

export default Results
