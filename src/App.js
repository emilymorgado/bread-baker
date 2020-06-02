import React, {Component} from 'react'

import Navigation from './components/navigation'
import Menu from './components/menu'
import data from './fakeData'
import './App.css'

class App extends Component {
  state = {
    userUnlocked: new Set(data.user.unlocked),
    showAll: false,
    showMenu: true,
  }

  toggleDisplay = () => {
    this.setState({showAll: !this.state.showAll})
  }

  displayNextStep = () => {
    this.setState({showMenu: !this.state.showMenu})
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
           <Menu showAll={this.state.showAll} /> :
           <Menu showAll={this.state.showAll} />
         }
      </div>
    )
  }
}

export default App;
