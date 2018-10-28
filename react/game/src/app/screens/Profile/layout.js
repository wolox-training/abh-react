import React from 'react';
import PropTypes from 'prop-types';
import Button from '@components/CustomFormFields/Button';
import formNames from '@constants/formNames';
import profileTypes from '@types/Profile';

import ProfileInfo from './components/ProfileInfo';
import ProfileEdit from './components/ProfileEdit';
import styles from './styles.scss';

function ProfileLayout({ activateEditProfile, editingProfile, profileInfo, loading }) {
  const { backgroundPicture, profilePicture } = profileInfo;
  const actionTooltip = formNames.EDIT_PROFILE.btnTooltips.action;
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
            disabled={loading}
            classNames={styles.editProfileBtn}
            visible={!editingProfile}
            title={actionTooltip}
          >
            <i className="fa">&#xf4ff;</i>
          </Button>
        </div>
        <div className={styles.profileHolder}>
          {!editingProfile ? (
            <ProfileInfo loading={loading} profileInfo={profileInfo} />
          ) : (
            <ProfileEdit
              loading={loading}
              userId={profileInfo.id}
              activateEditProfile={activateEditProfile}
            />
          )}
        </div>
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
