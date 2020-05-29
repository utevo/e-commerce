import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SIgnUp/SignUp'

import './SignInAndSignOnPage.scss'

const SignInAndSignOnPage = () => {
  return (
    <div className='sign-in-and-sign-on'>
      <div className='forms'>
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}

export default SignInAndSignOnPage;
