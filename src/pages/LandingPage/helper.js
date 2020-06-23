import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import { setProjects } from './slice';

export const addProject = (data) => (dispatch) => {
  try {
    const response = fetchAPI.post(Api.projectsApi, data);
    response.then((res) => {
      dispatch(setProjects(data));
    });
  } catch (error) {
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const getProjects = () => (dispatch) => {
  try {
    const response = fetchAPI.get(Api.projectsApi);
    response.then((res) => {
      dispatch(setProjects(res?.data));
    });
  } catch (error) {
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};
