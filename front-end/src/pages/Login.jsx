import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
function Login() {
  return (
    <>
      <Nav 
        li= {["home", "Logout"]}
      />
      <LoginForm />
    </>
  );
}

export default Login;
