import React, {Component} from 'react';

class ShoppingList extends Component {
  state = {
    checked: false
  }

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
            <label>
              {item}
              <input
                type='checkbox'
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
            </label>
          </li>
        ))}
      </ul>
    )
  }
}

export default ShoppingList;
