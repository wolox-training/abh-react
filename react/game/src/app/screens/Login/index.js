import React, { Component } from 'react';

import LoginLayout from './layout';

class LoginContainer extends Component {
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    return <LoginLayout onSubmit={this.handleSubmit} />;
  }
}

export default LoginContainer;
