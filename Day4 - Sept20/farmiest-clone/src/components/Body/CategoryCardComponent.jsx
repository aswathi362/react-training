import React from 'react'

function CategoryCardComponent({imageUrl, title, offer}) {
  return (
    <div className='relative'>
        <img src={imageUrl} className='object-cover'/>
        <div className='absolute inset-0 flex flex-col justify-center ps-3'>
            <p className='text-bright-green text-sm font-serif italic'>{offer}</p>
            <p className='text-black'>{title}</p>
            <button className='bg-bright-orange rounded-md w-fit px-4 py-1 text-sm my-5 text-white font-bold'>Shop now</button>
        </div>
    </div>
  )
}

export default CategoryCardComponent