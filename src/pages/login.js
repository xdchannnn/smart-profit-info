import '../assets/styles/login.scoped.css'
import LoginHeader from '../components/loginComponents/loginHeader';
import LoginBlock from '../components/loginComponents/loginBlock';

function Login() {
  return (
    <div className="background">
      <LoginHeader />
      <LoginBlock />
    </div>
  );
}

export default Login;
