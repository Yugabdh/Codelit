const InputField = (props) => {
  const {
    label,
    id,
    name,
    type,
    value,
    handleChange,
    autoComplete,
    required,
    placeholder,
    disabled,
    error,
  } = props;

  return (
    <div>
      <label htmlFor={id} className="text-gray-50">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        className={`appearance-none rounded relative block w-full px-3 py-2 bg-bg-faint mt-1 text-gray-50 focus:outline-none border focus:border-gray-50 focus:z-10 sm:text-sm ${error === undefined? "border-bg-faint" : "border-red-500"}`}
      />
      {error !== undefined && (
        <span className="text-red-500 font-light">{error}</span>
      )}
    </div>
  );
}

export default InputField;
