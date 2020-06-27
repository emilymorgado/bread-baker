import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

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
            // obtaimedItems={null} must be fetched from firebase
          />
        : <p>{props.recipe.directions[props.step].direction}</p>
      }

      <button onClick={()=>{props.displayDirections()}}>Home</button>
    </div>
  )
}

Directions.propTypes = {
  displayDirections: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
}

export default Directions;
