import SignupForm from "../../components/signup-form";
import  styles from './style.module.scss';


function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.signupContainer}>
          <SignupForm />
        </div>
        <div className={styles.brand}>
          <SignupForm.BrandInfo />
        </div>
      </div>
  );
}

export default Login;
