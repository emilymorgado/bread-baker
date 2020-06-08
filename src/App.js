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
    activeStatus: null,
    activeStep: null,
  }

  toggleDisplay = () => {
    this.setState({showAll: !this.state.showAll})
  }

  displayDirections = (recipe, status, step) => {
    if (status) {
      this.setState({showMenu: false})
      this.setState({openRecipe: recipe})
      this.setState({activeStatus: status})
      this.setState({activeStep: step})
    } else {
      this.setState({showMenu: true})
      this.setState({openRecipe: {}})
      this.setState({activeStatus: null})
      this.setState({activeStep: null})
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
            status={this.state.activeStatus}
            step={this.state.activeStep}
           />
         }
      </div>
    )
  }
}

export default App;
