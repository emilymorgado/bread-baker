import React, {Component} from 'react'

import Card from './card'
import data from '../fakeData'

class Menu extends Component {
  state = {
    userUnlocked: new Set(Object.keys(data.user.unlocked)),
  }

  allRecipes = data.recipes.map(recipe => {
    let unlocked = this.state.userUnlocked.has(recipe.id)  //bool
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
  activeRecipes = data.recipes.map(recipe => {
    let unlocked = this.state.userUnlocked.has(recipe.id)  //bool
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

  render() {
    return (
      <ul className='container-cards'>
      {this.props.showAll ?
        this.allRecipes :
        this.activeRecipes}
      </ul>
    )
  }
}

export default Menu;
