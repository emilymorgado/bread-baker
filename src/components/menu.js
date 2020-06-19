import React, {Component} from 'react'

import firebase from '../firestore'
import Card from './card'
import data from '../fakeData'

class Menu extends Component {
  state = {
    userUnlocked: new Set(Object.keys(data.user.unlocked)),
    // TODO: store in future
    // activeRecipes: [],
    allRecipes: [],
  }

  componentDidMount() {
    // TODO: default view is active, not all
    firebase.collection('recipes').get().then(recipes => {
      const allRecipes = []
      recipes.forEach(recipe => {
        allRecipes.push({'id': recipe.id, 'recipe': recipe.data()})
      })
      this.setState({ allRecipes: allRecipes})
    })
  }

  render() {
    const displayAllRecipes = (this.state.allRecipes).map(recipe => {
      let unlocked = this.state.userUnlocked.has(recipe.id)
      if (unlocked) {
        unlocked = data.user.unlocked[recipe.id] //Number for status and step
      }
      return (
        <li key={recipe.id}>
          <Card
            title={recipe.title}
            unlocked={unlocked}
            displayDirections={this.props.displayDirections}
            recipe={recipe}
          />
        </li>
      )
    })

    // TODO: query/fetch just the unlocked recipes and iterate over that
    const displayActiveRecipes = this.state.allRecipes.map(recipe => {
      let unlocked = this.state.userUnlocked.has(recipe.id)
      if (unlocked) {
        unlocked = data.user.unlocked[recipe.id] //Number for status and step
        return (
          <li key={recipe.id}>
            <Card
              title={recipe.title}
              recipe={recipe}
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
