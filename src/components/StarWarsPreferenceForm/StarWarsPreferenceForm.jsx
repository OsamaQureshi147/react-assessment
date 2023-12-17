import { InputField } from '../InputField';
import { Select } from '../Select';
import { useStarWarsPreferenceForm } from './useStarWarsPreferenceForm';
import classes from './styles.module.css';

export const StarWarsPreferenceForm = () => {
  const {
    isFormSubmitted,
    fetchMoviesError,
    loadingMovies,
    movieOptions,
    validationErrors,
    register,
    handleFormSubmit,
  } = useStarWarsPreferenceForm();

  if (isFormSubmitted)
    return <p style={{ margin: 'auto' }}>Thanks for submitting the form!</p>;

  if (loadingMovies) return <></>;

  if (fetchMoviesError) {
    return (
      <h2 style={{ color: 'red' }}>
        Unable to fetch movies. Check your connection!
      </h2>
    );
  }

  return (
    <form className={classes.formContainer} onSubmit={handleFormSubmit}>
      <div>
        {validationErrors &&
          Object.values(validationErrors).map((error) => (
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
