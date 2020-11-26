import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?"
            render={withSuspense(ProfileContainer)} />
          <Route path="/users"
            render={() => {
              return (
                <UsersContainer />
              );
            }} />
          <Route path="/login"
            render={() => {
              return (
                <LoginPage />
              );
            }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  };
}

let AppContainer = 
  connect(mapStateToProps, { initializeApp })
(App);

const SamuraiJSApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;
/*
export default compose(
  connect(null, {getAuthUserData})
)(App);
*/