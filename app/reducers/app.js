import Immutable from 'immutable'

import {
  APP_LOADING,
  APP_LOADING_SUCCEED,
  APP_LOADING_FAILED
} from 'app/actions'

export const initialState = new Immutable.Map({
  loading: false,
  failed: false
})

export default function (state = initialState, { type }) {
  switch (type) {
    case APP_LOADING:
      return state.set('loading', true)

    case APP_LOADING_SUCCEED:
      return state.set('loading', false)

    case APP_LOADING_FAILED:
      return state.merge({
        loading: false,
        failed: true
      })

    default:
      return state
  }
};
