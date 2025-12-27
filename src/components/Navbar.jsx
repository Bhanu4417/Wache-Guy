import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Quests from './Quests'
const Navbar = () => {
  return (
    <>
<nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md supports-[backdrop-filter]:bg-black/40">
  <div className="flex items-center justify-between h-9 md:pt-3 pt-4">
  <NavLink
  to="/"
  className="brand flex md:gap-2 gap-1 md:ml-8 ml-4 items-center cursor-pointer"
>
  {({ isActive }) => (
    <>
      <img
        src="/fire.png"
        className={`dark:invert h-auto md:w-7 w-5 transition-opacity duration-200
          ${isActive ? "opacity-100" : "opacity-80"}`}
      />

      <span
        className={`font-bold md:text-[16px] text-[15px] transition-colors duration-200
          ${isActive ? "text-white" : "text-[#b9b9b9] hover:text-white"}`}
      >
        My Quest
      </span>
    </>
  )}
</NavLink>


    <div className="navigate flex items-center md:mr-9 mr-4 md:gap-10 gap-4">
      <NavLink
  to="/blogs"
  className="group flex gap-1 items-center cursor-pointer"
>
  {({ isActive }) => (
    <>
      <img
        src="/radio-signal-svgrepo-com.svg"
        className={`dark:invert w-5 transition-opacity duration-200
          ${isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}
      />

      <span
        className={`text-[14px] transition-colors duration-200
          ${isActive ? "text-white" : "text-[#b9b9b9] group-hover:text-white"}`}
      >
        Blog
      </span>
    </>
  )}
</NavLink>

 <NavLink
  to="/Quests"
  className="group flex gap-1 items-center cursor-pointer"
>
  {({ isActive }) => (
    <>
      <img
        src="/target-784-svgrepo-com.svg"
        className={`dark:invert w-4 transition-opacity duration-200
          ${isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}
      />

      <span
        className={`text-[14px] transition-colors duration-200
          ${isActive ? "text-white" : "text-[#b9b9b9] group-hover:text-white"}`}
      >
        Quest
      </span>
    </>
  )}
</NavLink>

    </div>
  </div>
  <div className="w-full h-px bg-white/10 mt-4" />
</nav>

    
    </>
  )
}

export default Navbar
