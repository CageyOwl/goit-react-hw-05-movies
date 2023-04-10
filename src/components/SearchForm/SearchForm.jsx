import PropTypes from 'prop-types';

import { StyledInput, StyledButton } from './searchForm.styles';


export default function SearchForm({ onSubmit }) {
  return (
    <form name="search-form" onSubmit={onSubmit}>
      <StyledInput name="search-input" type="text" />
      <StyledButton type="submit">Submit</StyledButton>
    </form>
  );
}



SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};