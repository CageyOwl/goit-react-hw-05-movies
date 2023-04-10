import PropTypes from 'prop-types';
import { StyledGenresBar, StyledGenre } from './movieInfo.styles';


export default function MovieGenresBar({ genres }) {
  return (
    <StyledGenresBar>
      {genres.map(g => <StyledGenre key={g.id}>{g.name}</StyledGenre>)}
    </StyledGenresBar>
  );
}


MovieGenresBar.propTypes = {
  genres: PropTypes.array.isRequired,
}