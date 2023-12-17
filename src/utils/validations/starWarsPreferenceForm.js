import Joi from 'joi';

export const userMoviePreferenceSchema = Joi.object({
  firstName: Joi.string().required().min(3).max(10).label('First name'),
  lastName: Joi.string().required().min(3).max(10).label('Last name'),
  favouriteMovie: Joi.string(),
});
