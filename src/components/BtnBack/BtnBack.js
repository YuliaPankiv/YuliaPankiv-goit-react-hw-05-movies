import React from 'react';
import { BtnBack, GoBack } from './BtnBack.styled';
import { VscArrowSmallLeft } from 'react-icons/vsc';

const ButtonBack = ({ backLinkHref }) => {
  return (
    <BtnBack>
      <GoBack to={backLinkHref.current}>
        <VscArrowSmallLeft />
        Go back
      </GoBack>
    </BtnBack>
  );
};

export default ButtonBack;
