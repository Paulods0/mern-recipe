import React from "react"
import { RiFundsLine } from "react-icons/ri"
import hero01 from "../assets/images/hero-1.jpg"
import { Link } from "react-router-dom"
import { AiOutlineRight } from "react-icons/ai"
import data from "../data/recepies"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/autoplay"

const Hero = () => {
  
  return (
    <div className="w-[1200px] mx-auto">
      <motion.section
        className="w-full rounded-xl shadow-md mb-12 h-[500px] flex justify-between"
        animate={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: -180 }}
        transition={{ delay: 0.5, ease: "easeOut", duration: 1 }}
      >
        <section className="w-full">
          <Swiper
            modules={[Autoplay]}
            direction="horizontal"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={1}
            className="h-full w-[660px]"
          >
            {data.map((recipe, index) => (
              <SwiperSlide key={index}>
                <img
                  src={recipe.photo}
                  className="w-full rounded-l-xl h-full bg-center object-cover"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/**left */}

        {/**right */}
        <section className="flex flex-col items-center justify-around bg-emerald-50 w-[1000px] rounded-r-xl">
          <div className="mt-8">
            <div className="mx-12">
              <div className="flex items-start mb-3">
                <span>
                  <RiFundsLine className="text-[19px] text-orange-500" />
                </span>
                <span className="text-[15px] font-semibold">
                  Embrace the magic of recipes – where every ingredient is a
                  brushstroke, and every dish is your canvas.
                </span>
              </div>
              <h1 className="font-bold text-[28px] italic text-center">
                Introducing a Culinary Journey: Unveiling the Essence of Flavor
              </h1>
            </div>

            <div className="mx-12 mt-12">
              <p>
                Enter a realm where ingredients harmonize, flavors unite in a
                symphony, and each dish narrates a timeless story. Welcome to
                our culinary haven, where recipes are tradition's whispers,
                creativity's declarations, and invitations to savor an epic
                journey.
              </p>
            </div>
          </div>
          <Link className="self-end mx-12 p-3 shadow-md border bg-white rounded-xl flex gap-2 items-center hover:scale-[1.1] duration-300">
            <Link to={"/allrecipes"} className="text-[14px]">
              View Recipes
            </Link>
            <span>
              <AiOutlineRight />
            </span>
          </Link>
        </section>
      </motion.section>
    </div>
  )
}

export default Hero
