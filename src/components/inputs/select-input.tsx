import { ChangeEvent } from 'react';

import { SelectInputModel } from 'models';

import styles from './inputs.module.scss';

const SelectInput = ({
  id,
  name,
  placeholder,
  label,
  defaultValue,
  options,
  className = '',
  required = false,
  onChangeValue = () => {},
}: SelectInputModel) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChangeValue({ value, name });
  };

  return (
    <div className={styles.SelectWrapper}>
      {label && <label htmlFor={id}>{label}</label>}

      <select
        defaultValue={defaultValue}
        required={required}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={(e) => handleChange(e)}
      >
        {options?.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
