import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.contentImage} src='https://media.timeout.com/images/100541963/image.jpg' alt=''/>
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  );
}

export default ProfileInfo;