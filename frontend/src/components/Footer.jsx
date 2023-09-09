import React from "react"

import { Link } from "react-router-dom"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { FaPinterestP } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { GiAngola } from "react-icons/gi"
import { BiSolidCity } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { BsLink45Deg } from "react-icons/bs"

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/allrecipes",
    display: "All recepies",
  },
  {
    path: "/createrecepies",
    display: "Create recepies",
  },
  {
    path: "/savedrecepies",
    display: "Saved recepies",
  },
]

const social_links = [
  {
    icon: <FiFacebook />,
    display: "Facebook",
    path: "http://www.facebook.com",
    color: "text-blue-500",
  },
  {
    icon: <FaPinterestP />,
    display: "Pinterest",
    path: "http://www.pinterest.com",
    color: "text-red-400",
  },
  {
    icon: <FiTwitter />,
    display: "Twitter",
    path: "http://www.x.com",
    color: "text-blue-400",
  },
  {
    icon: <AiFillGithub />,
    display: "Github",
    path: "http://www.github/Paulods0.com",
    color: "text-black",
  },
]

const contacts = [
  {
    Name: "Paulo Luguenda",
    icon: <BsFillPersonFill />,
  },
  {
    Country: "Angola",
    icon: <GiAngola />,
  },
  {
    City: "Luanda",
    icon: <BiSolidCity />,
  },
  {
    Email: "pauloluguenda0@gmail.com",
    icon: <CgMail />,
  },
]

const Footer = () => {
  return (
    <div className="relative mt-12 w-full flex flex-col justify-center items-center py-4 shadow-[2px_0_6px_3px_rgba(0,0,0,0.2)] ">
      <div className="w-[1200px] mx-auto flex items-start justify-around">
        <div className="flex flex-col items-center justify-start">
          <ul>
            <h2 className="font-bold text-[18px]">Infos</h2>
            {contacts.map((contact, index) => (
              <li key={index}>
                <p className="text-gray-400 text-[14px] flex gap-2 items-center">
                  {Object.values(contact).filter(
                    (value) => value === contact.icon
                  )}
                  {Object.keys(contact).filter((key) => key !== "icon")}:{" "}
                  {Object.values(contact).filter(
                    (values) => values !== contact.icon
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[18px]">Menu Links</h2>
          <ul>
            {nav_links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-400 flex items-center text-[14px]"
                >
                  <BsLink45Deg /> {link.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-[18px]">Social Links</h2>
          <ul>
            {social_links.map((link, index) => (
              <li key={index} className="flex gap-4 text-[14px] items-center">
                <Link to={link.path} className={`${link.color}`}>
                  {link.icon}
                </Link>
                <span>{link.display}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 bo w-full text-center">
        <div className="py-2 flex flex-col">
          <p className="text-gray-400">
            Cooking is your canvas; create a masterpiece with every dish. Cook
            with passion, share with love, and savor life's delicious moments.
          </p>
          <p className="text-gray-400 text-[12px] mt-4">
            &copy; 2023 All rights reserved. Developed by Paulo Luguenda with
            love.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
