import React from 'react';

const Directions = props => {
  return (
    <div className='directions'>
      <h2>{props.step === 0 ? `Make sure you have:`
        : props.step ? `Next Step:`
        : `In this recipe:`}
      </h2>
      <p>{props.step ?
        props.recipe.directions[props.step].direction :
        props.recipe.description}
      </p>
      <button>Get Started</button>
      <button onClick={()=>{props.displayDirections()}}>
      Home
      </button>
    </div>
  )
}

export default Directions;
