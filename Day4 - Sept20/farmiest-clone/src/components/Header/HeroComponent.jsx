import React from 'react'

function HeroComponent() {
  return (
    <div className='flex flex-row h-[650px]'>
        <div className='text-9xl vertical-text-outline font-bold mx-10 my-auto'>
            Organic
        </div>
        <div className='my-auto'>
            <h1 className='hero-text'>Live on</h1>
            <h1 className='hero-text text-bright-green'>fruits & vegetables</h1>
            <h1 className='hero-text'>to live healthy</h1>
            <h1 className='underline underline-offset-8 font-bold my-10 text-2xl'>100% Healthy & Fresh</h1>
            <button className='border py-3 px-10 bg-black text-white font-bold rounded-full'>Shop Now</button>
        </div>
        <div className='relative flex-grow'>
            <img src='Gradient.png' className='h-[90%] ml-auto'/>
            <img src='Hero.png' className='h-[80%] absolute top-16 right-12'/>
        </div>
    </div>
  )
}

export default HeroComponent