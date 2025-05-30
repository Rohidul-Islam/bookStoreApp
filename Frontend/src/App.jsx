import React from 'react'
import Home from './Home/home'
import Genres from './Genres/Genres'
import { Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'

function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={<Genres />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
      </Routes>
  </>
  )
}

export default App
