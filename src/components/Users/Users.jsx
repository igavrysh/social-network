import * as Axios from 'axios';
import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/user_avatar1.jpg'

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.getUsers();
  }

  getUsers = () => {
    let url = 'https://social-network.samuraijs.com/api/1.0/users';
    Axios.get(url)
      .then(response => {
        this.isUsersLoading = false;
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div>
      {
        this.props.users.map(u => {
          return <div key={u.id}>
            <span>
              <div>
                <div className={s.userPhoto}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='' />
                </div>
              </div>
              <div>
                {
                  u.followed
                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
    </div>;
  }
}

export default Users;