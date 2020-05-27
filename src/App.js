import React from 'react'

import Navigation from './components/navigation'
import Card from './components/card'
import data from './fakeData'
import './App.css'

const recipes = data.recipes.map(recipe =>
  <li>
    <Card
      title={recipe.title}
    />
  </li>
)

function App() {
  return (
    <div>
       <h1>PROJECTS</h1>
       <Navigation />
       <ul className='container'>{recipes}</ul>
    </div>
  );
}

export default App;
