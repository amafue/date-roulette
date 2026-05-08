import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon, HistoryIcon, LayoutList } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-[#213C51] text-[#EEEEEE] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-tight">
          Date <span className="text-[#DDAED3]">Roulette</span>
        </h1>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          
          <Link to="/sessions" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#6594B1] transition-colors duration-200 text-sm font-medium">
            <HistoryIcon size={16} />
            <span className=" md:inline">History</span>
          </Link>

          <Link to="/challenges" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#6594B1] transition-colors duration-200 text-sm font-medium">
            <LayoutList size={16} />
            <span className=" md:inline">Challenges</span>
          </Link>

          {/* Action Links */}
          <Link to="/sessions/create" className="flex items-center gap-2 px-4 py-2 bg-[#DDAED3] text-[#213C51] rounded-full hover:bg-[#EEEEEE] transition-all duration-200 text-sm font-bold shadow-sm">
            <PlusIcon size={16} />
            <span>Session</span>
          </Link>

          <Link to="/challenges/create" className="flex items-center gap-2 px-4 py-2 border border-[#DDAED3] text-[#DDAED3] rounded-full hover:bg-[#EEEEEE] transition-all duration-200 text-sm font-bold">
            <PlusIcon size={16} />
            <span>Challenge</span>
          </Link>

        </div>
      </nav>
    </header>
  )
}

export default Navbar