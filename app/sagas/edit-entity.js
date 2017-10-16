import { takeLatest, call, put, select } from 'redux-saga/effects'
// import { push } from 'react-router-redux'
import { postEditedEntity, postNewEntity } from 'app/services/api'

import {
  EDIT_ENTITY_SUBMIT_BEGIN,
  editEntitySubmitSucceed,
  editEntitySubmitFailed,
  updateEntity
} from 'app/actions'

export default function * watchEditEntity () {
  yield takeLatest(EDIT_ENTITY_SUBMIT_BEGIN, function * watch ({ value }) {
    try {
      const values = yield select(state => state.getIn(['form', `${value}`, 'values']))

      if (values.has('id')) {
        const result = yield call(postEditedEntity, values.get('id'), values)
        console.log('PUT..', result)
        yield put(updateEntity(result))
      } else {
        const result = yield call(postNewEntity, values)
        console.log('POST..', result)
        yield put(updateEntity(result))
      }
      yield put(editEntitySubmitSucceed())
    } catch (error) {
      yield put(editEntitySubmitFailed())
    }
  })
}
