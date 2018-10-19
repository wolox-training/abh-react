import { API } from '@config/api';

export const PROFILE_ACTIONS = {
  SUBMIT_LOADING: 'SUBMIT_LOADING',
  SUBMIT_ERROR: 'SUBMIT_ERROR',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  RESET_FORM: 'RESET_FORM'
};

const privateActionCreators = {
  submitLoading: loading => ({
    type: PROFILE_ACTIONS.SUBMIT_LOADING,
    payload: { loading }
  }),
  submitSuccess: () => ({
    type: PROFILE_ACTIONS.SUBMIT_SUCCESS
  }),
  submitError: errorMessage => ({
    type: PROFILE_ACTIONS.SUBMIT_ERROR,
    payload: { errorMessage }
  }),
  resetForm: () => ({
    type: PROFILE_ACTIONS.RESET_FORM
  })
};

export const actionCreators = {
  submit: formData => async dispatch => {
    console.log(formData);
    dispatch(privateActionCreators.submitLoading(true));
    dispatch(privateActionCreators.submitLoading(false));
  }
};
