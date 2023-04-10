import PropTypes from 'prop-types';
import { DEFAULT_POSTER_URL, TMDB_IMAGES_BASE_URL } from 'services/constants';
import CastGalleryItem from './CastGalleryItem';

import { StyledGallery } from 'components/MoviesGallery/moviesGallery.styles';


export default function CastGallery({ cast }) {
  return (
    <StyledGallery>
      {cast.map(c => (
        <CastGalleryItem
          key={c.id}
          name={c.name || 'Unknown name'}
          photoURL={
            c.profile_path ? `${TMDB_IMAGES_BASE_URL}${c.profile_path}` : DEFAULT_POSTER_URL
          }
        />
      ))}
    </StyledGallery>
  );
}



CastGallery.propTypes = {
  cast: PropTypes.array,
};