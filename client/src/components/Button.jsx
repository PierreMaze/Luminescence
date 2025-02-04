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

export const AnchorButton = ({
  children,
  href,
  target = '_self',
  className = '',
  label,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={`duration-300 ease-in-out delay-100 leading-7 py-2.5 px-2 lg:py-3 2xl:px-4 2xl:py-3.5 text-sm lg:text-base font-medium text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300  rounded-md text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 inline-block ${className}`}
    >
      {children}
    </a>
  );
};

AnchorButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const MapLinkIcon = ({
  children,
  icon: Icon,
  href,
  target = '_self',
  className = '',
  label,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={`inline-flex duration-300 ease-in-out delay-100 leading-7 py-2.5 px-2 lg:py-3 2xl:px-4 2xl:py-3.5 text-sm lg:text-base font-medium text-black bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white ring-2 outline-none ring-zinc-800 rounded-md text-center  ${className}`}
    >
      {children}
      <Icon className="text-current size-5 ml-2 mt-1" />
    </a>
  );
};

MapLinkIcon.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export const IconButton = ({ icon, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`duration-300 ease-in-out delay-100 flex items-center justify-center gap-2 px-4 py-2  rounded-md bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 text-white dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 ${className}`}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export const SubmitButton = ({ children, className = '' }) => {
  return (
    <button
      type="submit"
      className={`duration-300 ease-in-out delay-100 px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-md dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${className}`}
    >
      {children}
    </button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const DisabledButton = ({ children, className = '' }) => {
  return (
    <button
      type="button"
      disabled
      className={`duration-300 ease-in-out delay-100 px-5 py-2.5 text-sm font-medium text-gray-400 bg-gray-200 cursor-not-allowed  rounded-md dark:bg-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </button>
  );
};

DisabledButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
