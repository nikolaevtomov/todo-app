import { UPDATE_ACTIVE } from 'app/actions'
/*
 * NOT used
 */
const initialState = 6543

export default function (state = initialState, { type, value }) {
  switch (type) {
    case UPDATE_ACTIVE:
      return value

    default:
      return state
  }
}
