import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as profileActions } from '@redux/profile/actions';

import ProfileEditForm from './components/ProfileEditForm';

class ProfileEdit extends Component {
  render() {
    const { activateEditProfile, submitProfileInfo, loading } = this.props;
    return (
      <ProfileEditForm
        loading={loading}
        onSubmit={submitProfileInfo}
        activateEditProfile={activateEditProfile}
      />
    );
  }
}

ProfileEdit.propTypes = {
  submitProfileInfo: PropTypes.func.isRequired,
  activateEditProfile: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  submitProfileInfo: data => dispatch(profileActions.editProfile(data))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ProfileEdit);
