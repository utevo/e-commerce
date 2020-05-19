import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/utils'

import { ReactComponent as Logo } from '../../assets/star.svg'

import './Header.scss'

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          (
            <Link className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </Link>
          )
          :
          (
            <Link className='option' to='/sign-in'>
              SIGN IN
            </Link>
          )
      }
    </div>
  </div>
)

export default Header;
