import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { AiOutlineSend } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import data from "../data/recepies"

const Search = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()

  const handleFocus = () => {
    setIsVisible(true)
  }

  const handleSearch = () => {
    const encodedURI = encodeURIComponent(searchText)
    navigate(`/results/${encodedURI}`)
    setSearchText("")
  }

  return (
    <div>
      <div className="w-[280px] p-2 rounded-2xl justify-between bg-zinc-800 flex gap-2 items-center">
        <div>
          <BiSearch className="text-white text-[13px]" />
        </div>
        <input
          onFocus={handleFocus}
          // onBlur={() => setIsVisible(false)}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          value={searchText}
          placeholder="Search for recepies"
          className="w-full h-full bg-transparent mb-1 placeholder:text-[13px] placeholder:font-normal outline-none border-none text-white placeholder:text-white"
        />
        <button
          onClick={() => handleSearch()}
          className={` "hidden" px-2 ${isVisible ? "block" : "hidden"} `}
        >
          <AiOutlineSend className="text-white text-[14px]" />
        </button>
      </div>
    </div>
  )
}

export default Search
