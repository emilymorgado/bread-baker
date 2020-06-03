import React from 'react';

const Card = props => {
  return (
    <button
      style={{
        background: props.unlocked > 1 ? '#98CE00' : props.unlocked === 1 ? '#6CCFF6' : '#757780'
      }}
      onClick={()=>{props.displayDirections(props.recipe)}}
    >
      {props.title}
    </button>
  )
}

export default Card;
