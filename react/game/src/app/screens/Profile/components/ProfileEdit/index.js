import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as profileActions } from '@redux/profile/actions';

import ProfileEditForm from './components/ProfileEditForm';

class ProfileEdit extends Component {
  componentWillUnmount() {
    this.props.clearMessages();
  }
  render() {
    const { activateEditProfile, submitProfileInfo } = this.props;
    return <ProfileEditForm onSubmit={submitProfileInfo} activateEditProfile={activateEditProfile} />;
  }
}

ProfileEdit.propTypes = {
  submitProfileInfo: PropTypes.func.isRequired,
  activateEditProfile: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  submitProfileInfo: data => dispatch(profileActions.editProfile(data)),
  clearMessages: () => dispatch(profileActions.clearMessages())
});

export default connect(
  undefined,
  mapDispatchToProps
)(ProfileEdit);
