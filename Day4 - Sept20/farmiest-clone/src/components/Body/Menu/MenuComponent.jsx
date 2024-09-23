import React from 'react'
import MenuCardComponent from './MenuCardComponent'

function MenuComponent() {
  return (
    <div className='my-20'>
        <h1 className='text-6xl font-bold text-center'>New <span className='custom-underline underline underline-offset-[20px]'>Organic</span> Add-ons</h1>
        <div className='flex justify-center my-16'> 
            <button className='mx-5 bg-bright-green text-white rounded-md py-2 px-10 shadow-xl'>Breakfast</button>
            <button className='mx-5 rounded-md py-2 px-10'>Fruits</button>
            <button className='mx-5 rounded-md py-2 px-10'>Salad</button>
        </div>
        <div className='grid grid-cols-4 gap-4 justify-center px-20'>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
            <MenuCardComponent image={"chips.png"} title={"Chips"} price={"10.00"} category={"Breakfast"}/>
        </div>
    </div>
  )
}

export default MenuComponent