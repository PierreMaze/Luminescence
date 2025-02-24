import PropTypes from 'prop-types';
import { InputField } from '../../utils/InputField.jsx';

export default function NewsletterForm({
  fields,
  formData,
  onChange,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col max-w-xs mx-auto mt-6 lg:mx-0 lg:max-w-xl lg:flex-row lg:gap-x-4"
    >
      {fields.map(({ name, type, placeholder, autoComplete }) => (
        <InputField
          key={name}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={formData[name] || ''}
          onChange={onChange}
          className="w-full flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
        />
      ))}

      <button
        type="submit"
        className="flex-none rounded-md mt-4 bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600"
      >
        S&apos;abonner
      </button>
    </form>
  );
}

NewsletterForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      autoComplete: PropTypes.string,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
