import React from 'react';

const Card = props => {
  return (
    <button
      style={{
        height: '200px',
        width: '200px',
        background: props.unlocked && props.unlocked > 1 ? 'magenta' : props.unlocked === 1 ? 'green' : 'cyan'
      }}
    >
      {props.title}
    </button>
  )
}

export default Card;

// TODO:
// onClick button functionality
