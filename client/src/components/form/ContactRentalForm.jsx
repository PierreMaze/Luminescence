import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputField } from '../../utils/InputField.jsx';
import { Link } from 'react-router-dom';
import FormButton from '../button/FormButton.jsx';

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
        {fields.map(({ name, type, placeholder, autoComplete }) => (
          <InputField
            key={name}
            name={name}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            value={formData[name]}
            onChange={onChange}
            label={placeholder}
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
          <label className="text-sm text-zinc-400">
            J&apos;accepte et je comprends la{' '}
            <Link
              to="/politique-confidentialite"
              rel="noopener noreferrer"
              target="_blank"
              className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
            >
              politique de confidentialité
            </Link>
            .
          </label>
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          className="-ml-8 scale-75 lg:ml-0 lg:scale-100"
        />

        <FormButton isLoading={isLoading} label="Envoyer" />
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
  label: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};
