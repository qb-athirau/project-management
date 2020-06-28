import fetchAPI from '../../utils/api/api';
import Api from '../../lib/apiUrls';
import { updateToast } from '../../slices/toasterSlice';
import { toastMessages } from '../../configs/constants';
import { setProjectStart, setProjects, addProjects, setProjectFailure } from './slice';

export const addProject = (data) => (dispatch) => {
  try {
    dispatch(setProjectStart());
    const response = fetchAPI.post(Api.projectsApi, data);
    response.then((res) => {
      dispatch(addProjects(res?.data));
    });
  } catch (error) {
    dispatch(setProjectFailure());
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
    dispatch(setProjectStart());
    const response = fetchAPI.get(Api.projectsApi);
    response.then((res) => {
      dispatch(setProjects(res?.data));
    });
  } catch (error) {
    dispatch(setProjectFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};

export const updateProject = (data) => (dispatch) => {
  try {
    dispatch(setProjectStart());
    const response = fetchAPI.put(`${Api.projectsApi}/2`, data);
    response.then((res) => {
      // dispatch(setProjects(res?.data));
    });
  } catch (error) {
    dispatch(setProjectFailure());
    dispatch(
      updateToast({
        value: true,
        message: toastMessages.errorMsg,
        variant: 'error',
      }),
    );
  }
};
