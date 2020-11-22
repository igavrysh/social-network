import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user_avatar.jpg'
import { NavLink } from 'react-router-dom';

let User = (
  {
    user,
    followingInProgress,
    follow,
    unfollow
  }
) => {

  let u = user;

  return (
    <div>
      <span>
        <div>
          <div className={s.userPhoto}>
            <NavLink to={'/profile/' + user.id}>
              <img src={user.photos.small != null 
                ? user.photos.small 
                : userPhoto} alt='' />
            </NavLink>
          </div>
        </div>
        <div>
          {
            user.followed
              ? <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { unfollow(user.id); }}
              >
                Unfollow
                        </button>
              : <button
                disabled={followingInProgress.some(id => id === user.id)}
                onClick={() => { follow(user.id); }}
              >
                Follow
              </button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
}

export default User;