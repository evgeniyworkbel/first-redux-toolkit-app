import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js'

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
// Оборачиваем приложение в Provider
// и передаем в него хранилище
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
