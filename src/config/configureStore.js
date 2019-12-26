import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(reducer, sagas) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = compose

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
  );
  
  const store = createStore(reducer, enhancer);
  sagaMiddleware.run(sagas);
  return store;
}
