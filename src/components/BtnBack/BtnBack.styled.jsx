import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBack = styled(NavLink)`
  display: flex;
  padding: 3px;
  margin: 1px;
  align-items: center;

  border: 1px solid darkgray;
  border-radius: 4px;
  color: white;
  background-color: black;
  box-shadow: 0 1px 1px #0000001f, 0 4px 4px #0000000f, 1px 4px 6px #00000029;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
    /* box-shadow: 0 1px 1px #0000001f, 0 4px 4px #0000000f, 1px 4px 6px #00000029; */
  }
`;

export const BtnBack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
