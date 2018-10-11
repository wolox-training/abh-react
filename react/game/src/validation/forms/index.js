/* eslint-disable no-useless-escape */
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* eslint-enable */

export const required = (value, ...rest) => {
  const inputName = rest[2];
  return value ? undefined : `${inputName} is required`;
};

export const minLength = (value, ...rest) => {
  const inputName = rest[2];
  return value.length < 8 ? `${inputName} must be at least 8 characters` : undefined;
};

export const email = value =>
  emailRegex.test(String(value).toLowerCase()) ? undefined : `${value} is not a valid email`;
