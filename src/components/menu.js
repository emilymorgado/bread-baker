import React, {Component} from 'react'

import Card from './card'
import data from '../fakeData'

class Menu extends Component {
  state = {
    userUnlocked: new Set(data.user.unlocked),
  }

  allRecipes = data.recipes.map(recipe => {
    let unlocked = this.state.userUnlocked.has(recipe.id)
    let displayDirections = null
    if (unlocked) {
      unlocked = data.user.projectStatuses[recipe.id]
      displayDirections = this.props.displayDirections
    }
    return (
      <li key={recipe.id}>
        <Card
          title={recipe.title}
          unlocked={unlocked}
          displayDirections={displayDirections}
          recipe={recipe}
        />
      </li>
    )
  })

  activeRecipes = data.recipes.map(recipe => {
    let unlocked = this.state.userUnlocked.has(recipe.id)
    if (unlocked) {
      unlocked = data.user.projectStatuses[recipe.id]
      return (
        <li key={recipe.id}>
          <Card
            title={recipe.title}
            unlocked={unlocked}
            recipe={recipe}
            displayDirections={this.props.displayDirections}
          />
        </li>
      )
    }
    return false
  })

  render() {
    return (
      <ul className='container'>
      {this.props.showAll ?
        this.allRecipes :
        this.activeRecipes}
      </ul>
    )
  }
}

export default Menu;
