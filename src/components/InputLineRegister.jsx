import React from 'react';

const InputLineRegister = (props) => {
  const {
    type,
    placeholder,
    required,
    minLength,
    maxLength,
    min,
    max,
    step,
    list,
    onChange,
    name,
    error,
    value,
    onClick,
    title,
  } = props;

  return (
    <>
      <input
        type={type}
        style={{ margin: 8 }}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        onClick={onClick}
        step={step}
        onChange={(event) => onChange(name, event)}
        className={error ? "inputError" : "form_register__container-input"}
        value={value}
        title={title}
        list={list && list.id}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      {list && (
        <datalist id={list.id}>
          {list.options.map((option, key) => (
            <option key={key}>{option}</option>
          ))}
        </datalist>
      )}
    </>
  );
}

export default InputLineRegister;