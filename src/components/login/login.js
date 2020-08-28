import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import AccountCreation from './onboard/accountCreation'
import FoodPreferences from './onboard/foodPreferences'
import Tour from './onboard/tour'


const Login = ({ isOpen, closeUserNav }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [activeContent, setActiveContent] = useState(false)
  const [userId, setUserId] = useState('')

  const toggleModal = () => {
    let newView = !isModalOpen
    setIsModalOpen(newView)
    closeUserNav()
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
  // 4 = product tour

  return (
    <ReactModal isOpen={isModalOpen}>
      {
        activeContent === 4 ? <Tour toggleModal={toggleModal} />
        : activeContent === 3 ? <FoodPreferences
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
  closeUserNav: PropTypes.func,
}

export default Login
