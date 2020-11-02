import React from 'react';

const InputLineLogin = (props) => {
  const { label,
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
    title
  } = props;


  return (
    <>
      <input
        label={label}
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
        className={error ? "inputError" : "form_login__container-input"}
        value={value}
        title={title}
        list={list && list.id}
        margin="normal"
        inputlabelprops={{
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

export default InputLineLogin;