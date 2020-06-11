import React from 'react';

const Directions = props => {
  return (
    <div className='directions'>
      <h2>{props.step === 0 ? `In this recipe:`
        : props.step === 1 ? `Make sure you have:`
        : `Next Step:`}
      </h2>
      <p>{props.step === 1 ? "STEP ONE" : props.recipe.directions[props.step].direction}
      </p>
      <button>Get Started</button>
      <button onClick={()=>{props.displayDirections()}}>
      Home
      </button>
    </div>
  )
}

export default Directions;
