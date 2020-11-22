import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user_avatar.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (
  {
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
  }) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize} />
      <div>
        {
          users.map(u => {
            return (
              <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow} />
            );
          })
        }
      </div>
    </div>
  );
}

export default Users;