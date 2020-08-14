import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import AccountCreation from './accountCreation'
import FoodPreferences from './foodPreferences'


const Login = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [activeContent, setActiveContent] = useState(false)
  const [userId, setUserId] = useState('')

  const toggleModal = () => {
    let newView = !isModalOpen
    setIsModalOpen(newView)
  }

  const initialContent = (
    <span>
      <button className='modal-close' onClick={toggleModal}>X</button>
      <button
        className='button-login'
        onClick={() => setActiveContent(1)}>
        Login
      </button>
      <button
        className='button-create-account'
        onClick={() => setActiveContent(2)}>
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

  // 0 = initial
  // 1 = login
  // 2 = create account
  // 3 = food info: diet and allergies

  return (
    <ReactModal isOpen={isModalOpen}>
      {
        activeContent === 3 ? <FoodPreferences
                                changeContent={setActiveContent}
                                userId={userId}
                              />
        : activeContent === 2 ? <AccountCreation
                                  changeContent={setActiveContent}
                                  receiveUserId={setUserId}
                                />
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
