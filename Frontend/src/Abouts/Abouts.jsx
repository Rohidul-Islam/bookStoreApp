import React from 'react'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Footer from '../Components/Footer'
function Abouts() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen pt-20'>
    <About/>
    </div>
    <Footer/>
    </>
  )
}
export default Abouts;
