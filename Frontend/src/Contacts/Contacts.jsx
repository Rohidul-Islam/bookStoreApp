import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
function Contacts() {
    return (
      <>
      <Navbar/>
      <div className='min-h-screen pt-20'>
      <Contact/>
      </div>
      <Footer/>
      </>
    )
  }
  export default Contacts;
