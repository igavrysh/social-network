import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={ () => {
              return (
                <DialogsContainer />
              );
            }} />
          <Route path="/profile"
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
