import React from 'react'

function FeedbackCardComponent({name, designation, image}) {
  return (
    <div className='rounded-lg bg-white'>
        <div className='flex flex-row p-8 justify-between'>
            <div className='basis-3/4'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam.</p>
            </div>
            <div className='basis-1/4'>
                <img src='quote.png'/>
            </div>
        </div>
        <div className='bg-bright-green text-white rounded mx-10 mb-5 flex justify-between p-2'>
            <div>
                <h4 className='font-bold'>{name}</h4>
                <p>{designation}</p>
            </div>
            <div className=''>
                <img src={image}/>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCardComponent