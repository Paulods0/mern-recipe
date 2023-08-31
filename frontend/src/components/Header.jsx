import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { FaPinterestP } from "react-icons/fa"
import { CiLogin } from "react-icons/ci"
import { useCookies } from "react-cookie"

import { motion } from "framer-motion"

import recipe from "../assets/images/recipe.jpg"
import Main from "./Main"
import Search from "./Search"

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"])
  const [cookie, setUserName] = useCookies(["username"])

  const navigate = useNavigate()
  console.log()

  const nav_links = [
    {
      path: "/home",
      display: "home",
    },
    {
      path: "/allrecipes",
      display: "all recepies",
    },
    {
      path: "/createrecepies",
      display: "create recepies",
    },
  ]

  const social_links = [
    {
      icon: <FiFacebook />,
      path: "http://facebook.com",
    },
    {
      icon: <FaPinterestP />,
      path: "http://pinterest.com",
    },
    {
      icon: <FiTwitter />,
      path: "http://x.com",
    },
  ]

  const [active, setActive] = useState(false)

  const handleLogout = () => {
    setCookies("access_token", "")
    setUserName("username", "")
    window.localStorage.removeItem("userID")
    window.localStorage.removeItem("username")
    setActive(false)
    navigate("/login")
  }

  return (
    <Main shadow others={"mb-12"}>
      <div className="w-[1200px] mx-auto flex items-center justify-between ">
        <section className="flex gap-3">
          <div className="mr-7">
            <Link to="/" className="flex items-cente">
              <div className="w-[100px] h-[40px]">
                <img
                  src={recipe}
                  alt="logo"
                  className="w-full object-cover h-full"
                />
              </div>
            </Link>
          </div>

          <ul className="flex items-center">
            {nav_links.map((link, index) => (
              <li key={index}>
                <Link
                  className="uppercase active:text-white active:bg-zinc-800 p-2 rounded text-[12px] mr-4 font-semibold"
                  to={link.path}
                >
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Search />
        <section>
          <div className="relative flex items-center gap-3">
            <div className="border-solid px-2 flex items-center h-10 justify-center border-r-gray-200 border-r-2">
              {/* <h2 className="font-semibold text-[14px] mr-3">Follow Us On</h2> */}
              <ul className="flex items-center gap-2 ml-2 mr-2">
                {social_links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-[14px]">
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {cookies.access_token ? (
                <div className="flex gap-3">
                  <button
                    onClick={() => setActive((prev) => !prev)}
                    className="px-2 cursor-pointer bg-zinc-800 rounded text-white"
                  >
                    <div className="p-2 rounded">
                      <p>{cookie.username}</p>
                    </div>
                  </button>
                </div>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="font-semibold flex active:bg-zinc-800 active:text-white p-2 rounded items-center text-[13px] gap-2"
                  >
                    Login
                    <CiLogin />
                  </Link>
                </div>
              )}
            </div>
            {active && cookies.access_token ? (
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                }}
                className="absolute top-[40px] right-[62px] shadow-2xl z-10 bg-zinc-800 px-3 py-4 justify-center items-center w-[220px] flex flex-col gap-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
              >
                <h2 className="mt-2 py-2 text-white border-b border-b-white w-full text-center">
                  {cookie.username}
                </h2>
                <Link
                  className="mt-2 py-2 text-white border-b border-b-white w-full text-center"
                  to={"/savedrecepies"}
                >
                  Saved Recipes
                </Link>
                {/* <h2 className="text-white border-b border-b-white w-full text-center overflow-x-scroll">
                  {cookies.access_token}
                </h2> */}
                <button
                  className="text-zinc-800 mt-4 text-[12px] w-full bg-white p-2 rounded  mb-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </Main>
  )
}

export default Header
