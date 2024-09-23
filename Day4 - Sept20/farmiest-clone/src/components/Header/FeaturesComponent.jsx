import React from 'react'

function FeaturesComponent() {
  return (
    <div className='w-[85%] mx-auto bg-white rounded shadow-2xl'>
        <div className='w-full flex flex-row p-5'>
            <div className='flex flex-row '>
                <img src=' feature_1.png'/>
                <div className='my-auto mx-3'>
                    <p className='text-bright-green font-bold text-xl'>Grocery</p>
                    <p className='font-light'>Fresh grocery delivered</p>
                </div>
            </div>
            <div className='flex flex-row'>
                <img src=' feature_2.png'/>
                <div className='my-auto mx-3'>
                    <p className='text-bright-green font-bold text-xl'>Salads</p>
                    <p className='font-light'>Order nutritious salads</p>
                </div>
            </div>
            <div className='flex flex-row '>
                <img src=' feature_3.png'/>
                <div className='my-auto mx-3'>
                    <p className='text-bright-green font-bold text-xl'>Cart Value</p>
                    <p className='font-light'>Review your cart</p>
                </div>
            </div>
            <div className='flex flex-row '>
                <img src=' feature_4.png'/>
                <div className='my-auto mx-3'>
                    <p className='text-bright-green font-bold text-xl'>Grocery</p>
                    <p className='font-light'>Fresh grocery delivered</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesComponent