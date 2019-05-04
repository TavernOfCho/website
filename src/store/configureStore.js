import { createStore } from 'redux';
import alertReducer from './reducers/alert';

export default createStore(
  alertReducer
);
