import React, { Component } from 'react';

import LoginLayout from './layout';

class LoginContainer extends Component {
  onSubmit = values => {
    // TODO: adding the functionality in the next feature, this is just for making the form work for now
  };

  render() {
    return <LoginLayout onSubmit={this.onSubmit} />;
  }
}

export default LoginContainer;
