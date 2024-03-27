import React from 'react'
import bg from '../assets/bg.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen max-h-[900px] pt-16 md:pt-20'>
      <div className='h-full w-full bg-image-m md:bg-image-l bg-no-repeat bg-cover bg-center'>
        <div className='flex md:w-full h-full flex-col md:ml-auto md:justify-center mt-6 md:mt-0'>
          <div className='w-full text-center gap-4 md:gap-5 flex flex-col'>
            <p className='font-bold text-7xl text-[#8A2988]'>THE DADDY OF</p>
            <p className='font-bold text-5xl'>RESTAURANT CONSULTANCY</p>
            <div class='relative'>
              <img src={bg} alt='bg' class='w-full mx-auto' />
              <div class='absolute top-1/2 left-1/3  text-center flex flex-col'>
                <p class='text-[#8A2988] text-2xl font-bold bg-white py-2 px-10 mx-auto rounded-full'>The First and Best</p>
                <p class='text-white text-3xl'>Food consultancy company</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero