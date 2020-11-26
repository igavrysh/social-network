import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user_avatar.jpg';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div>
        <img
          className={s.mainPhoto}
          src={profile.photos.large || userPhoto}
          alt='' />
        { isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks 
          status={status} 
          updateStatus={updateStatus} />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          {profile.userId}
        </div>
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