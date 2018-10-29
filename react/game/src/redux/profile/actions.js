import { completeTypes, createTypes, withPostFailure, withPostSuccess } from 'redux-recompose';
import { service as profileService } from '@services/profileService';
import { SubmissionError } from 'redux-form';
import formNames from '@constants/formNames';

import targets from './constants';

const completedTypes = completeTypes(['PROFILE_INFO', 'SET_SUCCESS_MESSAGE'], ['SET_SUCCESS_MESSAGE']);

export const actions = createTypes(completedTypes, '@@PROFILE');

export const actionCreators = {
  loadProfile: id => ({
    type: actions.PROFILE_INFO,
    service: profileService.get,
    payload: id,
    target: targets.PROFILE_INFO,
    failureSelector: response => response.data.error.message
  }),
  editProfile: values => ({
    type: actions.PROFILE_INFO,
    service: profileService.patch,
    payload: values,
    target: targets.PROFILE_INFO,
    injections: [
      withPostSuccess(dispatch => {
        dispatch({
          type: actions.SET_SUCCESS_MESSAGE,
          target: targets.SUCCESS_MESSAGE,
          payload: formNames.EDIT_PROFILE.messages.success
        });
      }),
      withPostFailure((dispatch, response) => {
        dispatch({
          type: actions.SET_SUCCESS_MESSAGE,
          target: targets.SUCCESS_MESSAGE,
          payload: null
        });
        throw new SubmissionError({ _error: response.data.error.message });
      })
    ],
    failureSelector: response => response.data.error.message
  }),
  clearMessages: () => dispatch => {
    dispatch({ type: actions.SET_SUCCESS_MESSAGE, target: targets.SUCCESS_MESSAGE, payload: null });
  }
};
