import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Tour = ({ toggleModal }) => {
  const [heading, setHeading] = useState(`Let's get cooking!`)
  const [instruction, setInstruction] = useState(`Before we fire up our stoves, here are some pointers`)

  const buttonDone = <button onClick={toggleModal}>Done</button>
  const changeInstruction = () => {
    setHeading(`Projects teach you skills!`)
    setInstruction(`Blue recipes are unlocked.
      Green recipes have been completed at least once.
      Locked recipes will unlock once their prerequisites are completed.
    `)
    setButtonType(buttonDone)
  }
  const buttonNext = <button onClick={changeInstruction}>Next</button>
  const [buttonType, setButtonType] = useState(buttonNext)

  return (
    <span>
      <h2>{heading}</h2>
      <h3>{instruction}</h3>
      {buttonType}
      <button className='modal-close' onClick={toggleModal}>skip tutorial</button>
    </span>
  )
}

Tour.propTypes = {
  toggleModal: PropTypes.func,
}

export default Tour
