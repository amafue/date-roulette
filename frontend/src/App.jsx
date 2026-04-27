import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SessionDetail from './pages/SessionDetail'
import HistorySession from './pages/HistorySession'
import CreateSession from './pages/CreateSession'
import CreateChallenge from './pages/CreateChallenge'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/sessions/:id" element={<SessionDetail/>}/>
        <Route path="/sessions" element={<HistorySession/>}/>
        <Route path="/sessions/create" element={<CreateSession/>}/>
        <Route path="/challenges/create" element={<CreateChallenge/>}/>
      </Routes>
    </div>
  )
}

export default App
