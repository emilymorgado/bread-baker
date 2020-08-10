import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import firebase from '../../firestore'


const Login = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const [activeContent, setActiveContent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggleModal = () => {
    let newView = !isModalOpen
    setIsModalOpen(newView)
  }

  const changeContent = () => {
    let newContent = !activeContent
    setActiveContent(newContent)
  }

  const initialContent = (
    <span>
      <button className='modal-close' onClick={toggleModal}>X</button>
      <button
        className='button-login'
        onClick={changeContent}>
        Login
      </button>
      <button
        className='button-create-account'
        onClick={changeContent}>
        Create Account
      </button>
    </span>
  )

  const handleTextChange = (update, event) => {
    update(event.target.value)
  };

  const createAccount = () => {
    if (name && email && password) {
      firebase.collection('users').add({
        name: name,
        email: email,
        password: password
      })
      .then(function(docRef) {
        console.log(`Document successfully written: ${docRef}`);
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch(function(error) {
        console.error(`Error writing document: ${error}`);
      })
    } else {
      console.log("TODO: add error handling")
    }
  }

  const accountCreateContent = (
    <span>
      <button className='modal-close' onClick={toggleModal}>X</button>
      <ul>
        <li>
          <p>Name:</p>
          <input
            className='textarea-account'
            type='text'
            placeholder={name}
            onChange={(event) => handleTextChange(setName, event)}
            value={name}
          />
        </li>
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
      <button onClick={createAccount}>Create Account!</button>
    </span>
  )

  return (
    <ReactModal isOpen={isModalOpen}>
      {activeContent ? accountCreateContent : initialContent}
    </ReactModal>
  )
}

Login.propTypes = {
  isOpen: PropTypes.bool,
}

export default Login
