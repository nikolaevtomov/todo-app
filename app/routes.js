import React from 'react'
import { Provider } from 'react-redux'
import { Map } from 'immutable' // eslint-disable-line
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Stores } from 'app/stores'
import AppContainer from 'app/containers/app-container'
import TodosContainer from 'app/containers/todos-container'
import AddTodoContainer from 'app/containers/add-container'
import EditTodoContainer from 'app/containers/edit-container'

const history = syncHistoryWithStore(browserHistory, Stores, {
  selectLocationState (state) {
    return state.get('routing')
  }
})

export default () => (
  <Provider store={Stores}>
    <Router history={history}>

      <Route path={'/'} component={AppContainer}>

        <IndexRoute component={TodosContainer} />
        <Route path={'todo/add'} component={AddTodoContainer} />
        <Route path={'todo/edit/:id'} component={EditTodoContainer} />
        <Redirect from={'*'} to={'/'} />

      </Route>

    </Router>
  </Provider>
)
