import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { InputField } from '../../utils/InputField.jsx';
import FormButton from '../button/FormButton.jsx';

export default function ContactCollabForm({
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
    <div className="p-8 rounded-lg mt-6 lg:mr-24 2xl:mr-80 bg-zinc-200 w-full">
      <form className="space-y-4" onSubmit={onSubmit}>
        {/* Select pour la catégorie */}
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
            className="block w-full px-5 py-3 mt-2 bg-sky-50 border rounded-md text-zinc-600 placeholder-zinc-400 border-zinc-200 focus:border-sky-400 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
          >
            <option value="affichage">
              Problème d’affichage ou mise en page incorrecte.
            </option>
            <option value="formulaire">
              Formulaire ne s’envoie pas ou affiche une erreur.
            </option>
            <option value="chargement">
              Page ou fonctionnalité qui ne charge pas correctement.
            </option>
            <option value="lien">Lien ou bouton ne fonctionnant pas.</option>
            <option value="erreur">Message d’erreur ou bug inattendu.</option>
            <option value="application">
              Problème spécifique à l’application.
            </option>
            <option value="performance">
              Lenteur ou problème de performance du site.
            </option>
            <option value="autres">Autres...</option>
          </select>
        </div>

        {/* Mapping des champs de contact */}
        {fields.map(({ name, type, placeholder, autoComplete, label }) => (
          <InputField
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            value={formData[name] || ''}
            onChange={onChange}
            label={label}
          />
        ))}

        {/* Checkbox pour la politique de confidentialité */}
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

        {/* ReCAPTCHA */}
        <div className="mt-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            className="-ml-8 scale-75 lg:ml-0 lg:scale-100"
          />
        </div>

        {/* Bouton de soumission */}
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

ContactCollabForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      autoComplete: PropTypes.string,
      label: PropTypes.string,
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
