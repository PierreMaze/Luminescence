import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkButton = ({
  to,
  children,
  className = '',
  rel = 'noreferrer',
  ...props
}) => {
  return (
    <Link
      to={to}
      rel={rel}
      className={`inline-flex items-center justify-center w-full md:w-fit text-center px-6 py-3 text-sm font-semibold text-white bg-sky-500 rounded-md transition-colors duration-200 hover:bg-sky-600 ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rel: PropTypes.string,
};

export default LinkButton;
