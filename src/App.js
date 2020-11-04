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
                <DialogsContainer store={props.store} />
              );
            }} />
          <Route path="/profile"
            render={() => {
              return (
                <Profile store={ props.store } />
              );
            }} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
