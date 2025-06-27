import React from 'react'
import Home from './Home/home'
import Genres from './Genres/Genres'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contacts from './Contacts/Contacts'
import Abouts from './Abouts/Abouts'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Cart from './Components/Cart'

function App() {
    const [authUser , setAuthUser] = useAuth()
    console.log(authUser);
  return (
  <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genre" element={authUser?<Genres /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster/>
  </>
  )
}

export default App
