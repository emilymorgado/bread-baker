import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { commonAllergies, dietOptions } from '../topNavigation/staticData'
import firebase from '../../firestore'


const FoodPreferences = ({ changeContent, userId }) => {
  const [diets, setDiets] = useState([])
  const [allergies, setAllergies] = useState([])

  const [selectedDiets, setSelectedDiets] = useState(new Set([]))
  const [selectedAllergies, setSelectedAllergies] = useState(new Set([]))

  const handleCheckboxChange = (
      index,
      option,
      category,
      checkboxUpdate,
      selected,
      selectedUpdate) => {
    let copy = category
    copy[index] = !category[index]
    let selectedElems = selected

    if (selected.has(option)) {
      selectedElems.delete(option)
    } else {
      selectedElems.add(option)
    }

    selectedUpdate(selectedElems)
    checkboxUpdate(copy)
  }

  const addFoodPreferences = () => {
    firebase.collection('users').doc(userId).update({
      diets: Array.from(selectedDiets),
      allergies: Array.from(selectedAllergies)
    })
    .then(function(docRef) {
      console.log(`Document successfully written: ${docRef}`);
    })
    .catch(function(error) {
      console.error(`Error writing document: ${error}`);
    })
    changeContent(0)
  }

  const userDiets = dietOptions.map((option, index) => {
    return (
      <li className='list-shopping' key={option}>
        <input
          className='checkbox-shopping'
          name={option}
          type='checkbox'
          checked={diets[index]}
          onChange={() => {}}
          onClick={() => handleCheckboxChange(
            index,
            option,
            diets,
            setDiets,
            selectedDiets,
            setSelectedDiets
          )}
        />
        <label className='list-shopping'>
          {option}
        </label>
      </li>
    )
  })

  const userAllergies = commonAllergies.map((allergy, index) => {
    return (
      <li className='list-shopping' key={allergy}>
        <input
          className='checkbox-shopping'
          name={allergy}
          type='checkbox'
          checked={allergies[index]}
          onChange={() => {}}
          onClick={() => handleCheckboxChange(
            index,
            allergy,
            allergies,
            setAllergies,
            selectedAllergies,
            setSelectedAllergies,
          )}
        />
        <label className='list-shopping'>
          {allergy}
        </label>
      </li>
    )
  })

  return (
    <span>
      <button className='modal-close' onClick={() => changeContent(0)}>X</button>
      <h1>These recipes need to fit your needs!</h1>
      <h2>Any dietary restrictions?</h2>
      <ul>{userDiets}</ul>
      <h2>How about allergies or intolerances?</h2>
      <ul>{userAllergies}</ul>
      <button onClick={addFoodPreferences}>Update Info</button>
    </span>
  )
}

FoodPreferences.propTypes = {
  changeContent: PropTypes.func,
  userId: PropTypes.string,
}

export default FoodPreferences
