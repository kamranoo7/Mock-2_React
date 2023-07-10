import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import { reducer } from './Redux/reducer';
import Form from './Component/Form';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider   store={store}>
      <Form />
    </Provider>
  );
};

export default App;
