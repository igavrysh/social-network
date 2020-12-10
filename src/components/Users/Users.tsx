import React from 'react';
import { UserType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
  totalUsersCount: number
  pageSize: number 
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  portionSize?: number
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

let Users: React.FC<PropsType> = (
  {
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
  }) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
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