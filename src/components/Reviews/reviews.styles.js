import styled from "styled-components";


const StyledReviewsList = styled.ul`
    padding: 12px;
`;

const StyledReviewsListItem = styled.li`
    margin-bottom: 12px;
    padding: 12px;
    background-color: #eef;
`;

const StyledReviewTextPart = styled.div`
    display: flex;
    align-items: baseline;
    font-size: 16px;
    text-align: justify;
`;

const StyledTitle = styled.p`
    margin: 4px 12px;
    font-size: 20px;
    font-weight: 700px;
`;


export { StyledReviewsList, StyledReviewsListItem, StyledReviewTextPart, StyledTitle};