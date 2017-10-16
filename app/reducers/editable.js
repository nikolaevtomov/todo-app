import { TOGGLE_EDITABLE } from 'app/actions'
/*
 * NOT used
 */
export const initialState = false

export default (state = initialState, { type, value }) => {
  switch (type) {
    case TOGGLE_EDITABLE:
      return !state

    default:
      return state
  }
}
