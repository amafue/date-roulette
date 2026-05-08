import React from 'react'
import ChallengeRoulette from '../components/ChallengeRoulette'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <ChallengeRoulette />
    </div>
  )
}

export default HomePage