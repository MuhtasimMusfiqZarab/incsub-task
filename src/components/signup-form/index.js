import React, { useState } from 'react';
import validator from 'validator';
import  Input  from '../_general/input-box';
import styles from './style.module.scss';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  //check for password length
  const checkPassword = (password) => {
    const regex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.mainHeaderText}>Sign Up</div>
        <div className={styles.subHeaderText}>
          Please fill up this form with your credentials
        </div>
      </div>
      <Input
        label='Email'
        setValue={setEmail}
        error={
          email && !validator.isEmail(email)
            ? 'Please provide a valid email'
            : ''
        }
      />
      <Input
        label='Password'
        type='password'
        setValue={setPassword}
        error={
          password && !checkPassword(password)
            ? 'Password must contain at least 8 character with 1 number, 1 lowercase, 1 uppercase & 1 special character'
            : ''
        }
      />
      <Input
        label='Confirm Password'
        type='password'
        setValue={setConfirmPassword}
        error={
          password && confirmPassword && password !== confirmPassword
            ? 'Password did not match!'
            : ''
        }
      />
      <div className={styles.alternateInfo}>
        <p>Already have an account?</p>
          <a href="/" >Sign In</a>
      </div>
    </div>
  );
}


SignupForm.BrandInfo = () => (
  <div className={styles.container}>
    <p>Branding</p>
  </div>
);