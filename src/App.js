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
    activeStep: null,
  }

  toggleDisplay = () => {
    this.setState({showAll: !this.state.showAll})
  }

  displayDirections = (recipe, step) => {
    if (step === false) {
      this.setState({showMenu: true})
    } else {
      this.setState({showMenu: !this.state.showMenu})
      this.setState({openRecipe: recipe})
      this.setState({activeStep: step})
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
            step={Number(this.state.activeStep)}
           />
         }
      </div>
    )
  }
}

export default App;
