import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'

class ShoppingList extends Component {
  state = {
    checked: new Array(this.props.items.direction.length).fill(false),
    numberChecked: 0, // will be a number based on data in firebase
    obtainedAllIngredients: false,
  }

  handleCheckboxChange(index) {
    let newChecked = this.state.checked
    let newNumberChecked = this.state.numberChecked

    newChecked[index] = !this.state.checked[index]
    this.state.checked[index] ? newNumberChecked++ : newNumberChecked--
    let obtained = this.state.checked.length === newNumberChecked ? true : false

    this.setState({
      checked: newChecked,
      numberChecked: newNumberChecked,
      obtainedAllIngredients: obtained,
    })

    if (this.state.checked.length === newNumberChecked) {
      this.setState({ obtainedAllIngredients: true })
    } else {
      this.setState({ obtainedAllIngredients: false })
    }
  }

  render() {
    return (
      <Fragment>
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
      {this.state.obtainedAllIngredients && <button>Now, let's get cooking!</button>}
      </Fragment>
    )
  }
}

ShoppingList.propTypes ={
  items: PropTypes.object,
  // obtainedItems: null,
}

export default ShoppingList;
