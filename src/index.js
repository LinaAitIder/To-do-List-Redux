import React from 'react';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  todoReducer  from './reducers/todoReducer';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import PresentationalContainer from './components/Presentational';

const store = createStore(todoReducer);
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PresentationalContainer />
    </Provider>
    </React.StrictMode>
);


reportWebVitals();
