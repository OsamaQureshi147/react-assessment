import { gql } from '@apollo/client';

export const ALL_FILMS = gql`
  query getAllFilms {
    allFilms {
      films {
        title
        id
      }
    }
  }
`;
