import PropTypes from 'prop-types';

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
