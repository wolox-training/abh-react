/* eslint-disable no-useless-escape */
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlRegex = new RegExp(
  '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
);
/* eslint-enable */
const INPUT_NAME_INDEX = 2;

export const required = (value, ...params) => {
  const inputName = params[INPUT_NAME_INDEX];
  return value ? undefined : `${inputName} is required`;
};

export const minLength = (value, ...params) => {
  const inputName = params[INPUT_NAME_INDEX];
  return value.length < 8 ? `${inputName} must be at least 8 characters` : undefined;
};

export const email = value =>
  emailRegex.test(String(value).toLowerCase()) ? undefined : `${value} is not a valid email`;

export const url = value =>
  urlRegex.test(String(value).toLowerCase()) ? undefined : `${value} is not a valid URL`;

export const minValueAge = value => (value && value < 1 ? `Must be at least ${1}` : undefined);

export const maxValueAge = value => (value && value > 130 ? 'You might be too old for this' : undefined);
