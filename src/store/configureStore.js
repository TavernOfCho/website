import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import alertReducer from './reducers/alert';
import authReducer from './reducers/user';

//react-intl-redux
import { intlReducer } from 'react-intl-redux'
const UPDATE_LOCALES = 'UPDATE_LOCALES'

function localesReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_LOCALES:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

const reducers = {
  alert: alertReducer,
  auth: authReducer,
  intl: intlReducer,
  locales: localesReducer,
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
