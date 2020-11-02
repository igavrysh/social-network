import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.contentImage} src='https://media.timeout.com/images/100541963/image.jpg' />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts />

    </div>
  )
}

export default Profile;