import React from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, provideUserProfileDocument } from '../../firebase/utils'

import './SignUp.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    const {displayName, email, password, confirmPassword} = this.state
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(email, password)
      provideUserProfileDocument(userAuth, { displayName })
    } catch (error) {
      console.log(error)
    }

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>You don't have an accout?</h2>
        <span className='subtitle'>Sign Up</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='displayName' type='text' value={displayName} onChange={this.handleChange} label='name' />
          <FormInput name='email' type='email' value={email} onChange={this.handleChange} label='email' />
          <FormInput name='password' type='password' value={password} onChange={this.handleChange} label='password' />
          <FormInput name='confirmPassword' type='password' value={confirmPassword} onChange={this.handleChange} label='confirm password' />

          <div className='buttons'>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
