
const initialState = {
  data: null
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_POST_DATA':
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}