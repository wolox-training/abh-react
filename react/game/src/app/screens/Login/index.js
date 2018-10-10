import React, { Component } from 'react';

import LoginLayout from './layout';

class LoginContainer extends Component {
  // TODO: adding the functionality in the next feature, this is just for making the form work for now
  handleSubmit = event => event.preventDefault();

  render() {
    return <LoginLayout onSubmit={this.handleSubmit} />;
  }
}

export default LoginContainer;
