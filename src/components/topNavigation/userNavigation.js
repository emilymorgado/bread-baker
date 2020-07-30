import React, { useState } from 'react'
import { RiAlertLine, RiGuideLine } from 'react-icons/ri'

import NavItem from './navItem'

const UserNavigation = () => {
  const testDiets = [true, false, false, false, false, false, false, false, true, false, true, false]
  const testAllergies = [false, false, false, false, false, false, false, false, true]
  const [showDiets, setShowDiets] = useState(false)
  const [userDiets, setUserDiets] = useState(testDiets)
  const [showAllergies, setShowAllergies] = useState(false)
  const [userAllergies, setUserAllergies] = useState(testAllergies)

  const handleDietClick = () => {
    let newStatus = !showDiets
    setShowDiets(newStatus)
  }

  const handleDietCheckboxChange = (index) => {
    //this update works, but the UI is not updating
    //it seems setState() isn't triggering an update
    //this is happening with allergies too
    //placement of these components is not ideal
    //TODO: refactor placement and fix this bug
    let dietCopy = userDiets
    dietCopy[index] = !userDiets[index]
    setUserDiets(dietCopy)
  }

  const dietOptions = [
    'vegetarian',
    'vegan',
    'low-fat',
    'low-carbohydrate',
    'paleo',
    'ketogenic',
    'alkaline',
    'gluten-free',
    'low-FODMAP',
    'Mediterranean',
    'MIND',
    'DASH',
  ]

  const diets = dietOptions.map((option, index) => {
    return (
      <li
        className='list-shopping'
        key={option}
        onClick={() => handleDietCheckboxChange(index)}>
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

  const handleAllergyClick = () => {
    let newStatus = !showAllergies
    setShowAllergies(newStatus)
  }

  const handleAllergyCheckboxChange = (index) => {
    let allergyCopy = userAllergies
    allergyCopy[index] = !userAllergies[index]
    setUserAllergies(allergyCopy)
  }

  const commonAllergies = [
    'milk',
    'eggs',
    'tree nuts',
    'peanuts',
    'wheat',
    'soy',
    'shellfish',
    'fish',
    'sesame',
  ]

  const allergies = commonAllergies.map((allergy, index) => {
    return (
      <li
        className='list-shopping'
        key={allergy}
        onClick={() => handleAllergyCheckboxChange(index)}>
        <input
          className='checkbox-shopping'
          name={allergy}
          type='checkbox'
          checked={userAllergies[index]}
          onChange={() => {}}
        />
        <label className='list-shopping'>
          {allergy}
        </label>
      </li>
    )
  })

  const navItems = [
    {
      label: 'Diets',
      icon: (<RiGuideLine className='nav-item-icon' />),
      handleClick: handleDietClick,
    },
    {
      label: 'Allergies',
      icon: (<RiAlertLine className='nav-item-icon' />),
      handleClick: handleAllergyClick,
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
      <ul>{showAllergies && allergies}</ul>
    </div>
  )
}

export default UserNavigation
