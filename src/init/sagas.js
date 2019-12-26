import { select, takeEvery } from 'redux-saga/effects';

import { APP_INIT_INITIALIZE } from './actions';

// Starting Saga
export function* initAppSaga() {

  try {
    console.log('SAGA/initAppSaga')

    let user = yield select((state) => state.user)

    console.log(user);

    // May be run multiple times, so check "initialized" flag first.
    // Or restore access_token here

    console.log('SAGA/initAppSaga/DONE');
  } catch (ex) {
    console.log('SAGA/initAppSaga/Exception', ex);
  }
}

export function* sagas() {
  // Import and list all Saga here.
  yield takeEvery(APP_INIT_INITIALIZE, initAppSaga);
}
