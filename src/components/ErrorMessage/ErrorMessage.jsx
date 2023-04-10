import PropTypes from 'prop-types';
import { StyledParagraph } from './error.styles';


export default function ErrorMessage({ message }) {
  return <StyledParagraph>{message}</StyledParagraph>;
}


ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};