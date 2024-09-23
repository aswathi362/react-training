import React from 'react'
import CategoryCardComponent from './CategoryCardComponent'
import ProductsComponent from './Products/ProductsComponent'
import MenuComponent from './Menu/MenuComponent'
import FeedbackComponent from './Feedback/FeedbackComponent'
import BlogComponent from './BlogComponent'

function BodyComponent() {
  return (
    <div className='mt-28'>
        <div className='flex flex-row justify-evenly'>
            <CategoryCardComponent imageUrl={"category_card1.png"} title={"Vegetables"} offer={"Organically Produced"}/>
            <CategoryCardComponent imageUrl={"category_card2.png"} title={"Vegetables"} offer={"Organically Produced"}/>
            <CategoryCardComponent imageUrl={"category_card3.png"} title={"Vegetables"} offer={"Organically Produced"}/>
        </div>
        <MenuComponent/>
        <div className='grid grid-rows-1 grid-cols-1 bg-image-banner h-96'>
            <div className='text-center my-auto'>
                <h1 className='font-bold text-white text-center text-6xl'>
                Every<span className='underline underline-offset-[20px]'>day Fres</span>h & Clean<br/>
                </h1>
                <button className='bg-bright-orange rounded-full p-3 ps-4 text-white text-6xl my-10'><i className="bi bi-play-fill"></i></button>
            </div>
        </div>
        <ProductsComponent/>
        <FeedbackComponent/>
        <BlogComponent/>
    </div>
  )
}

export default BodyComponent