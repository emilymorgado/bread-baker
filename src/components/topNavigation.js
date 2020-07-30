import React, { useState } from 'react'
import { RiCake3Line, RiHomeGearLine } from 'react-icons/ri'

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
      <span className='container-user-navigation' onClick={handleUserNavClick}>
        <RiHomeGearLine className='navigation-icon' />
        {showUserNav && <div>component: UserNavigation</div>}
      </span>
      <span className='container-cooking-navigation' onClick={handleCookingNavClick}>
        <RiCake3Line className='navigation-icon' />
        {showCookingNav && <div>component: CookingNavigation</div>}
      </span>
    </div>
  )
}

export default TopNavigation
