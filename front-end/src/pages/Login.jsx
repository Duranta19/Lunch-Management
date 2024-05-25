import logo from '../logo.svg';
import '../App.css';
import Nav from '../components/Nav';
import LoginForm from '../components/LoginForm';
import SigninProvider from '../context_api/SigninContext';
function Login() {
  return (
    <>
      <Nav 
        li= {[{label:"Signup", href: "/signup"}]}
      />
      <span className='flex underline text-4xl mx-auto items-center justify-center mt-5'>Login</span>
      <SigninProvider>
        <LoginForm />
      </SigninProvider>
      
    </>
  );
}

export default Login;
