import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          {/* <Profile /> */}
          <div className='app-wrapper-content'>
            <Route path="/dialogs"
              render={() => {
                return (
                  <DialogsContainer />
                );
              }} />
            <Route path="/profile/:userId?"
              render={() => {
                return (
                  <ProfileContainer />
                );
              }} />
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
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  };
}

export default connect(mapStateToProps, { initializeApp })(App);

/*
export default compose(
  connect(null, {getAuthUserData})
)(App);
*/