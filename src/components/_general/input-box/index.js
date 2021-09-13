import React from 'react';
import { isValidString } from '../../../utils/validation';
import styles from './style.module.scss';

const DEFAULT_WORD_LIMIT = 120;

export default function Input({
  label, type = 'text', error, setValue,
})  {
  return(
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
  )
}

