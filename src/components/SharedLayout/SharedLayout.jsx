import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import { Container, Main } from 'components/app.styles';
import { StyledHeader, StyledList, StyledListItem } from './header.styles';


export default function SharedLayout() {
  return (
    <Container>
      <StyledHeader>
        <nav>
          <StyledList>
            <StyledListItem>
              <NavLink to="/">Home</NavLink>
            </StyledListItem>
            <StyledListItem>
              <NavLink to="/movies">Movies</NavLink>
            </StyledListItem>
          </StyledList>
        </nav>
      </StyledHeader>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
