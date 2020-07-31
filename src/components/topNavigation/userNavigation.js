import React, { useState } from 'react'
import { RiAccountCircleLine, RiAlertLine, RiGuideLine } from 'react-icons/ri'

import NavItem from './navItem'
import {
  commonAllergies,
  dietOptions,
  testAllergies,
  testDiets
} from './staticData'


const UserNavigation = () => {
  const [showDiets, setShowDiets] = useState(false)
  const [showAllergies, setShowAllergies] = useState(false)
  const [showAccount, setShowAccount] = useState(false)

  const [userDiets, setUserDiets] = useState(testDiets)
  const [allergies, setAllergies] = useState(testAllergies)
  const [userInfo, setUserInfo] = useState({name:'', email:'', password:''})

  const handleItemClick = (navItem, update) => {
    let newStatus = !navItem
    update(newStatus)
  }

  const handleCheckboxChange = (index, category, update) => {
    //this update works in state, but not in the UI
    //it seems setState() isn't triggering an update
    //placement of these components is not ideal
    //TODO: refactor placement and fix bug
    let copy = category
    copy[index] = !category[index]
    update(copy)
  }

  const diets = dietOptions.map((option, index) => {
    return (
      <li
        className='list-shopping'
        key={option}
        onClick={() => handleCheckboxChange(index, userDiets, setUserDiets)}>
        <input
          className='checkbox-shopping'
          name={option}
          type='checkbox'
          checked={userDiets[index]}
          onChange={() => {}}
        />
        <label className='list-shopping'>
          {option}
        </label>
      </li>
    )
  })

  const userAllergies = commonAllergies.map((allergy, index) => {
    return (
      <li
        className='list-shopping'
        key={allergy}
        onClick={() => handleCheckboxChange(index, allergies, setAllergies)}>
        <input
          className='checkbox-shopping'
          name={allergy}
          type='checkbox'
          checked={allergies[index]}
          onChange={() => {}}
        />
        <label className='list-shopping'>
          {allergy}
        </label>
      </li>
    )
  })

  const handleTextChange = (identifier, event) => {
    let copy = userInfo
    let newValue = event.target.value
    copy[identifier] = newValue
    setUserInfo(copy)
  };

  const accountView = (
    <ul>
      <li>
        <p>Name:</p>
        <input
          className='textarea-account'
          type='text'
          placeholder={userInfo.name}
          onChange={(event) => handleTextChange('name', event)}
          value={userInfo.name}
        />
      </li>
      <li>
        <p>Email:</p>
        <input
          className='textarea-account'
          type='email'
          placeholder={userInfo.email}
          onChange={(event) => handleTextChange('email', event)}
          value={userInfo.email}
        />
      </li>
      <li>
        <p>Password:</p>
        <input
          className='textarea-account'
          type='password'
          placeholder={userInfo.password}
          onChange={(event) => handleTextChange('password', event)}
          value={userInfo.password}
        />
      </li>
    </ul>
  )

  const navItems = [
    {
      label: 'Diets',
      icon: (<RiGuideLine className='nav-item-icon' />),
      handleClick: () => handleItemClick(showDiets, setShowDiets),
    },
    {
      label: 'Allergies',
      icon: (<RiAlertLine className='nav-item-icon' />),
      handleClick: () => handleItemClick(showAllergies, setShowAllergies),
    },
    {
      label: 'Account',
      icon: (<RiAccountCircleLine className='nav-item-icon' />),
      handleClick: () => handleItemClick(showAccount, setShowAccount),
    },
  ]

  return (
    <div className='container-user-navigation-open'>
      <ul>
        {navItems.map(navItem => (
          <li
            key={navItem.label}
            onClick={navItem.handleClick}>
            <NavItem
              label={navItem.label}
              icon={navItem.icon}
            />
          </li>
        ))}
      </ul>
      <ul>{showDiets && diets}</ul>
      <ul>{showAllergies && userAllergies}</ul>
      {showAccount && accountView}
    </div>
  )
}

export default UserNavigation
