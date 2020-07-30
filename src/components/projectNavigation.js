import React from 'react';
import PropTypes from 'prop-types'

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

Navigation.propTypes ={
  showAll: PropTypes.bool,
  toggleDisplay: PropTypes.func,
}

export default Navigation;
