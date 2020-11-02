import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {
    id: 1,
    name: 'Dimych'
  },
  {
    id: 2,
    name: 'Andrey'
  },
  {
    id: 3,
    name: 'Sveta'
  },
  {
    id: 4,
    name: 'Sasha'
  },
  {
    id: 5,
    name: 'Viktor'
  }
];

let messages = [
  {
    id: 1,
    message: "Hi"
  },
  {
    id: 2,
    message: "How is your it-kamasutra?"
  },
  {
    id: 3,
    message: "Yo"
  },
  {
    id: 4,
    message: "Yo"
  }
];


let posts = [
  {
    id: 1,
    message: 'Hi, how are you?',
    likesCount: 12
  },
  {
    id: 2,
    message: 'Its my first post',
    likesCount: 10
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App messages={messages} dialogs={dialogs} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
