import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import alertReducer from './reducers/alert';
import authReducer from './reducers/user';

const reducers = {
  alert: alertReducer,
  auth: authReducer,
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);
