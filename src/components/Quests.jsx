import React from 'react'
import "./quest.css"
import { Link } from "react-router-dom"
const Quests = () => {
  
  return (
   <>
   <div className="flex flex-col min-h-[calc(100vh-80px)] max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-24">
<div className='flex items-center'><div className="text-white  text-[36px] md:text-[48px] font-bold">My Quest <img className='dark:invert h-auto md:w-17 w-11 mb-1 inline-block' src="/bullseye.svg" /></div></div>
<div className="text-[#949494] md:mt-1 mt-2 text-[20px] md:text-[20px]">A Journey to become better of myself.</div>
<div className="text-[24px] text-[#e6e4e7] font-bold md:mt-6 mt-4">The Process</div>
<div className="text-[#e6e4e7] text-[16px] mt-2">This is a 12-months journey of becoming better day-by-day with some minute changes daily.It's a personal challenge to become better of what I am today by 2027.</div>
<ul className="mt-2 space-y-1 list-disc list-outside pl-5 text-white/90">

  <li>
    <span className="font-bold text-white">
      DSA Mastery:
    </span>{" "}
    Solving at least 2/3 DSA problems daily.
  </li>

  <li>
    <span className="font-bold text-white">
      Income Growth:
    </span>{" "}
    Working on freelance projects to earn consistently by the end of the quest.
  </li>

  <li>
    <span className="font-bold text-white">
      Projects:
    </span>{" "}
    Make all the projects which are in my mind and they come to real-life.
  </li>
</ul>
<div className="text-[24px] text-[#e6e4e7] font-bold md:mt-6 mt-5">Why This ?</div>
<div className="text-[#e6e4e7] text-[16px] mt-2">I was just lying on my bed and a idea to create a website struck my mind so next day I made it and i like the idea to daily post things here what I did.I am a guy just eager to learn and try out new things no matter what the consequences are.</div>
<div className="text-[24px] text-[#e6e4e7] font-bold md:mt-6 mt-5">The Goals</div>
<div className="text-[#e6e4e7] text-[16px] mt-2">So I am currently in a period where I had just f*cked my 1st sem exams not that much but yes.But I spend a great time learning web-development.Not just typical HTML,CSS.</div>
<div className="text-[20px] text-[#e6e4e7] font-bold md:mt-4 mt-3">What I did?</div>
<div className="text-[#e6e4e7] text-[16px] mt-2">So below are the technologies that I learned in 2025 after JEE.</div>
<ul className='mt-4 grid grid-cols-2 gap-3'>
    <li className='dotted-border-glass bg-[#111111] border flex items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className="dark:invert h-auto md:w-13 w-8" src="/html-5-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px] '>HTML</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className="h-auto md:w-13 w-8" src="/css-3-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px]'>CSS</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex gap-2 items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className=" h-auto md:w-13 w-8" src="/javascript-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px]'>Javascript</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex items-center inline-flex py-3 gap-2 px-6 space-x-1 justify-center'>
        <img className="dark:invert h-auto md:w-13 w-8" src="/express-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px]'>Express</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className=" h-auto md:w-13 w-8" src="/mongo-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px]'>Mongo Db</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex gap-2 items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className=" h-auto md:w-13 w-8" src="/postman-icon-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px]'>Postman</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex gap-2 items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className=" h-auto md:w-13 w-8" src="/react-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[17px]'>React</span>
    </li>
     <li className=' bg-[#111111] border dotted-border-glass rounded-[6px] flex items-center inline-flex py-3 px-6 space-x-1 justify-center'>
        <img className="dark:invert h-auto md:w-13 w-8" src="/tailwind-svgrepo-com.svg" />
        <span className='text-white font-bold md:text-[20px] text-[12px] '>Tailwind CSS</span>
    </li>
</ul>
<div className="text-[#e6e4e7] text-[24px] mt-7 font-bold">Technologies I want to learn this year.</div>
<div className="bg-[#111111] border dotted-border-glass rounded-[6px] flex gap-2 items-center inline-flex py-3 px-6 space-x-1 justify-center md:mt-6 mt-3 md:w-80 w-60 mx-auto ">
<img  className="dark:invert h-auto md:w-13 w-8" src="/next-js-svgrepo-com.svg" />
<span className='text-white font-bold md:text-[20px] text-[17px] '>Next Js</span></div>
<div className="text-[#e6e4e7] text-[16px] mt-4 font-bold mx-auto text-center md:mt-4 ">So yes this is the only technology I will learn this year as I will focus more on projects</div>
<div className="text-[26px] text-[#e6e4e7] font-bold md:mt-6 mt-5">Progress Track</div>
<div className="text-[#e6e4e7] text-[16px] mt-2 font-semibold">I will be displaying all the above things in my blog section on daily basis which includes:</div>
<ul className="mt-2 space-y-1 list-disc list-outside pl-5 text-white/90">

  <li>
    <span className="font-bold text-white">
     What I did that whole day.
    </span>
  </li>

  <li>
    <span className="font-bold text-white">
      What new things I learned that day.
    </span>
  </li>

  <li>
    <span className="font-bold text-white">
     How much work I did on that particular prject.
    </span>
  </li>
   <li>
    <span className="font-bold text-white">
     How many DSA problems I solved.
    </span>
   
  </li>
    <li>
     <span className="font-bold text-white">
        What new thing I tried to get myself some work so that I can get some real work.
    </span>
  </li>
</ul>
<Link to="/blogs" className="flex mx-auto md:mt-7">
<button
  className="
  cursor-pointer
  mt-10
  md:mt-10
  px-6
  py-3
    md:px-9 md:py-3
    rounded-[7px]
    bg-[#111111]
    border border-white/15
    text-white md:text-[16px] font-medium
    text-[15px]
    backdrop-blur-md
    shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
    hover:border-white/30
    hover:bg-white
    hover:text-black
    transition-all duration-200
    group
  "
>
  <img className="dark:invert group-hover:invert-0 md:w-[1.7em] md:h-[1.7em] inline-block md:mr-4 transition-all duration-200 h-[1.7em] w-[1.5em] mr-3" src="/telegram-alt.svg"  />
  See My Journey
</button></Link>
   </div>   
  
   </>
  )
}

export default Quests
