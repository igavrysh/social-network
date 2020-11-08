import React from 'react';
import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={s.contentImage} src='https://media.timeout.com/images/100541963/image.jpg' alt=''/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava+description
      </div>
    </div>
  );
}

export default ProfileInfo;