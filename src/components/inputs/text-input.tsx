import { ChangeEvent, useState } from 'react';

import { TextInputModel } from 'models';

import './inputs.module.scss';

const TextInput = ({
  id,
  name,
  placeholder,
  label,
  required = false,
  className = '',
  onChangeValue = () => {},
}: TextInputModel) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onChangeValue({ value, name });
  };

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        required={required}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        type='text'
        className={className}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default TextInput;
