import React, {Component} from 'react'

import Navigation from './components/navigation'
import Menu from './components/menu'
import Directions from './components/directions'
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

  displayDirections = (recipe, status, step) => {
    if (status) {
      this.setState({showMenu: false})
      this.setState({openRecipe: recipe})
    } else {
      this.setState({showMenu: true})
      this.setState({openRecipe: {}})
    }
  }

  render() {
    return (
      <div className="container">
         <h1>PROJECTS</h1>
         {this.state.showMenu &&
           <Navigation
            showAll={this.state.showAll}
            toggleDisplay={this.toggleDisplay}
           />
         }
         {this.state.showMenu ?
           <Menu
            showAll={this.state.showAll}
            displayDirections={this.displayDirections}
           /> :
           <Directions
            recipe={this.state.openRecipe}
            displayDirections={this.displayDirections}
           />
         }
      </div>
    )
  }
}

export default App;
