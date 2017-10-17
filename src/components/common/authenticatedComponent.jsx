import React from 'react';
import {connect} from 'react-redux';
import { redirectToLogin } from 'actions/authentication';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth() {
      let token = this.props.token;
      let localToken = localStorage.token;
      if (token == undefined || token === null || localToken == undefined || localToken === null ) {
        this.props.dispatch(redirectToLogin());
      }
    }

    render() {
      return (
        <div>
            {<Component {...this.props}/>}
        </div>
        )
    }
  }

  const mapStateToProps = (state) => ({
    token: state.authReducer.token
  });

  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

}
