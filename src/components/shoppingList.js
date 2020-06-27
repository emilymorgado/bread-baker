import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class ShoppingList extends Component {
  state = {
    checked: new Array(this.props.items.direction.length).fill(false),
  }

  handleCheckboxChange(index) {
    let newChecked = this.state.checked
    newChecked[index] = !this.state.checked[index]
    this.setState({ checked: newChecked })
  }

  render() {
    return (
      <ul className='container-shopping'>
        {this.props.items.direction.map((item, index) => (
          <li
            className='list-shopping'
            key={index}
            onClick={() => this.handleCheckboxChange(index)}>
            <input
              className='checkbox-shopping'
              name={index}
              type='checkbox'
              checked={this.state.checked[index]}
              onChange={() => {}}
            />
            <label className='list-shopping'>
              {item}
            </label>
          </li>
        ))}
      </ul>
    )
  }
}

ShoppingList.propTypes ={
  items: PropTypes.object,
  // obtainedItems: null,
}

export default ShoppingList;
