import styled from 'styled-components';


const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  max-width: 1170px;
  padding: 20px 40px;
  font-size: 24px;
  background-color: #ddf;
  box-shadow: 0px 9px 15px 2px rgba(170, 170, 170, 0.81);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 40px;
  margin: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  & a {
    font-weight: 700;
    color: #777;
    text-decoration: none;
  }
  & a.active {
    color: #070;
  }
`;

export { StyledHeader, StyledList, StyledListItem };
