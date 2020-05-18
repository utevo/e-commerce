import React from 'react'

import './FormInput.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-input'>
    <input className='input' onChange={handleChange} {...otherProps} />
    {
      label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} label`}>
          {label}
        </label>)
        : null
    }
  </div>
)

export default FormInput
