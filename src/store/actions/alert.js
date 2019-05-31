import { alertConstants } from '../constants/alert';

export const alertActions = {
  success,
  info,
  error,
  warning,
  clear,
};

function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

function info(message) {
  return { type: alertConstants.INFO, message };
}

function error(message) {
  return { type: alertConstants.ERROR, message };
}
function warning(message) {
  return { type: alertConstants.WARNING, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

export default alertActions;
