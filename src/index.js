import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import {
  doInitApp
} from './init/actions';
import App from './App';

// This is for guarding Android issue only
let instance_count = 0;

// This class is mainly setup code.
class AppContainer extends Component {

  constructor() {
    super();

    // Checking Android multiple loading issue
    instance_count++;
    if (instance_count > 1) {
      console.log('AppContainer is created more than once: ' + instance_count);
      console.log('This may means that Android Development loader is not working correctly');
    }
  }

  componentDidMount() {
    // This kick off application init state.
    store.dispatch(doInitApp());
    // if (instance_count == 0) {
    // }
    //store.dispatch(doLoadAppCache('test'));
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppContainer;