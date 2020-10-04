import React, { Fragment, useState } from 'react'
import { PropTypes } from 'prop-types'


const ShoppingList = ({ items }) => {
  const [checked, setChecked] = useState(new Array(items.direction.length).fill(false))
  const [numberChecked, setNumberChecked] = useState(0)
  const [obtainedAllIngredients, setObtainedAllIngredients] = useState(false)

  const handleCheckboxChange = index => {
    let newChecked = checked
    let newNumberChecked = numberChecked

    newChecked[index] = !checked[index]
    checked[index] ? newNumberChecked++ : newNumberChecked--
    let obtained = checked.length === newNumberChecked ? true : false

    setChecked(newChecked)
    setNumberChecked(newNumberChecked)
    setObtainedAllIngredients(obtained)
  }

  return (
    <Fragment>
    <ul className='container-shopping'>
      {items.direction.map((item, index) => (
        <li
          className='list-shopping'
          key={index}
          onClick={() => handleCheckboxChange(index)}>
          <input
            className='checkbox-shopping'
            name={index}
            type='checkbox'
            checked={checked[index]}
            onChange={() => {}}
          />
          <label className='list-shopping'>
            {item}
          </label>
        </li>
      ))}
    </ul>
    {obtainedAllIngredients && <button>Now, let&apos;s get cooking!</button>}
    </Fragment>
  )
}

ShoppingList.propTypes ={
  items: PropTypes.object,
  // obtainedItems: null,
}

export default ShoppingList;
