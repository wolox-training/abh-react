import React from 'react';
import { Field } from 'redux-form';

export const mapField = field => (
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
);
