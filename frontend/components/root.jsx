import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './app_container';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>
);

export default Root;
