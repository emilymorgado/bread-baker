import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import AccountCreation from './onboard/accountCreation'
import FoodPreferences from './onboard/foodPreferences'
import Tour from './onboard/tour'
import firebase from '../../firestore'


const Login = ({ isOpen, closeUserNav }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [activeContent, setActiveContent] = useState(false)
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleTextChange = (update, event) => {
    update(event.target.value)
  }

  const toggleModal = () => {
    let newView = !isModalOpen
    setIsModalOpen(newView)
    closeUserNav()
  }

  const logIn = (email, password) => {
    if (!email || !password) {
      console.log('TODO: throw a validation error')
    }

    firebase.collection("users").where("email", "==", email)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          if (doc.data().password === password) {
            const user = { id: doc.data().id, name: doc.data().name}
            setUser(user)
            toggleModal()
          }
        })
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
    });
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
      <ul>
        <li>
          <p>Email:</p>
          <input
            className='textarea-account'
            type='email'
            placeholder={email}
            onChange={(event) => handleTextChange(setEmail, event)}
            value={email}
          />
        </li>
        <li>
          <p>Password:</p>
          <input
            className='textarea-account'
            type='password'
            placeholder={password}
            onChange={(event) => handleTextChange(setPassword, event)}
            value={password}
          />
        </li>
      </ul>
      <button onClick={() => logIn(email, password)}>Log In</button>
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
                                userId={user.id}
                              />
        : activeContent === 2 ? <AccountCreation
                                  changeContent={setActiveContent}
                                  receiveUser={setUser}
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
