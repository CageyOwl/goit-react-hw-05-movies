import styled from 'styled-components';

const StyledGallery = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 20px;

  & a{
    text-decoration: none;
  }
`;

const StyledGalleryItem = styled.li`
  text-align: center;
  background-color: #fff;
  border: 1px solid navy;
  border-bottom-left-radius: 64px;
  border-bottom-right-radius: 64px;
`;

const StyledGalleryImg = styled.img`
  display: block;
  width: 100%;
  height: 500px;
`;

const StyledTitle = styled.p`
max-width: 300px;
  margin: 12px auto;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export {StyledGallery, StyledGalleryItem, StyledGalleryImg, StyledTitle };
