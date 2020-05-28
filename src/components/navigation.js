import React from 'react';

const Navigation = props => {
  return (
    <div>
      <button
        onClick={props.toggleDisplay}
        style={{background: props.showAll ? 'white' : 'blue'}}
      >
        Active
      </button>
      |
      <button
        onClick={props.toggleDisplay}
        style={{background: props.showAll ? 'blue' : 'white'}}
      >
      All
      </button>
    </div>
  )
}

export default Navigation;
