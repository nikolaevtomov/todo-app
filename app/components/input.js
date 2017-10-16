import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ input, type, label }) => (
  <input className={'input'} {...input} type={type} placeholder={label} />
)

Input.propTypes = {
  // input: PropTypes.string,
  // type: PropTypes.string,
  // label: PropTypes.string,
  // handleOnChange: PropTypes.func
}

Input.defaultProps = {
  // input: 'Input',
  // type: 'input',
  // label: 'label'
}

export default Input
