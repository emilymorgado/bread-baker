import React from 'react';

const Directions = props => {
  return (
    <div>
      {props.recipe.description}
      <button>Get Started</button>
      <button
        onClick={()=>{props.displayDirections(null)}}
      >
      Home
      </button>
    </div>
  )
}

export default Directions;
