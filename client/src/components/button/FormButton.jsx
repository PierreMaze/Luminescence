import PropTypes from 'prop-types';

export default function FormButton({ label, isLoading }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-md text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 disabled:opacity-50 flex justify-center items-center"
    >
      {isLoading ? (
        <>
          <svg
            className="w-5 h-5 mr-2 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0 8.5 3.5V0a8 8 0 00-8 8h4z"
            />
          </svg>
          Envoi en cours…
        </>
      ) : (
        label
      )}
    </button>
  );
}

FormButton.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

FormButton.defaultProps = {
  label: 'Envoyer',
};
