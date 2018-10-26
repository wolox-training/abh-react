import React from 'react';
import profileTypes from '@types/Profile';

import styles from './styles.scss';

function ProfileInfo({ profileInfo }) {
  const { firstName, lastName, age, aboutMe } = profileInfo;
  return (
    <div className={styles.profileInfoContainer}>
      <h1 className={styles.mainInfo}>{`${firstName} ${lastName}, ${age}`}</h1>
      <div className={styles.aboutMeContainer}>
        <h2 className={styles.aboutMeTitle}>About {firstName}</h2>
        <h3 className={styles.aboutMeContent}>{aboutMe}</h3>
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {
  profileInfo: profileTypes
};
export default ProfileInfo;
