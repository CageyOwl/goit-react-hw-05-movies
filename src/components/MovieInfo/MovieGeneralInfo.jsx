import PropTypes from 'prop-types';
import MovieGenresBar from './MovieGenresBar';

import {
  StyledMovieInfoContainer,
  StyledMovieMetaContainer,
  StyledImg,
  StyledMovieTitle,
  StyledInfoTitle,
  StyledUserScore,
  StyledOverview
} from './movieInfo.styles';


export default function MovieGeneralInfo({
  posterURL,
  title,
  userScore,
  overview,
  genres,
}) {
  return (
    <StyledMovieInfoContainer>
      <StyledImg src={posterURL} alt={title} />
      <StyledMovieMetaContainer>
        <StyledMovieTitle>{title}</StyledMovieTitle>
        <div>
          <StyledInfoTitle>User score:</StyledInfoTitle>
          <StyledUserScore>{userScore}</StyledUserScore>
        </div>
        <div>
          <StyledInfoTitle>Overview:</StyledInfoTitle>
          <StyledOverview>{overview}</StyledOverview>
        </div>
        <MovieGenresBar genres={genres || ['No information about genres.']} />
      </StyledMovieMetaContainer>
    </StyledMovieInfoContainer>
  );
}

MovieGeneralInfo.propTypes = {
  posterURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};
