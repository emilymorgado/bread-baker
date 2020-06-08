import React from 'react';

const Directions = props => {
  return (
    <div className='directions'>
      <p>{props.recipe.description}</p>
      <button>Get Started</button>
      <button
        onClick={()=>{props.displayDirections(null, null, null)}}
      >
      Home
      </button>
    </div>
  )
}

export default Directions;
