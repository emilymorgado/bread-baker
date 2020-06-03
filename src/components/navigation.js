import React from 'react';

const Navigation = props => {
  return (
    <div className='nav'>
      <button
        onClick={props.toggleDisplay}
        style={{background: props.showAll ? '#FFFFFC' : '#F5E642'}}>
        Active
      </button>
      <button
        onClick={props.toggleDisplay}
        style={{background: props.showAll ? '#F5E642' : '#FFFFFC'}}>
      All
      </button>
    </div>
  )
}

export default Navigation;
