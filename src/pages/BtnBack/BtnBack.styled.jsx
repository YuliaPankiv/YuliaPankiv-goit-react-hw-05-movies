import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBack = styled(NavLink)`
  padding: 3px;
  margin: 1px;

  align-items: center;

  border: 1px solid darkgray;
  border-radius: 4px;
  background: antiquewhite;
  color: black;
  font-weight: 500;
  text-decoration: none;
`;

export const BtnBack = styled.div`
  display: flex;
`;
