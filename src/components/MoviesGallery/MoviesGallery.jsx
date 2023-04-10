import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DEFAULT_POSTER_URL, TMDB_IMAGES_BASE_URL } from 'services/constants';

import MoviesGalleryItem from './MoviesGalleryItem';

import { StyledGallery } from './moviesGallery.styles';


export default function MoviesGallery({ moviesDataArr }) {
  const location = useLocation();
  // Because we can go to '/movies/:movieId' route from 'Home' and 'Movies' pages, where 'Movies' already has '/movies' route part
  const pathPrefix =
    location.pathname === '/' ? 'movies/' : '';

  return (
    <StyledGallery>
      {moviesDataArr.map(m => (
        <MoviesGalleryItem
          key={m.id}
          pathPrefix={pathPrefix}
          movieId={m.id}
          title={m.name || m.title || m.original_title || 'No title'}
          posterURL={
            m.poster_path
              ? `${TMDB_IMAGES_BASE_URL}/${m.poster_path}`
              : DEFAULT_POSTER_URL
          }
          location={location}
        />
      ))}
    </StyledGallery>
  );
}



MoviesGallery.propTypes = {
  moviesDataArr: PropTypes.array.isRequired,
};