import React from 'react';
import { RiLock2Line, RiLockUnlockLine, RiTreasureMapLine } from 'react-icons/ri';
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <button
      style={{
        background: props.unlocked > 0 ? '#98CE00'
          : props.unlocked === 0 ? '#6CCFF6'
          : '#757780'
      }}
      onClick={()=>{props.displayDirections(props.recipe, props.unlocked)}}>
      {
        props.unlocked > 0 ? <RiTreasureMapLine />
        : props.unlocked === 0 ? <RiLockUnlockLine />
        : <RiLock2Line />
      }
      {props.title}
    </button>
  )
}

Card.propTypes = {
  displayDirections: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  unlocked: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
}

export default Card;
