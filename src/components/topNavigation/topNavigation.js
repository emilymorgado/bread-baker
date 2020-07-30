import React, { useState } from 'react'
import { RiCake3Line, RiHomeGearLine } from 'react-icons/ri'

import UserNavigation from './userNavigation'


const TopNavigation = () => {
  const [showUserNav, setShowUserNav] = useState(false)
  const [showCookingNav, setShowCookingNav] = useState(false)

  const handleUserNavClick = () => {
    let newStatus = !showUserNav
    setShowUserNav(newStatus)
  }

  const handleCookingNavClick = () => {
    let newStatus = !showCookingNav
    setShowCookingNav(newStatus)
  }

  return (
    <div className='container-top-navigation'>
      <span className='container-user-navigation'>
        <RiHomeGearLine className='navigation-icon' onClick={handleUserNavClick} />
        {showUserNav && <UserNavigation />}
      </span>
      <span className='container-cooking-navigation'>
        <RiCake3Line className='navigation-icon' onClick={handleCookingNavClick} />
        {showCookingNav && <div>component: CookingNavigation</div>}
      </span>
    </div>
  )
}

export default TopNavigation
