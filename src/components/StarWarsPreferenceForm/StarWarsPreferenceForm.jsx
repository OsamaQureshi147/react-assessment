import React from 'react';
import classes from './styles.module.css';
import { InputField } from '../InputField';
import { Select } from '../Select';

export const StarWarsPreferenceForm = () => {
  return (
    <form className={classes.formContainer}>
      <div>
        <p className={classes.formValidationError}>
          You need to enter a first name.
        </p>
        <p className={classes.formValidationError}>
          You need to enter a last name.
        </p>
        <InputField name='firstName' label='first name' required />
        <InputField name='lastName' label='last name' required />
        <Select
          name='movie'
          label='Favorite Star Wars movie'
          options={[{ value: 'dummyMovie', title: 'Dummy Movie' }]}
          required
        />
      </div>
      <button className={classes.submitButton} type='submit'>
        Submit
      </button>
    </form>
  );
};
