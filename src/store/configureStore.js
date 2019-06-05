import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import alertReducer from './reducers/alert';
import authReducer from './reducers/user';
import { intlReducer } from 'react-intl-redux'

const reducers = {
  alert: alertReducer,
  auth: authReducer,
  intl: intlReducer,
};
const initialState = {
  intl: {
    defaultLocale: 'fr',
    locale: 'fr',
    messages: {
      'app.greeting': 'Bienvenue',
    },
  },
}

export const store = createStore(
  combineReducers(reducers, initialState),
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);
