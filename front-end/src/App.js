import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import EmployeeChoiceList from './components/EmployeeChoiceList';
function App() {
  return (
    <>
      <Nav 
        li= {["Add Menu", "View Employee Choice", "Logout"]}
      />
      <EmployeeChoiceList />

    </>
  );
}

export default App;
