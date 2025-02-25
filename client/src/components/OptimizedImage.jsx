import PropTypes from 'prop-types';

const OptimizedImage = ({ src, alt, className = '' }) => {
  return <img src={src} alt={alt} loading="lazy" className={`${className}`} />;
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default OptimizedImage;
