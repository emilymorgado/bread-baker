import React from 'react';

const Card = props => {
  return (
    <button style={{ height: '200px', width: '200px', background: 'magenta'}}>
      {props.title}
    </button>
  )
}

export default Card;


// TODO:
// onClick button functionality
// onClick toggles styles
// onClick toggles view of cards below navbar

// Statuses: locked, unlocked, in progress (active)
