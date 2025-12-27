import React from 'react'
import "./Blogs.css"
import { Link } from "react-router-dom"
const Blogs = () => {
  return (
    <>
     <div className="flex flex-col min-h-[calc(100dvh-80px)] max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-24">
     <div className="text-white md:text-[48px] text-[30px] font-bold">Blogs & Journey</div>
     <div className="text-[#949494] md:text-[20px] text-[16px] md:mt-3 mt-1">New day new challenges and a new blog</div>
     <div className="flex items-center md:mt-5 mt-3">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-3 py-1 rounded">
    Let's Do This
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="/muscle-svgrepo-com.svg"
    />
  </div></div>
<div className="h-px w-full bg-white/15 md:mt-7 mt-4" />


 <div className="blogposts grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-10 gap-10 md:mt-7 mt-6 ">
<Link to="/blogs/blog0" className="card   bg-white/5
  backdrop-blur-md
  border border-white/15
  shadow-[0_8px_30px_rgba(0,0,0,0.25)] md:px-4 md:py-3 px-2 py-2 cursor-pointer"><img className='md:w-100 h-auto' src="/Blogs/THE QUEST.svg" />
<div className="flex gap-2">
 <div className="flex items-center md:mt-2 mt-2">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-2 py-1 font-semibold rounded-[5px]">
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="\Blogs\code-svgrepo-com.svg"
    />
    : 0
  </div></div>
   <div className="flex items-center md:mt-2 mt-2">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-2 py-1 font-semibold rounded-[5px]">
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="Blogs/money-with-wings-svgrepo-com.svg"
    />
    : 0
  </div></div>
   <div className="flex items-center md:mt-2 mt-2">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-2 py-1 font-semibold rounded-[5px]">
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="Blogs/chip-processor-svgrepo-com.svg"
    />
    : 0
  </div></div></div>
  <div className="day text-white md:text-[26px] text-[20px] font-medium md:font-bold md:mt-3 mt-2">Day 0 - Starting Things Off</div>
  <div className="date text-[#71717b]">1 January 2026</div>
</Link>

</div>
  </div>
    </>
  )
}

export default Blogs
