import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreators as loginActions } from '@redux/auth/actions';
import Router from '@components/Router';
import msg from '@constants/messages';
import withLoading from '@components/withLoading';

class App extends Component {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    const { appLoading } = this.props;
    const external = true;
    const WithLoading = withLoading(Router, external);
    return (
      <WithLoading onSubmit={this.handleSubmit} loading={appLoading} msgLoading={msg.APP_LOADING_MESSAGE} />
    );
  }
}

App.propTypes = {
  initApp: PropTypes.func.isRequired,
  appLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  appLoading: state.auth.appLoading
});

const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(loginActions.initApp())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
