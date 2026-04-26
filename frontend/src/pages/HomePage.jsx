import React from 'react'
import ChallengeRoulette from '../components/ChallengeRoulette'
import Navbar from '../components/Navbar'
import '../css/Navbar.css'
import '../css/ChallengeRoulette.css'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <ChallengeRoulette />
    </div>
  )
}

export default HomePage