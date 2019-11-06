import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/components/App';
import * as serviceWorker from 'src/serviceWorker';

import { Provider } from 'react-redux';
import configureStore from 'src/store';

import 'src/i18n.js';

import theme from 'src/themes/default';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
