import PropTypes from 'prop-types';

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`duration-300 ease-in-out delay-100 px-5 py-2.5 lg:py-3 2xl:px-6 2xl:py-3.5 text-sm lg:text-base font-medium text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300  rounded-md text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
