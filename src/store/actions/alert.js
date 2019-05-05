import { alertConstants } from '../constants/alert';

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  console.log("sucess function in alert action", message);
  return { type: alertConstants.SUCCESS, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

export default alertActions;
