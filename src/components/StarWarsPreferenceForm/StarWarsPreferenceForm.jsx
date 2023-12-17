import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import classes from './styles.module.css';
import { InputField } from '../InputField';
import { Select } from '../Select';
import { joiResolver } from '@hookform/resolvers/joi';
import { useQuery } from '@apollo/client';
import { userMoviePreferenceSchema } from '../../utils/validations/starWarsPreferenceForm';
import { ALL_FILMS } from '../../gql/queries/starWars';

export const StarWarsPreferenceForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: joiResolver(userMoviePreferenceSchema),
  });

  const { data, error } = useQuery(ALL_FILMS);
  const movieOptions = useMemo(
    () => data?.allFilms.films.map(({ title, id }) => ({ value: id, title })),
    [data?.allFilms.films]
  );

  const onSubmit = (data) => console.log('Submitted Data', data);
  if (error)
    return (
      <h2 style={{ color: 'red' }}>
        Unable to fetch movies. Check your connection!
      </h2>
    );
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
            options={movieOptions}
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
