import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineRight } from "react-icons/ai"
import { CiSaveDown2 } from "react-icons/ci"
import axios from "axios"
import useGetUserID from "../hooks/useGetUserID"

const Card = ({ data, showSave = true }) => {
  const { name, image, category, _id } = data
  const userID = useGetUserID()

  const handleSaveRecipe = async () => {
    await axios.put(`http://localhost:4000/api/recipe/${_id}`, {
      userID,
    })
  }

  return (
    <div className="w-[350px] rounded shadow-md flex bg-white flex-col items-center justify-center">
      <div className="w-full h-[200px] relative">
        {showSave ? (
          <div className="rounded top-2 left-2 absolute p-[2px]  ">
            <button
              onClick={handleSaveRecipe}
              className="text-center text-[18px] hover:scale-[1.1] active:text-zinc-800 transition-all  flex flex-col items-center justify-center text-red-400"
            >
              <CiSaveDown2 />
              <p className="text-[10px]">save</p>
            </button>
          </div>
        ) : (
          ""
        )}
        <img
          className="w-full rounded-t h-full object-cover"
          src={image}
          alt=""
        />
      </div>

      <section className="flex flex-col items-center justify-center w-full p-2">
        <div className="px-2 ">
          <h1 className="text-center font-semibold text-[20px]">{name}</h1>
        </div>
        <div className="flex items-center gap-3 justify-between w-full">
          <div className="mt-2 ml-2">
            <p className="text-[12px]">
              <span className="font-semibold">Category: </span> {category}
            </p>
          </div>

          <Link
            to={`/details/${_id}`}
            className="w-[120px] cursor-pointer hover:w-[160px] flex transition-all duration-400 bg-zinc-800 rounded text-white mt-3 items-center justify-between p-2"
          >
            <p className="text-[13px]">More Details</p>
            <span className="text-[13px]">
              <AiOutlineRight />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Card
