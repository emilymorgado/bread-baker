import React, {Component} from 'react'

import Navigation from './components/navigation'
import Card from './components/card'
import data from './fakeData'
import './App.css'

class App extends Component {
  state = {
    userUnlocked: new Set(data.user.unlocked),
    showAll: false
  }

  toggleDisplay = () => {
    this.setState({showAll: !this.state.showAll})
  }

  allRecipes = data.recipes.map(recipe => {
    let unlocked = this.state.userUnlocked.has(recipe.id)
    if (unlocked) {
      unlocked = data.user.projectStatuses[recipe.id]
    }
    return (
      <li key={recipe.id}>
        <Card
          title={recipe.title}
          unlocked={unlocked}
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
          />
        </li>
      )
    }
    return false
  })


  render() {
    return (
      <div>
         <h1>PROJECTS</h1>
         <Navigation
          showAll={this.state.showAll}
          toggleDisplay={this.toggleDisplay}
         />
         <ul className='container'>
         {this.state.showAll ? this.allRecipes : this.activeRecipes}
         </ul>
      </div>
    )
  }
}

export default App;
