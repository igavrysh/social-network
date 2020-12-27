import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, requestUsers, follow, unfollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/users-selectors';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import UsersSearchForm from './UsersSearchForm'

type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {
  const users = useSelector(getUsers)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter))
  }, [])

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
  }

  const onFollow = (userId: number) => {
    dispatch(follow(userId))
  }

  const onUnfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }

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
                followingInProgress={followingInProgress}
                follow={onFollow}
                unfollow={onUnfollow} />
            );
          })
        }
      </div>
    </div>
  );
}
