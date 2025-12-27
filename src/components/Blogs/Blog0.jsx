import React from 'react'
import "./blogs.css"
import { Link } from "react-router-dom"
import Progress from './Progress'
const Blog0 = () => {
  return (
  <>
  <div className="flex flex-col min-h-[calc(100dvh-80px)]
 max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-24">
  <div className="text-[#949494] md:mt-1 mt-2 text-[14px] md:text-[16px]">Published on January 1, 2025</div>
<div className="text-white text-[34px] font-bold md:text-[48px] md:mt-3 mt-2">Starting Things Off !</div>
<div className="flex gap-2">
 <div className="flex items-center md:mt-2 mt-2">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-2 py-1 font-semibold rounded-[5px]">
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="/Blogs/code-svgrepo-com.svg"
      loading='lazy'
    />
    : 0
  </div></div>
   <div className="flex items-center md:mt-2 mt-2">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-2 py-1 font-semibold rounded-[5px]">
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="/Blogs/money-with-wings-svgrepo-com.svg"
    />
: 0
  </div></div>
   <div className="flex items-center md:mt-2 mt-2">
  <div className="flex items-center gap-2 text-black bg-white w-fit px-2 py-1 font-semibold rounded-[5px]">
    <img
      className="w-[1.1em] h-[1.1em] md:w-[1.3em] md:h-[1.3em]"
      src="/Blogs/chip-processor-svgrepo-com.svg"
    />
  : 0
  </div></div></div>
<img className='md:mt-6 mt-3' src="/Blogs/THE QUEST.svg" />
<div className="text-white text-[20px] md:mt-3 mt-2">This is the day 0 of my challenge.</div>
<div className="text-[white] md:text-[18px] text-[15px] mt-3">So today I didn't do much it was the starting of my 2nd sem after a 1 month long holiday I came from college about 5pm.Then had a cup of chai and then just got up and started revising c++ did it for about 1:30 hour and then started off working on new projcet just made the navbar today as I was tired and then I justgo to sleep at 1:00 AM.</div>
<div className="md:mt-8 mt-6">
    <Progress
  title="Slept for"
  icon="🌙"
  subtitle="Sleep score"
  startTime="1:00 AM"
  endTime="8:00 AM"
  value={6.0}
  max={8}
  color="bg-purple-500"
/>
</div>
<div className="md:mt-8 mt-6">
<Progress
  title="DSA Practice"
  icon="🧠"
  subtitle="DSA Time (C++)"
  startTime="6:30 PM"
  endTime="8:00 PM"
  value={1.5}
  max={3}
  color="bg-blue-500"
/>

</div>
<div className="md:mt-8 mt-6">
    <Progress
title="Project Work"
  icon="🖥️"
  subtitle="Project Time"
  startTime="9:00 PM"
  endTime="11:30 PM"
  value={2.5}
  max={5}
  color="bg-green-500"
/>
</div>
<div className="md:mt-8 mt-6">
    <Progress
title="Moeny Earned"
  icon="💸"
  subtitle="Time For It"
  startTime="0:00 PM"
  endTime="0:00 PM"
  value={0}
  max={5}
  color="bg-green-500"
/>
</div>
<div className="md:mt-8 mt-6">
<Progress
  title="Instagram"
  icon={
    <img
      src="/Blogs/instagram-1-svgrepo-com.svg"
      alt="Instagram"
      className="w-[1.1em] h-[1.1em] inline-block"
    />
  }
  subtitle="Time For It"
  startTime="0:00 PM"
  endTime="0:00 PM"
  value={0}
  max={5}
/>

</div>
<div className="text-[white] md:text-[15px] text-[15px] mt-9">
    So looking at the progress bar u can see today I didn't do much but consistency is the key.
</div>
<div className="text-[white] md:text-[30px] text-[20px] mt-10">See you guys tomorrow 👋</div>
<Link to="/blogs"
  className="
    inline-flex w-fit
    items-center gap-2
    px-4 py-2
    text-white/80
    rounded-lg

    bg-transparent
    border border-transparent

    transition-all duration-200
    hover:bg-white/8
    hover:text-white
    backdrop-blur-md
    mx-auto
    mt-15
    cursor-pointer
  "
>
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
  <span className="text-sm font-medium">See all Blogs</span>
</Link>



  </div>
 </>
  )
}

export default Blog0
