import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img 
          className={s.contentImage} 
          src='https://media.timeout.com/images/100541963/image.jpg' 
          alt='' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='' />
        <div>
          {props.profile.fullName}
        </div>
        <div>
          {props.profile.aboutMe}
        </div>
        <div>
          {props.profile.contacts.facebook}
        </div>
        <div>
          {props.profile.contacts.github}
        </div>
        <div>
          {props.profile.contacts.instagram}
        </div>
        <div>
          {props.profile.contacts.mainLink}
        </div>
        <div>
          {props.profile.contacts.twitter}
        </div>
        <div>
          {props.profile.contacts.vk}
        </div>
        <div>
          {props.profile.contacts.website}
        </div>
        <div>
          {props.profile.contacts.youtube}
        </div>
        <div>
          { 
            props.profile.lookingForAJob
              ? <div>{props.profile.lookingForAJobDescription}</div>
              : <div>Currently, not looking for a job</div>
          }
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;