import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


let mapStatToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      alert(this.props.isAuth);
      if (!this.props.isAuth) {
        return <Redirect to='/login' />
      }
      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStatToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}