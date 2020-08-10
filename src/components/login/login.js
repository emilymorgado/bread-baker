import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import AccountCreation from './accountCreation'


const Login = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  // 0 = initial
  // 1 = login
  // 2 = create account
  // 3 = food info: diet and allergies
  const [activeContent, setActiveContent] = useState(false)

  const toggleModal = () => {
    let newView = !isModalOpen
    setIsModalOpen(newView)
  }

  const changeContent = newContent => {
    // let newContent = !activeContent
    setActiveContent(newContent)
  }

  const initialContent = (
    <span>
      <button className='modal-close' onClick={toggleModal}>X</button>
      <button
        className='button-login'
        onClick={() => changeContent(1)}>
        Login
      </button>
      <button
        className='button-create-account'
        onClick={() => changeContent(2)}>
        Create Account
      </button>
    </span>
  )

  const loginContent = (
    <span>
      <button className='modal-close' onClick={toggleModal}>X</button>
      <div>COMING SOON</div>
    </span>
  )

  const foodInfo = (
    <span>
      <button className='modal-close' onClick={toggleModal}>X</button>
      <div>NEXT UP</div>
    </span>
  )

  // 0 = initial
  // 1 = login
  // 2 = create account
  // 3 = food info: diet and allergies

  return (
    <ReactModal isOpen={isModalOpen}>
      {
        activeContent === 3 ? foodInfo
        : activeContent === 2 ? <AccountCreation changeContent={changeContent} />
        : activeContent === 1 ? loginContent
        : initialContent
      }
    </ReactModal>
  )
}

Login.propTypes = {
  isOpen: PropTypes.bool,
}

export default Login
