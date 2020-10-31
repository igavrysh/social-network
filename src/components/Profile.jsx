import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://media.timeout.com/images/100541963/image.jpg' />
      </div>
      <div>
        ava+description
      </div>
      <div>
        my posts
        <div>
          new post
        </div>
        <div classname={s.posts}>
          <div className={s.item}>
            post 1
          </div>
          <div className={s.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;