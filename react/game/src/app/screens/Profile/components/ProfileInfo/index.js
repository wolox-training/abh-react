import React from 'react';
import PropTypes from 'prop-types';

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
  profileInfo: PropTypes.shape({
    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string,
    age: PropTypes.string,
    aboutMe: PropTypes.string,
    profilePicture: PropTypes.string,
    backgroundPicture: PropTypes.string
  })
};
export default ProfileInfo;
