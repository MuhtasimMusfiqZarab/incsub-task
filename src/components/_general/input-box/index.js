import React from 'react';
import styles from './style.module.scss';


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

