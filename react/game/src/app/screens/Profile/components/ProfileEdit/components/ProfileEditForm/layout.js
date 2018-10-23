import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import formNames from '@constants/formNames';
import Button from '@components/Form/Button';

import styles from './styles.scss';

function ProfileEditFormLayout({
  handleSubmit,
  pristine,
  submitting,
  errorMessage,
  successMessage,
  activateEditProfile,
  formFields
}) {
  const { btnTooltips, btnTitles } = formNames.EDIT_PROFILE;
  return (
    <div className={styles.editProfileFormContainer}>
      <form className={styles.editProfileForm} onSubmit={handleSubmit}>
        {formFields.map(field => (
          <Field
            key={field.id}
            type={field.type}
            validate={field.validate}
            component={field.component}
            name={field.name}
            id={field.id}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
        {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
        {errorMessage && <div className={styles.errorMessage}>Error: {errorMessage}</div>}
        <div className={styles.editProfileBtnContainer}>
          <Button
            type="submit"
            visible
            disabled={pristine || submitting}
            title={btnTooltips.save}
            classNames={styles.editProfileButtons}
          >
            {btnTitles.save}
          </Button>
          <Button
            type="button"
            onClick={activateEditProfile}
            classNames={`${styles.editProfileCancelBtn} ${styles.editProfileButtons}`}
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

ProfileEditFormLayout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  activateEditProfile: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    firstName: PropTypes.string,
    id: PropTypes.number,
    lastName: PropTypes.string,
    age: PropTypes.string,
    aboutMe: PropTypes.string,
    profilePicture: PropTypes.string,
    backgroundPicture: PropTypes.string
  }),
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      validate: PropTypes.array,
      component: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
      label: PropTypes.string,
      placeholder: PropTypes.string
    })
  )
};

export default reduxForm({
  form: formNames.EDIT_PROFILE.name
})(ProfileEditFormLayout);
