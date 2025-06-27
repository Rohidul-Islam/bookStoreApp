import React from 'react'
import Navbar from '../Components/Navbar'
import Genre from '../Components/Genre'
import Footer from '../Components/Footer'
function Genres() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen pt-20'>
    <Genre/>
    </div>
    <Footer/>
    </>
  )
}
export default Genres;
