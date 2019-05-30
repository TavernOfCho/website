import { alertConstants } from '../constants/alert';

export default function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        ...state,
        type: 'success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        ...state,
        type: 'error',
        message: action.message
      };
    case alertConstants.INFO:
      return {
        ...state,
        type: 'info',
        message: action.message
      };
    case alertConstants.WARNING:
      return {
        ...state,
        type: 'warning',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}
