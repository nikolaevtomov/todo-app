import { takeLatest, fork, put } from 'redux-saga/effects'

import { getEntities } from 'app/services/api'
import watchEditEntity from 'app/sagas/edit-entity'

import {
  APP_LOADING_STARTED,
  appLoading,
  appLoadingSucceed,
  appLoadingFailed,
  loadEntities
} from 'app/actions'

export function * initializeAppState () {
  try {
    yield put(appLoading())
    const [ entities ] = yield Promise.all([
      getEntities()
    ])
    console.log('SAGA.index response', entities)
    if (entities) {
      yield put(loadEntities(entities))
      yield put(appLoadingSucceed())
    } else {
      yield put(appLoadingFailed())
    }
  } catch (error) {
    yield put(appLoadingFailed())
  }
}

export function * watchInitializeAppState () {
  yield takeLatest(APP_LOADING_STARTED, initializeAppState)
}

export default function * startForeman () {
  yield fork(watchInitializeAppState)
  yield fork(watchEditEntity)
}
