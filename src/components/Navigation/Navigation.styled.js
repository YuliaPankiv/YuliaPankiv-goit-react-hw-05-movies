import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: scale(1.02);

    color: white;
    background-color: black;
    box-shadow: 0 1px 1px #0000001f, 0 4px 4px #0000000f, 1px 4px 6px #00000029;
  }

  &:hover {
    transform: scale(1.1);
    /* box-shadow: 0 1px 1px #0000001f, 0 4px 4px #0000000f, 1px 4px 6px #00000029; */
  }
`;
