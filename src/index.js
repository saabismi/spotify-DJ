import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SpotifyDJ from './App';

import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './SpotifyContext/SpotifyContext';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const CLIENT_ID = '0faa50f8fabb4fe9a8cc3946cdfcbf50';

ReactDOM.render(
  <CookiesProvider>
    <AuthProvider client={CLIENT_ID}>
      <SpotifyDJ />
    </AuthProvider>
  </CookiesProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
