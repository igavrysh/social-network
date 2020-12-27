import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  requestUsers,
  FilterType
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { 
  getCurrentPage,
  getIsFetching,
  getPageSize, 
  getTotalUsersCount, 
  getUsers,
  getFollowingInProgress,
  getUsersFilter
} from '../../redux/users-selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  filter: FilterType
}

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    const {
      currentPage,
      pageSize,
      filter
    } = this.props
    this.props.getUsers(currentPage, pageSize, filter)
  }

  onPageChanged = (p: number) => {
    const {pageSize, filter} = this.props
    this.props.getUsers(p, pageSize, filter)  
  }

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props
    this.props.getUsers(1, pageSize, filter)
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        { this.props.isFetching
          ? <Preloader />
          : null
        }
        <Users
          onPageChanged={this.onPageChanged}
          onFilterChanged={this.onFilterChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress} />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
  };
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsers: requestUsers
    }
  )//,
  //withAuthRedirect
)(UsersContainer);
