import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={ () => {
              return (
                <DialogsContainer />
              );
            }} />
          <Route path="/profile/:userId?"
            render={ () => {
              return (
                <ProfileContainer />
              );
            }} />
          <Route path="/users"
            render={ () => {
              return (
                <UsersContainer />
              );
            }}/>
          <Route path="/login"
            render={ () => {
              return (
                <LoginPage />
              );
            }}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
