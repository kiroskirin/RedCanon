import { combineReducers } from 'redux';

import { user, post } from './reducers/index';

let rootReducer = (state, action) => {
  state = combineReducers({
    user: user,
    post: post,
  })(state, action);

  return state;
}

export default rootReducer;
