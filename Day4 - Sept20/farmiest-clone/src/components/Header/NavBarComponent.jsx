import React from 'react'

function NavBarComponent() {
  return (
    <div className='flex flex-row p-10 justify-between'>
        <div>
            <h1 className='text-4xl font-bold'>Farmiest!</h1>
        </div>

        <div className='flex flex-row mx-20 items-center'>
            <h1 className='px-4 text-bright-green text-2xl font-bold underline underline-offset-8'>Home</h1>
            <h1 className='px-4 text-2xl font-bold'>Store<i className="bi bi-caret-down-fill text-xl"></i></h1>
            <h1 className='px-4 text-2xl font-bold'>Contact</h1>
            <h1 className='px-4 text-2xl font-bold'>About</h1>
        </div>

        <div className='flex flex-row items-center'>
            <div className='flex ms-2'>
                <div className='border-2 border-e-0 border-solid py-1 px-3'>
                    <i className="bi bi-geo-alt-fill text-xl"></i>
                </div>
                <div className='border-2 border-solid py-1 px-3'>
                    <i className="bi bi-search text-xl"></i>
                </div>
            </div>
            <div className='border-2 border-solid py-1 px-3 ms-2'>
                <h1 className='text-xl font-bold'><i className="bi bi-person-fill"></i> Account</h1>
            </div>
            <div className='border-2 border-solid py-1 px-3 ms-2'>
                <h1 className='text-xl font-bold'><i className="bi bi-globe"></i> EN <i className="bi bi-caret-down-fill text-xl"></i></h1>
            </div>
        </div>
    </div>
  )
}

export default NavBarComponent