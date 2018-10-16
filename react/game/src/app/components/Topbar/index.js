import React, { Component } from 'react';
import { shape, string, int } from 'prop-types';
import { connect } from 'react-redux';

import TopbarLayout from './layout';

class Topbar extends Component {
  logout = () => {
    console.log('logout Smart');
    return true;
  };

  render() {
    return <TopbarLayout logout={this.logout} email={this.props.userInfo.email} />;
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo
});

Topbar.propTypes = {
  userInfo: shape({ email: string, firstName: string, lastName: string, age: int }).isRequired
};

export default connect(mapStateToProps)(Topbar);
