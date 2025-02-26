import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputField } from '../../utils/InputField.jsx';
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
    <div className="p-8 rounded-lg lg:mx-24 2xl:mr-80 bg-zinc-200 md:w-1/2">
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
            target="_blank"
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
