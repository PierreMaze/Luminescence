import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Carousel, IconButton } from '@material-tailwind/react';

const ArrowButton = ({ onClick, direction }) => (
  <IconButton
    variant="text"
    color="white"
    size="lg"
    onClick={onClick}
    className={`!absolute top-1/2 -translate-y-1/2 flex justify-center items-center size-1 
      bg-sky-950/25 hover:bg-sky-950/50 
      ${direction === 'left' ? 'left-0 lg:left-4' : 'right-4 lg:right-4'}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={
          direction === 'left'
            ? 'M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            : 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
        }
      />
    </svg>
  </IconButton>
);

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default function ImageCarousel({ images }) {
  const handlePrev = useCallback((handlePrevFn) => handlePrevFn(), []);
  const handleNext = useCallback((handleNextFn) => handleNextFn(), []);

  return (
    <div className="px-8 -ml-12 lg:scale-90 lg:px-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <Carousel
        className="w-full ml-6 h-full lg:-ml-2 rounded-xl"
        prevArrow={({ handlePrev: handlePrevFn }) => (
          <ArrowButton
            onClick={() => handlePrev(handlePrevFn)}
            direction="left"
          />
        )}
        nextArrow={({ handleNext: handleNextFn }) => (
          <ArrowButton
            onClick={() => handleNext(handleNextFn)}
            direction="right"
          />
        )}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="object-cover w-full lg:h-[500px] 2xl:h-[1000px]"
          />
        ))}
      </Carousel>
    </div>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
