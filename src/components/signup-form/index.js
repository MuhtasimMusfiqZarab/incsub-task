import React, { useState } from 'react';
import validator from 'validator';
import  Input  from '../_general/input-box';
import styles from './style.module.scss';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  //check for password length
  const checkPassword = (password) => {
    return password.length >=8 ;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log("This is name",name);
    console.log("This is email",email);
    console.log("This is password",password);
  }

  return (
    <form onSubmit={onSubmitForm} className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.mainHeaderText}>Sign Up</div>
          <div className={styles.subHeaderText}>
            Please fill up this form with your credentials
          </div>
        </div>
        <div className={styles.alternateInfo}>
          <p>Already have an account?</p>
            <a href="/" >Sign In</a>
        </div>
        <Input
          label='Your name'
          setValue={setName}
        />
        <Input
          label='Email address'
          setValue={setEmail}
          error={
            email && !validator.isEmail(email)
              ? 'Please enter a valid email address'
              : ''
          }
        />
        <Input
          label='Password'
          type='password'
          setValue={setPassword}
          error={
            password && !checkPassword(password)
              ? 'Minimum 8 characters'
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
        
    </form>
  );
}


SignupForm.BrandInfo = () => (
  <div className={styles.container}>
    <p>Branding</p>
  </div>
);