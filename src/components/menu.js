import React, {Component} from 'react'

import firebase from '../firestore'
import Card from './card'

class Menu extends Component {
  state = {
    userUnlocked: new Set(),
    // TODO: store in future - activeRecipes: [],
    allRecipes: [],
    user: null,
  }

  componentDidMount() {
    let recipesRef = firebase.collection('recipes')
    recipesRef.get().then(recipes => {
      const allRecipes = []
      recipes.forEach(recipe => {
        allRecipes.push({'id': recipe.id, 'recipe': recipe.data()})
      })
      this.setState({allRecipes: allRecipes})
    })

    let userRef = firebase.collection('users').doc('rCHHc9Pi7u6OYMaEF9ez')
    userRef.get().then(doc => {
      if (!doc.exists) {
        console.warn('No such document!');
      } else {
        this.setState({user: doc.data()})
        this.setState({userUnlocked: new Set(Object.keys(doc.data().unlocked))})
      }
    })
    .catch(err => {
      console.warn('Error getting document', err);
    })
  }

  render() {
    const displayAllRecipes = (this.state.allRecipes).map(recipe => {
      let unlocked = this.state.userUnlocked.has(recipe.id)
      if (unlocked) {
        unlocked = this.state.user.unlocked[recipe.id] //Number for status and step
      }
      return (
        <li key={recipe.id}>
          <Card
            title={recipe.recipe.title}
            unlocked={unlocked}
            displayDirections={this.props.displayDirections}
            recipe={recipe.recipe}
          />
        </li>
      )
    })

    const displayActiveRecipes = this.state.allRecipes.map(recipe => {
      let unlocked = this.state.userUnlocked.has(recipe.id)
      if (unlocked) {
        unlocked = this.state.user.unlocked[recipe.id]
        return (
          <li key={recipe.id}>
            <Card
              title={recipe.recipe.title}
              recipe={recipe.recipe}
              unlocked={unlocked}
              displayDirections={this.props.displayDirections}
            />
          </li>
        )
      }
      return false
    })

    return (
      <ul className='container-cards'>
        {this.props.showAll ?
          displayAllRecipes :
          displayActiveRecipes}
      </ul>
    )
  }
}

export default Menu;
