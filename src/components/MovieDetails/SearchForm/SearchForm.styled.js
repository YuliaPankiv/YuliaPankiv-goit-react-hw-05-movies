import styled from '@emotion/styled';

export const SearchForm = styled.form`
  position: relative;
  max-width: 300px;
  margin-top: 0;
  margin-right: 4px;

  > input {
    width: 280px;
    display: block;
    padding: 10px 14px;
    font-size: 12px;
    line-height: 1.17;
    /* border: 0; */
    border-radius: 4px;
    transition: all 0.35s ease-out;
    margin: 0;
  }

  > button {
    margin: 0;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transition: all 0.35s ease-out;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
