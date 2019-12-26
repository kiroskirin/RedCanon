import { all } from 'redux-saga/effects'

import {
  sagas as initSaga
} from './init/sagas';

export default function* rootSaga() {
  // Import and list all Saga here.
  yield all([
    initSaga(),
  ])
}
