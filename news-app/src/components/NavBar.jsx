import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='text-rose-800 p-3 flex justify-between items-center'>
        <div className='mx-3'>
            <Link to='/'><h1 className='font-serif text-6xl italic'><i className='bi bi-newspaper text-7xl mx-3'></i>DailyWire News</h1></Link>
            <p className='italic text-xl font-mono ms-36'>Wired to the World’s News.</p>
        </div>
    </div>
  )
}

export default NavBar