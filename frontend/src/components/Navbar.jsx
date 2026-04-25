import React from 'react'
import { Link } from 'react-router-dom'
import {PlusIcon, History} from 'lucide-react'

const Navbar = () => {
  return (
    <header>
        <h1>Date Roulette</h1>
        <Link to={"/sessions"}>
        <History />
        <span>History</span>
        </Link>

        <Link to={"/challenges/create"}>
        <PlusIcon />
        <span>Add Challenge</span>
        </Link>

    </header>
  )
}

export default Navbar