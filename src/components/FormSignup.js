import React, { useState } from 'react'

import '../styles/Form.css'

const FormSignup = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit} noValidate>

        <h1> Get started with us today! 
          Create your account by filling 
          out the form bellow.
        </h1>

        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>Username</label>
          <input id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='enter you username'
            value={values.username}
            onChange={handleChanges}
          />
        </div>

        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='enter you email'
            value={values.email}
            onChange={handleChanges}
          />
        </div>

        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='enter you password'
            value={values.password}
            onChange={handleChanges}
          />
        </div>

        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>Confirm</label>
          <input id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='confirm you password'
            value={values.password2}
            onChange={handleChanges}
          />
        </div>

        <button className='form-input-btn' type='submit'>Sign up</button>

        <span className='form-input-login'>
          Already have an account? Login <a href='https://github.com/Leonamquintao'>HERE</a>
        </span>
      
      </form>
    </div>
  )

  function handleChanges(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(JSON.stringify(values, null,2))
  }

}

export default FormSignup
