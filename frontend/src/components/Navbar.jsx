import React from 'react'
import { Link } from 'react-router-dom'
import {PlusIcon, History, HistoryIcon} from 'lucide-react'

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <h1>Date Roulette</h1>
            <div className='nav-btn'>
                <Link to={"/sessions"} className='link-btn'>
                  <HistoryIcon size={12}/>
                  <span> History</span>
                </Link>

                <Link to={"/sessions/create"} className='link-btn'>
                  <PlusIcon size={12}/>
                  <span>Add Session</span>
                </Link>

                <Link to={"/challenges/create"} className='link-btn'>
                  <PlusIcon size={12}/>
                  <span> Add Challenge</span>
                </Link>
            </div>
        </nav>

    </header>
  )
}

export default Navbar