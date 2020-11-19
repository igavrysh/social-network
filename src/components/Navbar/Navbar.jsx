import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

console.log(s);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeclassname={s.active}>Profile</NavLink>
      </div>
      <div className={`${s.item}`}>
        <NavLink to="/dialogs" activeclassname={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeclassname={s.active}>Users</NavLink>
      </div>
      <div className={s.item}>
        <a href='/dialogs' to="/dialogs" activeclassname={s.active}>News</a>
      </div>
      <div className={s.item}>
        <a href='/dialogs' to="/dialogs" activeclassname={s.active}>Music</a>
      </div>
      <div className={s.item}>
        <a href='/dialogs' to="/dialogs" activeclassname={s.active}>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;