import React, {Component} from 'react'

import Navigation from './components/navigation'
import Menu from './components/menu'
import Direction from './components/direction'
import './App.css'

class App extends Component {
  state = {
    showAll: false,
    showMenu: true,
    openRecipe: {},
  }

  toggleDisplay = () => {
    this.setState({showAll: !this.state.showAll})
  }

  displayDirections = recipe => {
    this.setState({showMenu: !this.state.showMenu})
    this.setState({openRecipe: recipe})
  }

  render() {
    return (
      <div>
         <h1>PROJECTS</h1>
         <Navigation
          showAll={this.state.showAll}
          toggleDisplay={this.toggleDisplay}
         />
         {this.state.showMenu ?
           <Menu
            showAll={this.state.showAll}
            displayDirections={this.displayDirections}
           /> :
           <Direction
            recipe={this.state.openRecipe}
            displayDirections={this.displayDirections}
           />
         }
      </div>
    )
  }
}

export default App;
