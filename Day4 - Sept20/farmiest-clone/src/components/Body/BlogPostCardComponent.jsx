import React from 'react'

function BlogPostCardComponent({image, user, title, description, date, category}) {
  return (
    <div  className="w-full bg-white rounded-lg shadow-lg">
      <div className="">
        <img className="w-full object-cover rounded-t-lg" src={image} alt="product image"/>
      </div>
      <div  className="px-3 py-5 flex">
        <div className='vertical-text text-bright-green my-auto'>{date}</div>
        <div className='ms-3'>
            <div className='flex items-center mb-2'>
                <i className='bi bi-person font-bold text-xl text-bright-green'>  </i>
                <p className='text-bright-green'> ADMIN</p>
                <div className='text-white bg-bright-green mx-2 p-1 px-2 rounded-lg'>{category}</div>
            </div>
            <h5  className="text-xl font-semibold">
                {title}
            </h5>
            <div  className="font-thin mt-2.5 mb-5">
                <p>{description}</p>
            </div>
            <div  className="text-bright-green">
                Read More<i className='bi bi-arrow-right'></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCardComponent