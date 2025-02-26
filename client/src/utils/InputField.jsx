import PropTypes from 'prop-types';

export function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <div className="w-full mt-4">
      {label && (
        <label htmlFor={name} className="block mb-2 text-sm text-zinc-600">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full px-5 py-3 mt-2 bg-sky-50 border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
          {...props}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="block w-full px-5 py-3 mt-2 bg-sky-50 border rounded-md text-zinc-700 placeholder-zinc-400 border-zinc-200 focus:ring-sky-400 focus:outline-none focus:ring focus:ring-opacity-40"
          {...props}
        />
      )}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
