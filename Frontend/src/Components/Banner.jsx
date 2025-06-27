import React from 'react'
import video from '../../src/assets/Banner.mp4'

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2 w-full">
          <div className="space-y-4">
            <h1 className="font-jaini text-2xl font-bold">किताबो का संसार</h1>
            <p className="text-gray-500">A ode to the traditional Sanskrit term for library,
            <br />
              reimagined for a digital bookstore with a touch of heritage.
            </p>
          </div>
          
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 hidden lg:flex">
          <video 
            src={video} 
            autoPlay 
            muted 
            className='w-full h-[400px] object-cover rounded-lg' 
          />
        </div>
      </div>
    </>
  )
}

export default Banner;
