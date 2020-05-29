import React from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

// import { auth, provideUserProfileDocument } from '../../firebase/utils'


import './SignUp.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>You don't have an accout?</h2>
        <span className='subtitle'>Sign Up</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} onChange={this.handleChange} label='email' />
          <FormInput name='password' type='password' value={this.state.password} onChange={this.handleChange} label='password' />

          <div className='buttons'>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
