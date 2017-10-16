import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form/immutable'
import moment from 'moment'

import { isAppLoaded, getEntityById } from 'app/selectors'
import { editEntitySubmitBegin } from 'app/actions'

export function FormHOC (ComposedComponent, formName, initialise) {
  class FormHOCcomponent extends React.Component {
    constructor (props) {
      super(props)

      this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnSubmit () {
      this.props.submitEntity(formName)
    }

    render () {
      return (
        <ComposedComponent
          {...this.props}
          handleOnSubmit={this.props.handleSubmit(this.handleOnSubmit)}
        />
      )
    }
  }

  FormHOCcomponent.propTypes = {
    ComposedComponent: PropTypes.func,
    formName: PropTypes.string,
    initialise: PropTypes.bool
  }

  const mapStateToProps = (state, props) => ({
    form: formName,
    enableReinitialize: true,
    initialValues: (isAppLoaded(state) && initialise) ? {
      id: getEntityById(state, props).get('id'),
      date: moment(getEntityById(state, props).get('date')).format('Y-MM-DD'),
      description: getEntityById(state, props).get('description'),
      completed: getEntityById(state, props).get('completed')
    } : {}
  })

  const mapDispatchToProps = {
    submitEntity: editEntitySubmitBegin
  }

  const FormHOCcomponentForm = reduxForm()(FormHOCcomponent)

  return connect(mapStateToProps, mapDispatchToProps)(FormHOCcomponentForm)
}

export default FormHOC
