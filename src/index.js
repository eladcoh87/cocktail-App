import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchRecipeReducer from './store/searchRecipeReducer';

import { createStore } from 'redux';

import { Provider } from 'react-redux';

const store = createStore(
  searchRecipeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
