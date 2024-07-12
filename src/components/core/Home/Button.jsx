import React from 'react'
import { Link } from 'react-router-dom'

function CTAButton({children , linkto, active}) {
  return (
    <div>
      <Link to={linkto}>

        <div className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${active? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white" :" bg-gradient-to-r from-violet-600 to-indigo-600 text-white"}
        hover:shadow-none hover:scale-95 transition-all duration-200`}>{children}</div>
      </Link>
    </div>
  )
}

export default CTAButton