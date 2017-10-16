import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form/immutable'

import app from 'app/reducers/app'
import entities from 'app/reducers/entities'
import editable from 'app/reducers/editable'
import active from 'app/reducers/active'
import filter from 'app/reducers/filter'

const rootReducer = combineReducers({
  app,
  routing: routerReducer,
  form: formReducer,
  entities,
  filter,
  /*
   * NOT used
   */
  editable,
  active
})

export default rootReducer
