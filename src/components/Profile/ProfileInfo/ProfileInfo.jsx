import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img
          className={s.contentImage}
          src='https://media.timeout.com/images/100541963/image.jpg'
          alt='' />
        <ProfileStatusWithHooks 
          status={status} 
          updateStatus={updateStatus} />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt='' />
        <div>
          {profile.fullName}
        </div>
        <div>
          {profile.aboutMe}
        </div>
        <div>
          {profile.contacts.facebook}
        </div>
        <div>
          {profile.contacts.github}
        </div>
        <div>
          {profile.contacts.instagram}
        </div>
        <div>
          {profile.contacts.mainLink}
        </div>
        <div>
          {profile.contacts.twitter}
        </div>
        <div>
          {profile.contacts.vk}
        </div>
        <div>
          {profile.contacts.website}
        </div>
        <div>
          {profile.contacts.youtube}
        </div>
        <div>
          {
            profile.lookingForAJob
              ? <div>{profile.lookingForAJobDescription}</div>
              : <div>Currently, not looking for a job</div>
          }
        </div>

      </div>
    </div>
  );
}

export default ProfileInfo;