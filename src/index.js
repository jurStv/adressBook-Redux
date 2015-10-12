import _fontPierSansStyle from './shared/Pier Sans/stylesheet.css';
import _fontMonoidStyle from './shared/Monoid/stylesheet.css';
import _fontAwesomeStyle from './shared/FontAwesome/css/stylesheet.css';
import _globalStyles from './shared/global.styl';

import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import makeStore from './store/makeStore';

const store = makeStore();

React.render(
  <Provider store={ store }>
    {() => <App />}
  </Provider>,
  document.getElementById('app')
);
