import ReviewsListItem from './ReviewsListItem';

import { StyledReviewsList } from './reviews.styles';


export default function ReviewsList({ reviews }) {
  return (
    <StyledReviewsList>
      {reviews.map(r => (
        <ReviewsListItem
          key={r.id}
          author={r.author || 'Unknown'}
          review={r.content || 'Empty review'}
        />
      ))}
    </StyledReviewsList>
  );
}
