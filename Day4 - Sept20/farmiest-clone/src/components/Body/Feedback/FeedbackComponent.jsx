import React from 'react'
import FeedbackCardComponent from './FeedbackCardComponent'

function FeedbackComponent() {
  return (
    <div className='bg-bright-green py-20'>
        <h1 className='text-white text-center text-6xl font-bold'>What O<span className='underline underline-offset-[20px]'>ur Cust</span>omers Say</h1>
        <div className='grid grid-cols-3 grid-rows-1 gap-4 mx-16 mt-16'>
          <FeedbackCardComponent image={"avatar.png"} name={"Olivia Dunham"} designation={"FBI Special Agent"}/>
          <FeedbackCardComponent image={"avatar.png"} name={"Olivia Dunham"} designation={"FBI Special Agent"}/>
          <FeedbackCardComponent image={"avatar.png"} name={"Olivia Dunham"} designation={"FBI Special Agent"}/>
        </div>
    </div>
  )
}

export default FeedbackComponent