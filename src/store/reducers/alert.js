import { alertConstants } from '../constants/alert';

export default function alert(state = {}, action) {
  console.log("In reducer alert function, action type:", action.type);
  switch (action.type) {
    case alertConstants.SUCCESS:
      console.log("in sucess in reducer alert, action message:", action.message);
      return {
        ...state,
        type: 'alert-success',
        message: action.message
      };
/*      return {
        // type: 'alert-success',
        ...state,
        message: action.message
      };*/
    case alertConstants.ERROR:
      return {
        ...state,
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}
