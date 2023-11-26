import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Container, SearchForm } from './SearchForm.styled';
const SearchFormInput = ({ ClickOnButton }) => {
  return (
    <Container>
      <SearchForm onSubmit={ClickOnButton}>
        <input type="text" name="query" />
        <button type="submit">
          <CiSearch />
        </button>
      </SearchForm>
    </Container>
  );
};

export default SearchFormInput;
