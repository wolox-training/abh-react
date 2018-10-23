import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { required, minValueAge, maxValueAge, url } from '@validation/forms';
import formNames from '@constants/formNames';
import Input from '@components/Form/Input';
import Textarea from '@components/Form/Textarea';

import ProfileEditFormLayout from './layout';

const { fields } = formNames.EDIT_PROFILE;
const placeholders = formNames.PLACEHOLDERS;
const formFields = [
  {
    type: 'text',
    validate: [required],
    component: Input,
    name: fields.firstName.name,
    id: fields.firstName.id,
    label: fields.firstName.label,
    placeholder: placeholders.NAME
  },
  {
    type: 'text',
    validate: [required],
    component: Input,
    name: fields.lastName.name,
    id: fields.lastName.id,
    label: fields.lastName.label,
    placeholder: placeholders.LASTNAME
  },
  {
    type: 'number',
    validate: [required, minValueAge, maxValueAge],
    component: Input,
    name: fields.age.name,
    id: fields.age.id,
    label: fields.age.label,
    placeholder: placeholders.AGE
  },
  {
    type: 'text',
    validate: [required],
    component: Textarea,
    id: fields.aboutMe.id,
    name: fields.aboutMe.name,
    label: fields.aboutMe.label,
    placeholder: placeholders.ABOUT,
    rows: 5,
    resize: false
  },
  {
    type: 'text',
    validate: [required, url],
    component: Input,
    name: fields.profilePicture.name,
    id: fields.profilePicture.id,
    label: fields.profilePicture.label,
    placeholder: placeholders.URL
  },
  {
    type: 'text',
    validate: [required, url],
    component: Input,
    name: fields.backgroundPicture.name,
    id: fields.backgroundPicture.id,
    label: fields.backgroundPicture.label,
    placeholder: placeholders.URL
  }
];

function ProfileEditForm({ onSubmit, errorMessage, successMessage, activateEditProfile, initialValues }) {
  return (
    <ProfileEditFormLayout
      onSubmit={onSubmit}
      errorMessage={errorMessage}
      successMessage={successMessage}
      activateEditProfile={activateEditProfile}
      initialValues={initialValues}
      formFields={formFields}
    />
  );
}

ProfileEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
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
  })
};

const mapStateToProps = state => ({
  initialValues: state.profile.info,
  errorMessage: state.profile.errorMessage,
  successMessage: state.profile.successMessage
});

export default connect(mapStateToProps)(ProfileEditForm);
