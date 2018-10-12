import React, { Component } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as loginActions } from '@redux/auth/actions';
import Router from '@components/Router';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    const { appLoaded } = this.props.auth;
    return appLoaded ? <div>Loading</div> : <Router />;
  }
}

App.propTypes = {
  initApp: func.isRequired,
  auth: shape({}).isRequired
};

const mapStateToProps = state => ({
  game: state.game,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(loginActions.initApp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
