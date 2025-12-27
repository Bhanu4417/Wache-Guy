import React from 'react'

const Footer = () => {
  return (
    <footer className="">
  {/* top divider */}
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

  {/* footer content */}
  <div
    className="
      py-6
      text-center
      text-white/50
      text-sm
      backdrop-blur-md
    "
  >
    © 2025–2026 · Created by{" "}
    <span className="text-white/80 font-medium">wache-guy</span>
  </div>
</footer>

  )
}

export default Footer
