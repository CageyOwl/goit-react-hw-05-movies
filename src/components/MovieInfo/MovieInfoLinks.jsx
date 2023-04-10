import { NavLink } from 'react-router-dom';

import {
  StyledInfoTitle,
  StyledAdditionalInfoLinksContainer,
  StyledAdditionalInfoLinksList,
} from './movieInfo.styles';

export default function MovieInfoLinks({ location }) {
  return (
    <StyledAdditionalInfoLinksContainer>
      <StyledInfoTitle className='links-title'>Additional information</StyledInfoTitle>
      <StyledAdditionalInfoLinksList>
        <li>
          <NavLink to="cast" state={location.state}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={location.state}>
            Reviews
          </NavLink>
        </li>
      </StyledAdditionalInfoLinksList>
    </StyledAdditionalInfoLinksContainer>
  );
}
