import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/Form/Button';

import ProfileInfo from './components/ProfileInfo';
import ProfileEdit from './components/ProfileEdit';
import styles from './styles.scss';

function ProfileLayout({ activateEditProfile, editingProfile, profilePicture, backgroundPicture }) {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePageContainer}>
        <div
          className={styles.profileBackground}
          style={{
            backgroundImage: `url(${backgroundPicture})`
          }}
        />
        <div className={styles.profilePicture}>
          <img src={profilePicture} className={styles.profilePictureImg} alt="profile" />
        </div>
        <div className={styles.editProfileBtnHolder}>
          <Button
            type="button"
            onClick={activateEditProfile}
            classes={styles.editProfileBtn}
            visible={!editingProfile}
            title="Click to edit your profile information"
          >
            <i className="fas fa-user-edit" />
          </Button>
        </div>
        <div className={styles.profileHolder}>
          {!editingProfile ? <ProfileInfo /> : <ProfileEdit activateEditProfile={activateEditProfile} />}
        </div>
      </div>
    </div>
  );
}

ProfileLayout.propTypes = {
  activateEditProfile: PropTypes.func.isRequired,
  editingProfile: PropTypes.bool.isRequired,
  backgroundPicture: PropTypes.string,
  profilePicture: PropTypes.string
};

export default ProfileLayout;
