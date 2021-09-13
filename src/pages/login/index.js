import  styles from './style.module.scss';
import {SigninIcon} from "../../components/_icons/signinIcon";
import SignupForm from "../../components/signup-form";

function Login() {
  return (
    <div className={styles.container}>
        
        <div className={styles.signupContainer}>
          <SignupForm />
        </div>
      </div>
  );
}

export default Login;
