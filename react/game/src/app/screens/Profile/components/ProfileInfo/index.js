import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import profileTypes from '@types/Profile';

import styles from './styles.scss';

function ProfileInfo({ profileInfo, loading }) {
  const { firstName, lastName, age, aboutMe } = profileInfo;
  return (
    <div className={styles.profileInfoContainer}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <h1 className={styles.mainInfo}>{`${firstName} ${lastName}, ${age}`}</h1>
          <div className={styles.aboutMeContainer}>
            <h2 className={styles.aboutMeTitle}>About {firstName}</h2>
            <h3 className={styles.aboutMeContent}>{aboutMe}</h3>
          </div>
        </Fragment>
      )}
    </div>
  );
}

ProfileInfo.propTypes = {
  profileInfo: profileTypes,
  loading: PropTypes.bool.isRequired
};
export default ProfileInfo;
