import { useState ,useEffect} from 'react'
import Countdown from './Countdown'
import './Home.css'
import { Routes, Route } from "react-router-dom"
import ProgressBar from "./ProgressBar";
import Navbar from './Navbar'
import Quests from './Quests';
import { Link } from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)
const [projectsBuilt, setProjectsBuilt] = useState(0);
const [moneyEarned, setMoneyEarned] = useState(0);
const [questionsSolved, setQuestionsSolved] = useState(0);
  useEffect(() => {
    setProjectsBuilt(0);
  }, []); 
   useEffect(() => {
    setMoneyEarned(0);
  }, []);
   useEffect(() => {
    setQuestionsSolved(0);
  }, []);
  return (
    <>
 <div className="flex flex-col w-full min-h-[calc(100dvh-80px)]
">
<div className="main flex flex-col md:mt-35 mt-19 items-center text-center">
  <div className="main-text text-white md:text-[60px] text-[30px] font-bold md:w-200 ">I'm On A Mission To
Complete <img className="dark:invert w-[1.1em] h-[1.1em] inline-block md:mr-1" src="/fire-16-regular.svg"/>MY QUESTS
Within 12 Months</div>
<div className="text-[#71717b] md:text-[17px] text-[12px] font-medium mt-4 md:mt-6">MISSION - COMPLETE 12 PROJECTS, EARN MY FIRST ₹10,000 & COMPLETE 300 DSA PROBLEMS.</div>
<Countdown />
<div className="grid grid-cols-2 xl:grid-cols-3
 md:gap-7 gap-2 md:mt-9 mt-4">
<div className="bg-[#111111] border border-[#3D3D3D] hover:border-white/30
 md:h-36 md:w-86 rounded-2xl h-28 w-46 group transition-all duration-200
"><div className="name flex md:gap-3 gap-2 justify-center md:mt-5 mt-2"><img src="/code.svg" className='group transition-all duration-200 dark:invert brightness-60 opacity-55 h-auto w-[1.3em] inline-block group-hover:brightness-100 group-hover:opacity-100
' /><div className="group transition-all duration-200 text-[#949494] md:font-bold group-hover:text-white">PROJECTS</div></div>
<div className="px-4 md:mt-8 mt-4">
  <ProgressBar
  value={projectsBuilt}
  total={12}
  leftLabel="PROGRESS"
  rightLabel="BUILT"
/>

</div>
</div>
<div className="bg-[#111111] border border-[#3D3D3D]  md:h-36 md:w-86 rounded-2xl h-28 w-46 group transition-all duration-200 hover:border-white/30"><div className="name flex md:gap-2 gap-1 justify-center mt-2 md:mt-5"><img src="/rupee.svg" className='group transition-all duration-200 dark:invert brightness-60 opacity-55 h-auto w-[1.3em] inline-block group-hover:brightness-100 group-hover:opacity-100' /><div className="group transition-all duration-200 text-[#949494] md:fontfont-bold group-hover:text-white md:font-bold">MONEY</div>
</div>
<div className="px-4 md:mt-8 mt-4">
<ProgressBar
  value={moneyEarned}
  total={10000}
  leftLabel="EARNED"
  rightLabel="INR"
/>


</div>
</div>
<div className="bg-[#111111] border border-[#3D3D3D] hover:border-white/30
 md:h-36 md:w-86 rounded-2xl h-28 w-46 group transition-all duration-200 col-span-2 md:col-span-1 justify-self-center "><div className="name flex gap-2 justify-center mt-2 md:mt-5"><img src="/chip-fill.svg" className='group transition-all duration-200 dark:invert brightness-60 opacity-55 h-auto w-[1.3em] inline-block group-hover:brightness-100 group-hover:opacity-100' /><div className="group transition-all duration-200 text-[#949494] md:font-bold group-hover:text-white">DSA IN C++</div></div>
 <div className="px-4 md:mt-8 mt-4">
 <ProgressBar
  value={questionsSolved}
  total={300}
  leftLabel="PROGRESS"
  rightLabel="QUESTIONS"
/>
</div>
 </div>
</div>
<div className="flex md:gap-5 md:mt-6 gap-3 pb-3">
<Link to="/blogs"
  className="
  cursor-pointer
  mt-10
  md:mt-10
  px-4
  py-3
    md:px-9 md:py-3
    rounded-[7px]
    bg-[#111111]
    border border-white/15
    text-white md:text-[16px] font-medium
    text-[14px]
    backdrop-blur-md
    shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
    hover:border-white/30
    hover:bg-white
    hover:text-black
    transition-all duration-200
    group
  "
>
  <img className="dark:invert group-hover:invert-0 md:w-[1.7em] md:h-[1.7em] inline-block md:mr-4 transition-all duration-200 h-[1.3em] w-[1.3em] mr-1" src="/telegram-alt.svg"  />
  See My Journey
</Link>
<Link to="/quests"
  className="
  cursor-pointer
  mt-10
  md:mt-10
  px-4
  py-3
    md:px-9 md:py-3
    rounded-[7px]
    bg-[#111111]
    border border-white/15
    text-white md:text-[16px] font-medium
    text-[14px]
    backdrop-blur-md
    shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
    hover:border-white/30
    hover:bg-white
    hover:text-black
    transition-all duration-200
    group
  "
>
  <img className="dark:invert group-hover:invert-0 md:w-[1.7em] md:h-[1.7em] inline-block md:mr-4 transition-all duration-200 h-[1.3em] w-[1.3em] mr-1" src="/bullseye.svg"  />
  See My Quest
</Link>
</div>
 </div></div>
    </>
  )
}

export default App
