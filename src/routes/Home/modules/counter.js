// Action Constants
const INCREMENT_BY_ONE = 'INCREMENT_BY_ONE'
const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE'
const RESET_COUNTER = 'RESET_COUNTER'

// Action Creators
export function incrementByOne() {
  return {
    type: INCREMENT_BY_ONE,
  }
}

export function incrementByFive() {
  return {
    type: INCREMENT_BY_FIVE,
  }
}

export function resetCouter() {
  return {
    type: RESET_COUNTER,
  }
}

// Reducer
export default function counterReducer(state = {number: 0}, action) {
  if (state === 'undefined') {
    state = { number: 0 }
  }
  switch (action.type) {
    case 'INCREMENT_BY_ONE':
      return {
        ...state,
        number: ++state.number
      }
    case 'INCREMENT_BY_FIVE':
      return {
        ...state,
        number: state.number + 5
      }
    case 'RESET_COUNTER':
      return {
        ...state,
        number: 0
      }
    default:
      return state
  }
}