import styled from 'styled-components';


const StyledMovieInfoContainer = styled.div`
  display: flex;
`;

const StyledMovieMetaContainer = styled.div`
    padding: 10px 40px;
`;

const StyledAdditionalInfoLinksContainer = styled.div`
    padding: 10px 0;
    border: 1px solid navy;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 350px;
`;

const StyledMovieTitle = styled.p`
  margin: 0;
  padding: 8px;
  font-size: 32px;
  font-weight: 700;
  color: navy;
  border: 1px solid navy;
  border-radius: 8px;
`;

const StyledInfoTitle = styled.p`
  display: block;
  font-size: 20px;
  font-weight: 600;
  text-align: left;

  &.links-title {
    margin: 0;
    text-align: center;
  }
`;

const StyledUserScore = styled.p`
    font-size: 48px;
    margin: 10px 0;
`;

const StyledOverview = styled.p`
    margin: 10px 0 40px;
    text-align: justify;
`;

const StyledGenresBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const StyledGenre = styled.li`
  padding: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #aaf;
  border-radius: 16px;
`;

const StyledAdditionalInfoLinksList = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
    text-align: center;
    margin-top: 12px;

    & a {
      padding: 4px;
      color: navy;
      border-radius: 4px;
    }
    & a:hover {
      color: green;
    }
    & a.active {
      color: #fff;
      background-color: green;
    }
`;


export {
  StyledMovieInfoContainer,
  StyledMovieMetaContainer,
  StyledAdditionalInfoLinksContainer,
  StyledImg,
  StyledMovieTitle,
  StyledInfoTitle,
  StyledUserScore,
  StyledOverview,
  StyledGenresBar,
  StyledGenre,
  StyledAdditionalInfoLinksList
};
