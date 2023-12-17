import { useQuery } from '@apollo/client';
import { joiResolver } from '@hookform/resolvers/joi';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userMoviePreferenceSchema } from '../../utils/validations/starWarsPreferenceForm';
import { ALL_FILMS } from '../../gql/queries/starWars';

export const useStarWarsPreferenceForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: joiResolver(userMoviePreferenceSchema),
  });

  const { data, error, loading } = useQuery(ALL_FILMS);
  const movieOptions = useMemo(
    () => data?.allFilms.films.map(({ title, id }) => ({ value: id, title })),
    [data?.allFilms.films]
  );

  const onSubmit = () => setIsFormSubmitted(true);

  return {
    isFormSubmitted,
    fetchMoviesError: error,
    loadingMovies: loading,
    movieOptions,
    validationErrors: errors,
    register,
    handleFormSubmit: handleSubmit(onSubmit),
  };
};
