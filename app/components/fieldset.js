import React from 'react'
import PropTypes from 'prop-types'
// import validate from './validate'
import Input from 'app/components/input'

const Fieldset = ({
  input,
  type,
  label,
  meta: { touched, error, warning }
}) => (
  <div className={'field'}>
    <label className={'label'}>{label}</label>
    <div>
      <Input input={input} type={type} label={label} />
      {touched &&
        ((error && <div className={'error'}>{error}</div>) ||
          (warning && <div className={'warning'}>{warning}</div>))}
    </div>
  </div>
)

Fieldset.propTypes = {
  // classes: PropTypes.string,
  // to: PropTypes.string,
  // name: PropTypes.string
}

Fieldset.defaultProps = {
  // isEditable: false,
  // onClick: () => {}
}

export default Fieldset
