import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm({
  fields,
  formData,
  onChange,
  onSubmit,
  recaptchaRef,
  siteKey,
  message,
}) {
  return (
    <div className="p-8 rounded-lg lg:mx-24 2xl:mr-80 bg-zinc-800 md:w-1/2">
      <form className="space-y-4" onSubmit={onSubmit}>
        {fields.map(({ name, type, placeholder }) =>
          type === 'textarea' ? (
            <textarea
              key={name}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={onChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          ) : (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              value={formData[name]}
              onChange={onChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            />
          )
        )}

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

        <button
          type="submit"
          className="w-full p-2 mt-4 rounded bg-sky-600 hover:bg-sky-700"
        >
          Envoyer
        </button>
      </form>

      {message && (
        <p
          className={`mt-2 text-sm ${message.isSuccess ? 'text-sky-200' : 'text-orange-500'}`}
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
};
