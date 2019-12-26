import { configureStore } from './config';
import reducer from './reducers';
import sagas from './sagas';

let store = configureStore(reducer, sagas);
export default store;