import { createStore, applyMiddleware, combineReducers } from 'redux';
import alertReducer from './reducers/alert';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
  alert: alertReducer,
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);
