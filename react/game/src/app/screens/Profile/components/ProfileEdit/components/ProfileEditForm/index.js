import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profileTypes from '@types/Profile';

import ProfileEditFormLayout from './layout';

function ProfileEditForm({
  onSubmit,
  errorMessage,
  successMessage,
  activateEditProfile,
  initialValues,
  loading
}) {
  return (
    <ProfileEditFormLayout
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      successMessage={successMessage}
      activateEditProfile={activateEditProfile}
      initialValues={initialValues}
      loading={loading}
    />
  );
}

ProfileEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  activateEditProfile: PropTypes.func.isRequired,
  initialValues: profileTypes,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  initialValues: state.profile.profileInfo,
  errorMessage: state.profile.profileInfoError,
  successMessage: state.profile.successMessage
});

export default connect(mapStateToProps)(ProfileEditForm);
