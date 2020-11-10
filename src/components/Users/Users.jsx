import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user_avatar.jpg'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p => {
          return (
            <span
              onClick={(e) => { props.onPageChanged(p) }}
              className={props.currentPage === p && s.selectedPage}>
              {p}
            </span>
          );
        })}
      </div>
      {
        props.users.map(u => {
          return <div key={u.id}>
            <span>
              <div>
                <div className={s.userPhoto}>
                  <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                  </NavLink>
                </div>
              </div>
              <div>
                {
                  u.followed
                    ? <button disabled={props.followingInProgress} onClick={() => {
                      props.toggleFollowingProgress(true);
                      let url = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                      Axios.delete(url, { 
                        withCredentials: true,
                        headers: {
                          'API-KEY': '3d1ff9da-8bc0-4533-ba31-4c93b3db5b95'
                        }
                      })
                        .then(response => {
                          if (response.data.resultCode == 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleFollowingProgress(false);

                        });
                    }}>Unfollow</button>
                    : <button disabled={props.followingInProgress} onClick={() => {
                      props.toggleFollowingProgress(true);
                      let url = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                      Axios.post(url, {}, { 
                        withCredentials: true,
                        headers: {
                          'API-KEY': '3d1ff9da-8bc0-4533-ba31-4c93b3db5b95'
                        }
                      })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleFollowingProgress(false);
                        });
                    }}>Follow</button>
                }
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        })
      }
    </div>
  );
}

export default Users;