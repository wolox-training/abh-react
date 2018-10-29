import React from 'react';
import PropTypes from 'prop-types';
import profileTypes from '@types/Profile';

import ProfileInfo from './components/ProfileInfo';
import ProfileEdit from './components/ProfileEdit';
import styles from './styles.scss';

function ProfileLayout({ activateEditProfile, editingProfile, profileInfo, loading }) {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePageContainer}>
        {!editingProfile ? (
          <ProfileInfo
            loading={loading}
            profileInfo={profileInfo}
            editingProfile={editingProfile}
            activateEditProfile={activateEditProfile}
          />
        ) : (
          <ProfileEdit loading={loading} userId={profileInfo.id} activateEditProfile={activateEditProfile} />
        )}
      </div>
    </div>
  );
}

ProfileLayout.propTypes = {
  activateEditProfile: PropTypes.func.isRequired,
  editingProfile: PropTypes.bool.isRequired,
  profileInfo: profileTypes,
  loading: PropTypes.bool.isRequired
};

export default ProfileLayout;
