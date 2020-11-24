import React, { useState } from 'react'
import FormSignup from '../components/FormSignup'
import FormSuccess from '../components/FormSuccess'

import '../styles/Form.css'

const Form = () => {

  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <div className='form-container'>
        <span className='close-btn' onClick={submitRequest}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='robot.svg' alt='spaceship' />
        </div>
        { !submitted ?
          <FormSignup submitForm={submitRequest} /> :
          <FormSuccess />
        }
      </div>
    </>
  )

  function submitRequest() {
    setSubmitted(!submitted)
  }
}

export default Form
