import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as profileActions } from '@redux/profile/actions';
import profileTypes from '@types/Profile';

import ProfileLayout from './layout';

class Profile extends Component {
  state = {
    editingProfile: false
  };

  componentDidMount() {
    this.props.loadProfile(this.props.userId);
  }

  activateEditProfile = () => {
    this.setState(prevState => ({ editingProfile: !prevState.editingProfile }));
  };

  render() {
    const { loading, profileInfo } = this.props;
    return (
      <ProfileLayout
        editingProfile={this.state.editingProfile}
        activateEditProfile={this.activateEditProfile}
        profileInfo={profileInfo}
        loading={loading}
      />
    );
  }
}

Profile.propTypes = {
  profileInfo: profileTypes,
  loading: PropTypes.bool,
  loadProfile: PropTypes.func.isRequired,
  userId: PropTypes.number
};

const mapStateToProps = state => ({
  profileInfo: state.profile.profileInfo,
  loading: state.profile.profileInfoLoading,
  userId: state.auth.authInfo.userId
});

const mapDispatchToProps = dispatch => ({
  loadProfile: userId => dispatch(profileActions.loadProfile(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
