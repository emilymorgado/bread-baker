import React, { Fragment } from 'react'
import ShoppingList from './shoppingList'

const Directions = props => {
  return (
    <div className='directions'>
      <h2>{props.step === 0 ? `In this recipe:`
        : props.step === 1 ? `Make sure you have:`
        : `Next Step:`}
      </h2>
      {
        props.step === 0 ?
          (
            <Fragment>
              <p>{props.recipe.directions[props.step].direction}</p>
              <button>Get Started</button>
            </Fragment>
          )
        : props.step === 1 ?
          <ShoppingList
            items={props.recipe.directions[props.step]}
            obtaimedItems={null}
          />
        : <p>{props.recipe.directions[props.step].direction}</p>
      }

      <button onClick={()=>{props.displayDirections()}}>Home</button>
    </div>
  )
}

export default Directions;
