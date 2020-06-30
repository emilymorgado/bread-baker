import React, { useState } from 'react'

import Navigation from './components/navigation'
import Menu from './components/menu'
import Directions from './components/directions'
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
       <h1>PROJECTS</h1>
       {showMenu &&
         <Navigation
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
