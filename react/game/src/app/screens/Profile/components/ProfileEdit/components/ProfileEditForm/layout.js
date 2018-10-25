import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import formNames from '@constants/formNames';
import Button from '@components/CustomFormFields/Button';

import { mapField } from './utils';
import { formFields } from './constants';
import styles from './styles.scss';

function ProfileEditFormLayout({
  handleSubmit,
  pristine,
  submitting,
  errorMessage,
  successMessage,
  activateEditProfile
}) {
  const { btnTooltips, btnTitles } = formNames.EDIT_PROFILE;
  return (
    <div className={styles.editProfileFormContainer}>
      <form className={styles.editProfileForm} onSubmit={handleSubmit}>
        {formFields.map(mapField)}
        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
        {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
        <div className={styles.editProfileBtnContainer}>
          <Button
            type="submit"
            visible
            disabled={pristine || submitting}
            title={btnTooltips.save}
            classNames={styles.editProfileButtons}
          >
            {btnTitles.save}
          </Button>
          <Button
            type="button"
            onClick={activateEditProfile}
            classNames={`${styles.editProfileCancelBtn} ${styles.editProfileButtons}`}
            visible
            title={btnTooltips.cancel}
          >
            {btnTitles.cancel}
          </Button>
        </div>
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
  activateEditProfile: PropTypes.func.isRequired
};

export default reduxForm({
  form: formNames.EDIT_PROFILE.name
})(ProfileEditFormLayout);
