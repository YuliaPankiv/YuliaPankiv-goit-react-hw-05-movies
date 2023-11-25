import React from 'react';
import SlideTitle from './SlideTitle';
import SlideImage from './SlideImage';

import '../styles.scss';

export default function Slide({ data: { profile_path, name, character } }) {
  return (
    <>
      {profile_path && (
        <div className="slide">
          <SlideImage
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
            width={100}
          />

          <SlideTitle title={name} />
          <SlideTitle title={`Character: ${character}`} />
        </div>
      )}
    </>
  );
}
