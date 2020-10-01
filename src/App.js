import React, { useState } from 'react'

import ProjectNavigation from './components/projectNavigation'
import Menu from './components/menu'
import Directions from './components/directions'
import TopNavigation from './components/topNavigation/topNavigation'
import './App.css'


const App = () => {
  const [showAll, setShowAll] = useState(false)
  const [showMenu, setShowMenu] = useState(true)
  const [openRecipe, setOpenRecipe] = useState({})
  const [activeStep, setActiveStep] = useState(null)

  const toggleDisplay = () => {
    setShowAll(!showAll)
  }

  const displayDirections = (recipe, step) => {
    if (step === false) {
      setShowMenu(true)
    } else {
      setShowMenu(!showMenu)
      setOpenRecipe(recipe)
      setActiveStep(step)
    }
  }

  return (
    <div className="container">
      <TopNavigation />
      <h1>PROJECTS</h1>
      {user && <h2>Welcome {user.name}</h2>}
      {showMenu &&
        <ProjectNavigation
          showAll={showAll}
          toggleDisplay={toggleDisplay}
        />
      }
      {showMenu ?
        <Menu
          showAll={showAll}
          displayDirections={displayDirections}
        /> :
        <Directions
          recipe={openRecipe}
          displayDirections={displayDirections}
          step={Number(activeStep)}
        />
      }
    </div>
  )
}

export default App;
