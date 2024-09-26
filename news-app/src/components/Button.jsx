import React from 'react'
import { Link } from 'react-router-dom'

function Button({onClick, text}) {
  return (
  <button className='text-white bg-rose-800 py-2 px-4 rounded-md shadow-rose-300 shadow-lg' onClick={onClick}>{text}</button>
  )
}

export default Button