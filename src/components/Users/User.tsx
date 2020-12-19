import React, { Props } from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user_avatar.jpg'
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

let User: React.FC<PropsType> = (
  {
    user,
    followingInProgress,
    follow,
    unfollow
  }
) => {
  console.log(user)
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
      </span>
    </div>
  );
}

export default User;