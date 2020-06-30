import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import firebase from '../firestore'
import Card from './card'


const Menu = ({ displayDirections, showAll }) => {
  const [unlockedRecipes, setUnlockedRecipes] = useState(new Set())  //change var name
  const [allRecipes, setAllRecipes] = useState([])
  const [user, setUser] = useState(null)


  useEffect(() => {
    const recipesRef = firebase.collection('recipes')
    recipesRef.get().then(recipes => {
      const allRecipes = []
      recipes.forEach(recipe => {
        allRecipes.push({'id': recipe.id, 'recipe': recipe.data()})
      })
      setAllRecipes(allRecipes)
    })
  }, [])

  useEffect(() => {
    const userRef = firebase.collection('users').doc('rCHHc9Pi7u6OYMaEF9ez')
    userRef.get().then(doc => {
      if (!doc.exists) {
        console.warn('No such document!');
      } else {
        setUser(doc.data())
        setUnlockedRecipes(new Set(Object.keys(doc.data().unlocked)))
      }
    })
    .catch(err => {
      console.warn('Error getting document', err);
    })
  }, [])


    const displayAllRecipes = (allRecipes).map(recipe => {
      let unlocked = unlockedRecipes.has(recipe.id)
      if (unlocked) {
        unlocked = user.unlocked[recipe.id] //Number for status and step
      }
      return (
        <li key={recipe.id}>
          <Card
            title={recipe.recipe.title}
            unlocked={unlocked}
            displayDirections={displayDirections}
            recipe={recipe.recipe}
          />
        </li>
      )
    })

    const displayActiveRecipes = allRecipes.map(recipe => {
      let unlocked = unlockedRecipes.has(recipe.id)
      if (unlocked) {
        unlocked = user.unlocked[recipe.id]
        return (
          <li key={recipe.id}>
            <Card
              title={recipe.recipe.title}
              recipe={recipe.recipe}
              unlocked={unlocked}
              displayDirections={displayDirections}
            />
          </li>
        )
      }
      return false
    })

    return (
      <ul className='container-cards'>
        {showAll ? displayAllRecipes : displayActiveRecipes}
      </ul>
    )
}

Menu.propTypes ={
  displayDirections: PropTypes.func,
  showAll: PropTypes.bool,
}

export default Menu;
