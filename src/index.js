import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import './scss/index.css'
import App from './components/App'
import store from './store'


ReactDOM.render(
  <Provider store={store} basename={process.env.PUBLIC_URL}>
    <App />
  </Provider>,
  document.getElementById('root')
);
