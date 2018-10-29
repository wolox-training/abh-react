import { completeTypes, createTypes, withPostFailure, withPostSuccess } from 'redux-recompose';
import { service as profileService } from '@services/profileService';
import { SubmissionError } from 'redux-form';
import formNames from '@constants/formNames';

import { TARGET, TARGET_SUCCESS_MESSAGE } from './constants';

const completedTypes = completeTypes(['PROFILE_INFO', 'SET_SUCCESS_MESSAGE'], ['SET_SUCCESS_MESSAGE']);

export const actions = createTypes(completedTypes, '@@PROFILE');

export const actionCreators = {
  loadProfile: id => ({
    type: actions.PROFILE_INFO,
    service: profileService.get,
    payload: id,
    target: TARGET,
    failureSelector: response => response.data.error.message
  }),
  editProfile: values => ({
    type: actions.PROFILE_INFO,
    service: profileService.patch,
    payload: values,
    target: TARGET,
    injections: [
      withPostSuccess(dispatch => {
        dispatch({
          type: actions.SET_SUCCESS_MESSAGE,
          target: TARGET_SUCCESS_MESSAGE,
          payload: formNames.EDIT_PROFILE.messages.success
        });
      }),
      withPostFailure((dispatch, response) => {
        throw new SubmissionError({ _error: response.data.error.message });
      })
    ],
    failureSelector: response => response.data.error.message
  })
};
