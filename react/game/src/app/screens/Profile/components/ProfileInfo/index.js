import React from 'react';
import PropTypes from 'prop-types';
import profileTypes from '@types/Profile';
import Button from '@components/CustomFormFields/Button';
import formNames from '@constants/formNames';
import withLoading from '@components/withLoading';

import styles from './styles.scss';

function ProfileInfo({ profileInfo, activateEditProfile, editingProfile }) {
  const { firstName, lastName, age, aboutMe, backgroundPicture, profilePicture } = profileInfo;
  const actionTooltip = formNames.EDIT_PROFILE.btnTooltips.action;

  return (
    <div className={styles.profileInfoContainer}>
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
          classNames={styles.editProfileBtn}
          visible={!editingProfile}
          title={actionTooltip}
        >
          <i className="fa">&#xf4ff;</i>
        </Button>
      </div>
      <div className={styles.profileHolder}>
        <h1 className={styles.mainInfo}>{`${firstName} ${lastName}, ${age}`}</h1>
        <div className={styles.aboutMeContainer}>
          <h2 className={styles.aboutMeTitle}>About {firstName}</h2>
          <h3 className={styles.aboutMeContent}>{aboutMe}</h3>
        </div>
      </div>
    </div>
  );
}

ProfileInfo.propTypes = {
  profileInfo: profileTypes,
  activateEditProfile: PropTypes.func.isRequired,
  editingProfile: PropTypes.bool.isRequired
};

const external = false;
export default withLoading(ProfileInfo, external);
