import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import env from './env.js';
import ReduxThunk from 'redux-thunk';

import LoginForm from './components/login-form';

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: env.apiKey,
      authDomain: env.authDomain,
      databaseURL: env.databaseURL,
      projectId: env.projectId,
      storageBucket: env.storageBucket,
      messagingSenderId: env.messagingSenderId,
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider
        store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
      >
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
