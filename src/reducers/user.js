
const initialState = {
  data: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}