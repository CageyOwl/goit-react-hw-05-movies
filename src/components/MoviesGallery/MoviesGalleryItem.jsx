import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledGalleryItem, StyledGalleryImg, StyledTitle } from './moviesGallery.styles';


export default function MoviesGalleryItem({
  pathPrefix,
  movieId,
  title,
  posterURL,
  location
}) {
  return (
    <StyledGalleryItem>
      <Link to={`${pathPrefix}${movieId}`} state={{ from: location }}>
        <StyledGalleryImg src={posterURL} alt={title || `Movie ${movieId}`} />
        <StyledTitle>{title}</StyledTitle>
      </Link>
    </StyledGalleryItem>
  );
}



MoviesGalleryItem.propTypes = {
  pathPrefix: PropTypes.string,
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string,
  posterURL: PropTypes.string,
}
