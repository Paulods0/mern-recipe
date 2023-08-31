import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import axios from "axios"
import Loader from "../components/Loader"

const Register = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const data = {
    name,
    password,
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await axios.post("http://localhost:4000/api/auth/register", data)
      setIsLoading(false)
      navigate("/login")
      setName("")
      setPassword("")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className="w-full">
      <section className="w-[500px] mx-auto">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 75 }}
          className="w-full h-[450px] rounded flex items-center justify-center relative shadow-xl mb-8"
        >
          <form
            onSubmit={(e) => handleRegister(e)}
            className="flex w-[300px] items-center flex-col gap-2"
          >
            <h1 className="text-[24px] font-bold text-center mb-12">
              Register
            </h1>
            <div className="relative  flex w-full flex-col shadow-md rounded p-3 text-[12px]">
              <input
                className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                type="file"
              />
            </div>
            <div className="relative  flex w-full flex-col shadow-md rounded p-3 text-[12px]">
              <input
                className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative  flex w-full flex-col shadow-md rounded p-3 text-[12px]">
              <input
                className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="p-2 text-white hover:scale-90 duration-300 transition-all w-full text-[14px] rounded bg-zinc-800">
              Register
            </button>
            <div className="flex gap-1">
              <p className="text-[12px]">Already have an account?</p>
              <Link
                to="/login"
                className="underline uppercase font-bold text-zinc-800 text-[12px]"
              >
                Login in
              </Link>
            </div>
          </form>
          {isLoading ? (
            <div className="absolute flex items-center justify-center w-full h-full backdrop-blur-sm top-0 left-0 ">
              <Loader color="black" />
            </div>
          ) : (
            ""
          )}
        </motion.div>
      </section>
    </main>
  )
}

export default Register
