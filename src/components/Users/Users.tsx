import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType } from '../../redux/users-reducer';
import { getCurrentPage, getPageSize, getTotalUsersCount } from '../../redux/users-selectors';
import { UserType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm';

type PropsType = {
  onPageChanged: (pageNumber: number) => void
  onFilterChanged: (term: FilterType) => void
  users: Array<UserType>
  portionSize?: number
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

let Users: React.FC<PropsType> = (
  {
    onPageChanged,
    onFilterChanged,
    users,
    ...props
  }
) => {
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)

  const dispatch = useDispatch()

  return (
    <div>
      <UsersSearchForm onFilterChanged={onFilterChanged}/>
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