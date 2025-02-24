import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputField } from '../../utils/InputField.jsx';

export default function ContactForm({
  fields,
  formData,
  onChange,
  onSubmit,
  recaptchaRef,
  siteKey,
  message,
  isLoading,
}) {
  return (
    <div className="p-8 rounded-lg lg:mx-24 2xl:mr-80 bg-zinc-800 md:w-1/2">
      <form className="space-y-4" onSubmit={onSubmit}>
        {fields.map(({ name, type, placeholder }) => (
          <InputField
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={formData[name]}
            onChange={onChange}
          />
        ))}

        <div className="flex items-center">
          <input
            type="checkbox"
            name="conditionsAccepted"
            checked={formData.conditionsAccepted}
            onChange={onChange}
            className="mr-2"
          />
          <label>J&apos;accepte la politique de confidentialité.</label>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          className="-ml-8 scale-75 lg:ml-0 lg:scale-100"
        />

        {/* Bouton avec Spinner */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-md text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 disabled:opacity-50 flex justify-center items-center"
        >
          {isLoading ? (
            <>
              <svg
                className="w-5 h-5 mr-2 text-zinc-50 animate-spin"
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
            'Envoyer'
          )}
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${
            message.isSuccess ? 'text-emerald-500' : 'text-orange-500'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}

ContactForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  recaptchaRef: PropTypes.object.isRequired,
  siteKey: PropTypes.string.isRequired,
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isSuccess: PropTypes.bool.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
};
