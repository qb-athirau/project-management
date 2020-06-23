import { toastMessages } from '../../configs/constants';
import updateToast from '../../slices/toasterSlice';
import appStore from '../../store';

export const responseOnSuccess = (response) => response;

export const responseOnFailed = (error) => {
  const customError = { ...error };
  if (error.response) {
    const status = error.response.headers.status || error.response.status;
    customError.status = status;
    handleError(status);
  }
  return Promise.reject(customError);
};

const handleError = (status) => {
  switch (status) {
    case 401:
      window.location.pathname = '/';
      break;
    case 400:
      // history.push(window.location.href);
      appStore.dispatch(
        updateToast({
          value: true,
          message: toastMessages.errorMsg,
          variant: 'error',
        }),
      );
      break;
    default:
      appStore.dispatch(
        updateToast({
          value: true,
          message: toastMessages.errorMsg,
          variant: 'error',
        }),
      );
      break;
  }
};
