import React from 'react'
import ProductCardComponent from './ProductCardComponent'

function ProductsComponent() {
  return (
    <div className='my-20'>
        <h1 className='text-6xl font-bold text-center mb-20'>Fresh<span className='custom-underline underline underline-offset-[20px]'> Organic</span> Products</h1>
        <div className='flex flex-row justify-center items-center'>
            <div className='mx-5'>
                <img src='productBanner.png' className='object-cover'/>
            </div>
            <div className='mx-5 grid grid-cols-2 gap-4'>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
                <ProductCardComponent image={"chips.png"} title={"Chips"} price={"10"}/>
            </div>
        </div>
    </div>
  )
}

export default ProductsComponent