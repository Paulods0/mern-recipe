import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext.jsx"
import { motion } from "framer-motion"
import axios from "axios"
import { useCookies } from "react-cookie"

const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [_, setCookies] = useCookies(["access_token"])
  const [cookie, setUserName] = useCookies(["username"])

  const navigate = useNavigate()

  const data = {
    name,
    password,
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        data
      )

      setCookies("access_token", response.data.token)
      window.localStorage.setItem("userID", response.data.userID)
        
      setUserName("username", response.data.username)
      window.localStorage.setItem("username", response.data.username)

      console.log(window.localStorage.getItem("username"))

      navigate("/")
      setName("")
      setPassword("")

      console.log(response)
      console.log(response)
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
          exit={{ x: -150, opacity: 0 }}
          transition={{ type: "spring", stiffness: 75 }}
          className="w-full h-[450px] bg-[] rounded flex items-center justify-center shadow-xl mb-8"
        >
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex w-[300px] items-center flex-col gap-2"
          >
            <h1 className="text-[24px] font-bold text-center mb-12">Login</h1>

            <div className="relative  flex w-full flex-col shadow-md rounded p-3 text-[12px]">
              <input
                className="w-full h-full text-zinc-800 placeholder:text-zinc-800 outline-none border-none"
                type="name"
                placeholder="name"
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
            <button
              type="submit"
              className="p-2 text-white hover:scale-90 duration-300 transition-all w-full text-[14px] rounded bg-zinc-800"
            >
              Login
            </button>
            <div className="flex gap-1">
              <p className="text-[12px]">You don't have an account?</p>
              <Link
                to="/register"
                className="underline uppercase font-bold text-zinc-800 text-[12px]"
              >
                Register now
              </Link>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  )
}

export default Login
