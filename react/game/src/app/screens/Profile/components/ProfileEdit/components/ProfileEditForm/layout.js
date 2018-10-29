import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import formNames from '@constants/formNames';

import { mapField } from './utils';
import { formFields } from './constants';
import styles from './styles.scss';
import ProfileEditFormActions from './components/ProfileEditFormActions';

function ProfileEditFormLayout({
  handleSubmit,
  pristine,
  submitting,
  errorMessage,
  successMessage,
  activateEditProfile,
  loading
}) {
  return (
    <div className={styles.editProfileFormContainer}>
      <form className={styles.editProfileForm} onSubmit={handleSubmit}>
        {formFields.map(mapField)}
        <ProfileEditFormActions
          loading={loading}
          pristine={pristine}
          submitting={submitting}
          errorMessage={errorMessage}
          successMessage={successMessage}
          activateEditProfile={activateEditProfile}
        />
      </form>
    </div>
  );
}

ProfileEditFormLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  activateEditProfile: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default reduxForm({
  form: formNames.EDIT_PROFILE.name
})(ProfileEditFormLayout);
