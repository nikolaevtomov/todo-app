import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ disabled, text, type, onClick }) => (
  <button
    className={'button'}
    type={type}
    disabled={disabled}
    onClick={onClick}>
    {text}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  text: 'Button',
  type: 'button',
  onClick: () => {}
}

export default Button
