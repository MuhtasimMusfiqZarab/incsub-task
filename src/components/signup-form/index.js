import React, { useState } from 'react';
import validator from 'validator';
import  Input  from '../_general/input-box';
import  {Dropdown}  from '../_general/dropdown';
import { Button } from "../_general/button";
import styles from './style.module.scss';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const checkPassword = (password) => {
    return password.length >= 8;
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
          <div className={styles.mainHeaderText}>Let's setup your account</div>
        </div>
        <div className={styles.alternateInfo}>
          <p>Already have an account?</p>
            <a href="/">Sign In</a>
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
        <Dropdown items={['Developer','Manager','Team Lead']} />
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
        <Button>Next</Button>
        <SignupForm.Agreements/>
        
        
    </form>
  );
}


SignupForm.BrandInfo = () => (
  <div className={styles.brandContainer}>
    <p className={styles.heading}>Dummy Heading</p>
    <p className={styles.subHeading} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, Nobis dolorem ab eligendi explicabo nesciunt voluptates minima</p>
  </div>
);

SignupForm.Agreements = () => (
  <div className={styles.agreementInfo}>
    <p className={styles.description}>By clicking the "Next" button, you agree to create a free account and to <a href="/">Terms of service</a> and  <a href="/">Privacy policy</a></p>
  </div>
);