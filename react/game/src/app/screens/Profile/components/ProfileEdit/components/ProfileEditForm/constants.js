import { required, minValueAge, maxValueAge, url } from '@validation/forms';
import formNames from '@constants/formNames';
import Input from '@components/CustomFormFields/Input';
import Textarea from '@components/CustomFormFields/Textarea';

const { fields } = formNames.EDIT_PROFILE;
const placeholders = formNames.PLACEHOLDERS;

export const formFields = [
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
