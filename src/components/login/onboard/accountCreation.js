import React, { useState } from 'react'
import PropTypes from 'prop-types'

import firebase from '../../../firestore'


const AccountCreation = ({ changeContent, receiveUserId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        changeContent(3)
        receiveUserId(docRef.id)
      })
      .catch(function(error) {
        console.error(`Error writing document: ${error}`);
      })
    } else {
      console.log("TODO: add error handling")
    }
  }

  return (
    <span>
      <button className='modal-close' onClick={() => changeContent(0)}>X</button>
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
}

AccountCreation.propTypes = {
  changeContent: PropTypes.func,
  receiveUserId: PropTypes.func,
}

export default AccountCreation
