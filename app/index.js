import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Routes from 'app/routes'
import { Stores } from 'app/stores'
import { appLoadingStarted } from 'app/actions'

import 'app/styles/index.scss'

Stores.dispatch(appLoadingStarted())

module.hot && module.hot.accept()

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('app')
)
