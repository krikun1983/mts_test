import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/header';
import Main from './components/main';
import store from './store';
import './assets/scss/app.scss';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
