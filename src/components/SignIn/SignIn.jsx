import React from 'react';

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { auth, signInWithGoogle } from '../../firebase/utils'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>You already have an account?</h2>
        <span className='subtitle'>Sign In</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>

    )
  }
}

export default SignIn;
