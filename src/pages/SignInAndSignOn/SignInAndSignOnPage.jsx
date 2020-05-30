import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SIgnUp/SignUp'

import './SignInAndSignOnPage.scss'

const SignInAndSignOnPage = () => {
  return (
    <div className='sign-in-and-sign-on'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignOnPage;
