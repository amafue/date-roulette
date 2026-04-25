import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SessionDetail from './pages/SessionDetail'
import HistorySession from './pages/HistorySession'
import CreateSession from './pages/CreateSession'
import CreateChallenge from './pages/CreateChallenge'
import ChallengeDetail from './pages/ChallengeDetail'
import SignIn from "./pages/SignIn"
import UserProfile from './pages/UserProfile'
import RandomChallenge from './pages/RandomChallenge'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<SignIn/>}/>
        <Route path="/users/:id" element={<UserProfile/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/challenges/random" element={<RandomChallenge/>}/>
        <Route path="/sessions/:id" element={<SessionDetail/>}/>
        <Route path="/sessions" element={<HistorySession/>}/>
        <Route path="/sessions/create" element={<CreateSession/>}/>
        <Route path="/challenges/create" element={<CreateChallenge/>}/>
        <Route path="/challenges/:id" element={<ChallengeDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
