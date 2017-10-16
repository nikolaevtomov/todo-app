import { HANDLE_FILTER_BY } from 'app/actions'

const initialState = ''

export default function (state = initialState, { type, value }) {
  switch (type) {
    case HANDLE_FILTER_BY:
      return value

    case '@@router/LOCATION_CHANGE':
      return initialState

    default:
      return state
  }
}
