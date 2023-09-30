import React, { useContext, useEffect, useState } from "react"
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
  const [cookiees, setProfileImage] = useCookies(["profileImage"])

  const [active, setActive] = useState(false)
  const navigate = useNavigate()

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

  const closeModalOnClickOutside = () => {
    document.body.addEventListener("click", (e) => {
      if (e.target.id !== "modelBtn" && active) {
        setActive(false)
      }
    })
  }
  closeModalOnClickOutside()

  const handleLogout = () => {
    setCookies("access_token", "")
    setUserName("username", "")

    setProfileImage("profileImage", "")

    window.localStorage.removeItem("userID")
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("profilwImage")
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
                  className="uppercase hover:bg-zinc-800 hover:text-white duration-300 transition-all p-2 rounded text-[12px] mr-4 font-semibold"
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
                <div className="flex gap-3 w-[100px]">
                  <button
                    onClick={() => setActive((prev) => !prev)}
                    className="px-2 w-full cursor-pointer bg-zinc-800 rounded text-white"
                  >
                    <div className="w-full text-center p-2 rounded">
                      <p className="text-center" id="modelBtn">
                        {cookie.username}
                      </p>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Link
                    to="/login"
                    className="font-semibold flex active:bg-zinc-800 active:text-white p-2 rounded items-center text-[13px] gap-2"
                  >
                    Login
                    <CiLogin />
                  </Link>
                  <Link
                    to="/register"
                    className="font-semibold text-white bg-zinc-800 flex active:bg-white active:text-zinc-800 p-2 rounded items-center text-[13px] gap-2"
                  >
                    Register
                    <CiLogin />
                  </Link>
                </div>
              )}
            </div>
            {active && cookies.access_token ? (
              <motion.div
                animate={{ scale: 0.9 }}
                initial={{ scale: 0.2 }}
                transition={{
                  ease: "linear",
                  duration: 0.12,
                }}
                id="modelBtn"
                className="absolute top-[45px] right-[-10px] border border-zinc-300 shadow-2xl z-10 bg-white px-3 py-4 justify-center items-center w-[270px] flex flex-col gap-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
              >
                <section
                  id="modelBtn"
                  className="flex items-center justify-center py-3 gap-3 w-full border-b border-b-gray-400"
                >
                  <h2
                    id="modelBtn"
                    className="text-zinc-800 w-[80px] text-center"
                  >
                    {cookie.username}
                  </h2>
                  <div
                    id="modelBtn"
                    className="w-10 h-10 border border-zinc-800 rounded-full"
                  >
                    <img
                      src={cookiees.profileImage ? cookiees.profileImage : ""}
                      className="w-full h-full rounded-full object-cover"
                      alt="profile-image"
                    />
                  </div>
                </section>
                <Link
                  id="modelBtn"
                  className="mt-2 py-2 text-zinc-800 border-b border-b-gray-400 w-full text-center"
                  to={"/savedrecepies"}
                >
                  Saved Recipes
                </Link>

                <button
                  id="modelBtn"
                  className="text-white mt-4 text-[12px] w-full bg-zinc-800 p-2 rounded  mb-2"
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
