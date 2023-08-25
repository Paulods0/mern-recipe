import React from "react"
import Main from "./Main"
import footerImg from "../assets/images/footer3.jpg"

import { Link } from "react-router-dom"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { FaPinterestP } from "react-icons/fa"
// import { CiLogin } from "react-icons/ci"

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
  {
    path: "/savedrecepies",
    display: "saved recepies",
  },
]

const social_links = [
  {
    icon: <FiFacebook />,
    path: "http://facebook.com",
    color: "text-blue-500",
  },
  {
    icon: <FaPinterestP />,
    path: "http://pinterest.com",
    color: "text-red-400",
  },
  {
    icon: <FiTwitter />,
    path: "http://x.com",
    color: "text-blue-400",
  },
]

const Footer = () => {
  return (
    <div className="relative mt-12 w-full shadow-[2px_0_6px_3px_rgba(0,0,0,0.2)] ">
      {/* <div className="absolute top-0 left-0 bg-black/20 w-full h-full"></div> */}
      <div className="h-[340px] w-[1200px] mx-auto flex items-center justify-around flex-col">
        <div className="w-full mt-8 flex items-center flex-col justify-center p-4  rounded-md">
          <div className="flex gap-[6.5px] text-[20px] italic">
            <h1 className="underline font-bold text-zinc-800">RECREATE</h1>
            <span className=" text-black underline-none">A RECIPE</span>
          </div>
          <p className=" w-full text-black mt-4 p-3 shadow-lg rounded hover:scale-[1.1] duration-300 transition-all">
            Figure out what is in your food! Have you ever looked at a
            commercial food product and wondered how to make it? Not a problem.
            Use this professional technique to recreate a recipe from any
            nutrition label.
          </p>
        </div>

        <div className="w-full mt-6 flex justify-around gap-4 p-4 rounded shadow-lg hover:scale-[1.1] duration-300 transition-all">
          <ul className="flex gap-6">
            {nav_links.map((link, index) => (
              <Link
                key={index}
                className="text-[13px] underline"
                to={link.path}
              >
                {link.display.toUpperCase()}
              </Link>
            ))}
          </ul>

          <ul className="flex gap-6">
            {social_links.map((link, index) => (
              <Link
                key={index}
                className={`${link.color} text-[16px]`}
                to={link.path}
              >
                {link.icon}
              </Link>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 mb-4 ">
          <p className="text-[12px]">
            {" "}
            &copy; {new Date().getFullYear()} Paulo Luguenda. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
