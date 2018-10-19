import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import formNames from '@constants/formNames';
import Button from '@components/Form/Button';
import Input from '@components/Form/Input';
import Textarea from '@components/Form/Textarea';
import { required, minValueAge, maxValueAge, url } from '@validation/forms';

import styles from './styles.scss';

function ProfileEditForm({ handleSubmit, pristine, submitting, errorMessage, activateEditProfile }) {
  return (
    <div className={styles.editProfileFormContainer}>
      <form className={styles.editProfileForm} onSubmit={handleSubmit}>
        <Field
          validate={[required]}
          name="firstName"
          id="firstName"
          type="text"
          placeholder="Pepito"
          label="First Name"
          component={Input}
        />
        <Field
          validate={[required]}
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Perez"
          label="Last Name"
          component={Input}
        />
        <Field
          validate={[required, minValueAge, maxValueAge]}
          name="age"
          id="age"
          type="number"
          label="Age"
          component={Input}
        />
        <Field
          validate={[required, minValueAge, maxValueAge]}
          name="aboutMe"
          id="aboutMe"
          rows={5}
          resize={false}
          label="About me"
          component={Textarea}
        />
        <Field
          validate={[required, url]}
          name="profilePicture"
          id="profilePicture"
          type="text"
          placeholder="https://pbs.twimg.com/profile_images/879408429751824384/1I5KApVU_400x400.jpg"
          label="Profile Picture URL"
          component={Input}
        />

        <Field
          validate={[required, url]}
          name="backgroundPicture"
          id="backgroundPicture"
          type="text"
          placeholder="http://www.startupchile.org/wp-content/uploads/2018/03/Wolox-Logo.png"
          label="Background Picture URL"
          component={Input}
        />

        {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
        <div className={styles.editProfileBtnContainer}>
          <Button
            type="submit"
            visible
            disabled={pristine || submitting}
            title="Click to save"
            classes={styles.editProfileButtons}
          >
            Save
          </Button>
          <Button
            type="button"
            onClick={activateEditProfile}
            classes={`${styles.editProfileCancelBtn} ${styles.editProfileButtons}`}
            visible
            title="Click to cancel the profile edit"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

ProfileEditForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  activateEditProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  initialValues: state.auth.userInfo,
  errorMessage: state.profile.errorMessage,
  successMessage: state.profile.successMessage
});

const ReduxFormProfileForm = reduxForm({
  form: formNames.EDIT_PROFILE_FORM
})(ProfileEditForm);

export default connect(mapStateToProps)(ReduxFormProfileForm);
