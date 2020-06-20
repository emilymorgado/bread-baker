import React, {Component} from 'react';

class ShoppingList extends Component {
  state = {
    checked: false
  }

  render() {
    return (
      <ul>
        {this.props.items.direction.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type='checkbox'
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              {item}
              </label>
            </li>
        ))}
      </ul>
    )
  }
}

export default ShoppingList;
