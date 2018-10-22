import { service as profileService } from '@services/profileService';
import { SubmissionError } from 'redux-form';
import formNames from '@constants/formNames';

export const PROFILE_ACTIONS = {
  SET_PROFILE_INFO: 'SET_PROFILE_INFO',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

const privateActionCreators = {
  set: info => ({
    type: PROFILE_ACTIONS.SET_PROFILE_INFO,
    payload: { info }
  }),
  loading: loading => ({
    type: PROFILE_ACTIONS.LOADING,
    payload: { loading }
  }),
  success: successMessage => ({
    type: PROFILE_ACTIONS.SUCCESS,
    payload: { successMessage }
  }),
  error: errorMessage => ({
    type: PROFILE_ACTIONS.ERROR,
    payload: { errorMessage }
  })
};

export const actionCreators = {
  loadProfileInfo: id => async dispatch => {
    dispatch(privateActionCreators.loading(true));
    const response = await profileService.get(id);
    const data = response.data;
    if (response.ok) {
      dispatch(privateActionCreators.set(data));
    } else {
      dispatch(privateActionCreators.error(data.error.message));
    }
    dispatch(privateActionCreators.loading(false));
  },
  submit: (userId, formData) => async dispatch => {
    dispatch(privateActionCreators.loading(true));
    const response = await profileService.patch(userId, formData);
    const data = response.data;
    dispatch(privateActionCreators.loading(false));
    if (response.ok) {
      dispatch(privateActionCreators.set(data));
      dispatch(privateActionCreators.error(null));
      dispatch(privateActionCreators.success(formNames.EDIT_PROFILE.messages.success));
    } else {
      dispatch(privateActionCreators.success(null));
      dispatch(privateActionCreators.error(data.error.message));
      throw new SubmissionError({ _error: data.error.message });
    }
  }
};
