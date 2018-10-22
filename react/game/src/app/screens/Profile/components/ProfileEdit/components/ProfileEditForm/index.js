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

function ProfileEditForm({
  handleSubmit,
  pristine,
  submitting,
  errorMessage,
  successMessage,
  activateEditProfile
}) {
  const { fields, btnTooltips, btnTitles } = formNames.EDIT_PROFILE;
  const placeholders = formNames.PLACEHOLDERS;
  return (
    <div className={styles.editProfileFormContainer}>
      <form className={styles.editProfileForm} onSubmit={handleSubmit}>
        <Field
          type="text"
          validate={[required]}
          component={Input}
          name={fields.firstName.name}
          id={fields.firstName.id}
          label={fields.firstName.label}
          placeholder={placeholders.NAME}
        />
        <Field
          type="text"
          validate={[required]}
          component={Input}
          name={fields.lastName.name}
          id={fields.lastName.id}
          label={fields.lastName.label}
          placeholder={placeholders.LASTNAME}
        />
        <Field
          type="number"
          validate={[required, minValueAge, maxValueAge]}
          component={Input}
          name={fields.age.name}
          id={fields.age.id}
          label={fields.age.label}
          placeholder={placeholders.AGE}
        />
        <Field
          validate={[required]}
          component={Textarea}
          id={fields.aboutMe.id}
          name={fields.aboutMe.name}
          label={fields.aboutMe.label}
          placeholder={placeholders.ABOUT}
          rows={5}
          resize={false}
        />
        <Field
          type="text"
          validate={[required, url]}
          component={Input}
          name={fields.profilePicture.name}
          id={fields.profilePicture.id}
          label={fields.profilePicture.label}
          placeholder={placeholders.URL}
        />

        <Field
          type="text"
          validate={[required, url]}
          component={Input}
          name={fields.backgroundPicture.name}
          id={fields.backgroundPicture.id}
          label={fields.backgroundPicture.label}
          placeholder={placeholders.URL}
        />

        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
        {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
        <div className={styles.editProfileBtnContainer}>
          <Button
            type="submit"
            visible
            disabled={pristine || submitting}
            title={btnTooltips.save}
            classes={styles.editProfileButtons}
          >
            {btnTitles.save}
          </Button>
          <Button
            type="button"
            onClick={activateEditProfile}
            classes={`${styles.editProfileCancelBtn} ${styles.editProfileButtons}`}
            visible
            title={btnTooltips.cancel}
          >
            {btnTitles.cancel}
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
  successMessage: PropTypes.string,
  activateEditProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  initialValues: state.profile.info,
  errorMessage: state.profile.errorMessage,
  successMessage: state.profile.successMessage
});

const ReduxFormProfileForm = reduxForm({
  form: formNames.EDIT_PROFILE.name
})(ProfileEditForm);

export default connect(mapStateToProps)(ReduxFormProfileForm);
