import PropTypes from 'prop-types';

import { StyledReviewsListItem, StyledReviewTextPart, StyledTitle } from './reviews.styles';


export default function ReviewsListItem({ author, review }) {
  return (
    <StyledReviewsListItem>
      <StyledReviewTextPart>
        <StyledTitle>Author:</StyledTitle>
        {author}
      </StyledReviewTextPart>
      <StyledReviewTextPart>
        <StyledTitle>Review:</StyledTitle>
        {review}
      </StyledReviewTextPart>
    </StyledReviewsListItem>
  );
}



ReviewsListItem.propTypes = {
  author: PropTypes.string.isRequired,
  review: PropTypes.string,
};