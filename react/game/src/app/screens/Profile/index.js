import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileLayout from './layout';

class Profile extends Component {
  state = {
    editingProfile: true
  };

  activateEditProfile = () => {
    this.setState(prevState => ({ editingProfile: !prevState.editingProfile }));
  };

  render() {
    return (
      <ProfileLayout
        editingProfile={this.state.editingProfile}
        activateEditProfile={this.activateEditProfile}
        profilePicture={this.props.profilePicture}
        backgroundPicture={this.props.backgroundPicture}
      />
    );
  }
}

Profile.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  backgroundPicture: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  profilePicture: state.auth.userInfo.profilePicture,
  backgroundPicture: state.auth.userInfo.backgroundPicture
});

export default connect(mapStateToProps)(Profile);
