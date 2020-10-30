import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://s2.logaster.com/static/v3/img/products/logo.png' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://media.timeout.com/images/100541963/image.jpg' />
        </div>
        <div>
          ava+description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
