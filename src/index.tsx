import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.scss';
import app from './store';
import { studentSaga } from './components/student/student.saga';
import 'bootstrap/dist/css/bootstrap.css';

// create and configure reduxer middleware ( saga is a middleware )
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;
const store = createStore(
  app,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(studentSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

document.getElementById('dpr')
);

