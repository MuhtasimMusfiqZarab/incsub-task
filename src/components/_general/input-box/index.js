import React, { FC, ReactNode } from 'react';
import { isValidString } from '../../../utils/validation';
import styles from './style.module.scss';

const DEFAULT_WORD_LIMIT = 120;


export default function Input({
  size = 'medium',
  label,
  isRequired = false,
  placeholder,
  isDisabled = false,
  errorMessage = '',
  className = '',
  value,
  setValue,
  block = false,
  wordLimit,
  isNumber = false,
  isPassword = false,
  onkeydown,
  autoFocus = false,
  onBlur,
  onFocus,
  autoComplete = true,
  noSpaceAllowed = false,
}) {
  let containerClass = `${styles[size]} ${styles.container} ${className} `;
  if (block) containerClass = `${containerClass} ${styles.fullWidth}`;

  function onChange(event) {
    const { value } = event.currentTarget;
    if (!isValidString(value)) setValue(null);

    if ((wordLimit && value.length >= wordLimit) || value.length <= DEFAULT_WORD_LIMIT) {
      setValue(value.substring(0, wordLimit || DEFAULT_WORD_LIMIT));
    } else {
      setValue(value);
    }
    if (noSpaceAllowed) setValue(value.replace(/\s/g, ''));
  }

  return (
    <div className={containerClass}>
      <div className={styles.labelAndIsRquired}>
        {label && (
          <label htmlFor={label} className={isDisabled ? styles.disabled : ''}>
            {label}
            {isRequired && <span className={styles.required}>*</span>}
          </label>
        )}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
      <input
        type={isNumber ? 'number' : isPassword ? 'password' : 'text'}
        id={label}
        placeholder={placeholder}
        disabled={isDisabled}
        value={value || ''}
        onChange={onChange}
        onKeyDown={onkeydown}
        autoFocus={autoFocus}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
    </div>
  );
}
Input.WithValidation = ({
  label, type = 'text', error, setValue,
}) => (
  <label className={`${styles.customField} ${styles.search} ${error ? styles.error : ''}`}>
    <input
      type={type}
      required
      className={`${error ? styles.error : ''} `}
      onChange={(e) => setValue(e.target.value)}
    />
    <span className={`${styles.placeholder} ${error ? styles.error : ''} `}>{label}</span>
    {error ? <div className={styles.errorMessage}>{error}</div> : ''}
  </label>
);

