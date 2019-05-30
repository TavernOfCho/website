import { userConstants } from '../constants/user';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      console.log('login_request:action.user:', action.user);
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      console.log('login_success:action.user:', action.user);
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
