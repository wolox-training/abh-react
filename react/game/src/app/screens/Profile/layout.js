import React from 'react';

import styles from './styles.scss';

function ProfileLayout() {
  const imgSrc = 'https://image.flaticon.com/icons/svg/74/74472.svg';
  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePageContainer}>
        <div className={styles.profileBackground} />
        <div className={styles.profilePicture}>
          <img src={imgSrc} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
