import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={() => {
              return (
                <DialogsContainer />
              );
            }} />
          <Route path="/profile"
            render={() => {
              return (
                <Profile />
              );
            }} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
