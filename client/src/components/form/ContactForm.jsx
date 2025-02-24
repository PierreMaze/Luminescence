import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { InputField } from './InputField';

export default function ContactForm({
  formData,
  onChange,
  onSubmit,
  recaptchaRef,
  siteKey,
  message,
  isLoading,
}) {
  return (
    <div className="p-8 rounded-lg mt-6 lg:mr-24 2xl:mr-80 bg-zinc-800 w-full">
      <form className="space-y-4" onSubmit={onSubmit}>
        <InputField
          label="Nom / Entreprise"
          name="name"
          type="text"
          placeholder="John DOE / DOECORP."
          value={formData.name}
          onChange={onChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          value={formData.email}
          onChange={onChange}
        />

        <InputField
          label="N° Téléphone"
          name="phone"
          type="text"
          placeholder="06 06 06 06 06"
          value={formData.phone}
          onChange={onChange}
        />

        <div className="w-full mt-4">
          <label
            htmlFor="category"
            className="block mb-2 text-sm text-zinc-600"
          >
            Quel est votre sujet ?
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={onChange}
            required
            className="block w-full px-5 py-3 mt-2 bg-white border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="atelier">
              Questions sur la création d’atelier.
            </option>
            <option value="evenement">
              Questions à propos des évènements à Luminescence.
            </option>
            <option value="bar">Questions à propos du bar.</option>
            <option value="location">Questions à propos de la location.</option>
            <option value="traiteur">Questions à propos du traiteur.</option>
            <option value="cabinet">Questions à propos du cabinet.</option>
            <option value="autres">Autres..</option>
          </select>
        </div>

        <InputField
          label="Message"
          name="message"
          type="textarea"
          placeholder="Dîtes-nous en plus..."
          value={formData.message}
          onChange={onChange}
        />

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            name="conditionsAccepted"
            checked={formData.conditionsAccepted}
            onChange={onChange}
            className="mr-2"
          />
          <label className="text-sm text-zinc-600">
            J&apos;accepte et je comprends la{' '}
            <a
              href="/politique-confidentialite"
              rel="noopener noreferrer"
              className="duration-300 ease-linear delay-75 hover:underline hover:text-sky-600 hover:underline-offset-2 hover:decoration-2 hover:decoration-sky-600 text-sky-600"
            >
              politique de confidentialité
            </a>
            .
          </label>
        </div>

        <div className="mt-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            className="-ml-8 scale-75 lg:ml-0 lg:scale-100"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-md text-zinc-50 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-opacity-40 disabled:opacity-50"
        >
          {isLoading ? 'Envoi en cours…' : 'Envoyer'}
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
