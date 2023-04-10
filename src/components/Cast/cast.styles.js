import styled from "styled-components";


const StyledCastGallery = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const StyledCastImg = styled.img`
    width: 100%;
    height: 500px;
`;


export { StyledCastGallery, StyledCastImg };