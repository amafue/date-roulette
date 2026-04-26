import React from 'react'
import { Link } from 'react-router-dom'
import {PlusIcon, History} from 'lucide-react'

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <h1>Date Roulette</h1>
            <div className='nav-btn'>
                {/* <Link to={"/sessions"} className='link-btn'>
                <span> History</span>
                </Link> */}

                <Link to={"/challenges/create"} className='link-btn'>
                <span> Add Challenge</span>
                </Link>
            </div>
        </nav>

    </header>
  )
}

export default Navbar