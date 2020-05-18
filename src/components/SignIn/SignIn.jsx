import React from 'react';

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import { signInWithGoogle } from '../../firebase/utils'

import './SignIn.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    console.log({ value, name })
    this.setState({ [name]: value })
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
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <CustomButton type="submit" value="submit-form">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
        </form>
      </div>

    )
  }
}

export default SignIn;
