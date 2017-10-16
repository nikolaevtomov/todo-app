import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import Sagas from 'app/sagas'
import Reducers from 'app/reducers'

const SagaMiddleware = createSagaMiddleware()

export const Stores = createStore(
  Reducers,
  compose(
    applyMiddleware(
      SagaMiddleware,
      routerMiddleware(browserHistory)
    ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

SagaMiddleware.run(Sagas)
