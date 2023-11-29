import React, { useEffect, useState, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import Arrows from './Controls/Arrows';
import SlidesList from './widgets/SlideList';
import Dots from './Controls/Dots';

export const SliderContext = createContext();

const Slider = function ({ width, height, autoPlay, autoPlayTime, movie }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const { cast } = movie;
  useEffect(() => {
    if (cast) {
      const loadData = async () => {
        const images = await cast.filter(({ profile_path }) => {
          if (profile_path) {
            return profile_path;
          }
        });

        setItems(images);
      };
      loadData();
    }
  }, [cast]);

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideNumber = 0;

      if (slide + direction < 0) {
        slideNumber = items.length - 1;
      } else {
        slideNumber = (slide + direction) % items.length;
      }

      setSlide(slideNumber);
    },
    [items.length, slide]
  );

  const goToSlide = number => {
    setSlide(number % items.length);
  };

  const handleTouchStart = e => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = e => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayTime, changeSlide, items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        {items.length > 0 && (
          <>
            <Arrows />
            <SlidesList />
            <Dots />
          </>
        )}
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 3000,
  width: '100%',
  height: '100%',
};

export default Slider;
