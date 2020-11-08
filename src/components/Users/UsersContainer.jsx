import React from 'react';
import { connect } from 'react-redux';
import * as Axios from 'axios';
import { 
  followAC, 
  unfollowAC, 
  setUsersAC, 
  setCurrentPageAC, 
  setTotalUsersCountAC 
} from '../../redux/users-reducer';
import Users from './Users';


class UsersContainer extends React.Component {

  componentDidMount() {
    let url = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
    Axios.get(url)
      .then(response => {
        this.isUsersLoading = false;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    let url = `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`;
    Axios.get(url)
      .then(response => {
        this.isUsersLoading = false;
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  } 

  render() {
    return <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged} 
      users={this.props.users} 
      follow={this.props.follow}
      unfollow={this.props.unfollow} />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

