import React from 'react';
import { useForm } from 'react-hook-form';
import classes from './styles.module.css';
import { InputField } from '../InputField';
import { Select } from '../Select';
import { joiResolver } from '@hookform/resolvers/joi';
import { userMoviePreferenceSchema } from '../../utils/validations/starWarsPreferenceForm';

export const StarWarsPreferenceForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: joiResolver(userMoviePreferenceSchema),
  });

  const onSubmit = (data) => console.log('Submitted Data', data);

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {errors &&
          Object.values(errors).map((error) => (
            <p key={error.message} className={classes.formValidationError}>
              {error.message}
            </p>
          ))}

        <div className={classes.gridContainer}>
          <InputField
            name='firstName'
            label='first name *'
            {...register('firstName')}
          />
          <InputField
            name='lastName'
            label='last name *'
            {...register('lastName')}
          />
          <Select
            name='movie'
            label='Favorite Star Wars movie'
            options={[{ value: 'dummyMovie', title: 'Dummy Movie' }]}
            {...register('favouriteMovie')}
          />
        </div>
      </div>
      <button className={classes.submitButton} type='submit'>
        Submit
      </button>
    </form>
  );
};
