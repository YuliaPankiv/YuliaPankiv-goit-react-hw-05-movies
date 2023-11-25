import { Inform } from 'components/MovieDetails/MovieDetails.styled';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkAdditionalInform = () => {
  return (
    <Inform>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
    </Inform>
  );
};

export default LinkAdditionalInform;
