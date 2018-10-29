import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withLoading from '@components/withLoading';
import formNames from '@constants/formNames';
import Button from '@components/CustomFormFields/Button';
import msg from '@constants/messages';

import styles from './styles.scss';

const { btnTooltips, btnTitles } = formNames.EDIT_PROFILE;
function ProfileEditFormActions({ successMessage, errorMessage, pristine, submitting, activateEditProfile }) {
  return (
    <Fragment>
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
    </Fragment>
  );
}

ProfileEditFormActions.propTypes = {
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  activateEditProfile: PropTypes.func.isRequired
};

export default withLoading(ProfileEditFormActions, {
  isContained: true,
  msgLoading: msg.profile.LOADING_PROFILE_EDIT
});
