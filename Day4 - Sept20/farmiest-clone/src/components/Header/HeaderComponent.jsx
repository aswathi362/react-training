import React from 'react'
import NavBarComponent from './NavBarComponent'
import HeroComponent from './HeroComponent'
import FeaturesComponent from './FeaturesComponent'

function HeaderComponent() {
  return (
    <div className='bg-gradient-to-r from-pale-orange to-pale-green'>
        <NavBarComponent/>
        <HeroComponent/>
    </div>
  )
}

export default HeaderComponent