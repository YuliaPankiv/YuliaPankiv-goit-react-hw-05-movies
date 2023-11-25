import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { SearchForm } from './SearchForm.styled';
const SearchFormInput = ({ ClickOnButton }) => {
  return (
    <SearchForm className="" onSubmit={ClickOnButton}>
      <input type="text" name="query" />
      <button type="submit">
        <CiSearch />
      </button>
    </SearchForm>
  );
};

export default SearchFormInput;
