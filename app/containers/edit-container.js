import React from 'react'
import { Field } from 'redux-form/immutable'

import Fieldset from 'app/components/fieldset'
import Button from 'app/components/button'

import { required, maxLength15 } from 'app/utils'
import FormHOC from 'app/hoc/form-hoc'

const EditTodoContainer = ({ handleOnSubmit, submitting, pristine, reset }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <h4>Edit Todo</h4>
      <Field
        name={'date'}
        type={'date'}
        component={Fieldset}
        label={'Date'}
      />
      <Field
        validate={[ required, maxLength15 ]}
        name={'description'}
        type={'text'}
        component={Fieldset}
        label={'Description'}
      />
      <Field
        name={'completed'}
        type={'checkbox'}
        component={Fieldset}
        label={'Completed'}
      />
      <div className={'button-group'}>
        <Button type={'submit'} disabled={pristine || submitting} text={'Submit'} />
        <Button type={'button'} disabled={pristine || submitting} text={'Reset'} onClick={reset} />
      </div>
    </form>
  )
}

export default FormHOC(EditTodoContainer, 'Edit-Form', true)
