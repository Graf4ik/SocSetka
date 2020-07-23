import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img src="https://i.imgur.com/RRUe0Mo.png" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <div><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
    </div>
    </div>)
}

export default ProfileInfo;