import React from 'react'
import PropTypes from 'prop-types'
import Navigation from 'app/components/navigation'

export const AppContainer = ({ children }) => {
  return (
    <div className={'container'}>
      <Navigation />
      {children}
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.object
}

export default AppContainer
