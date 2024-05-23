import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AddMenuForm from './components/AddMenuForm'
import ViewItemAdmin from './components/ViewItemAdmin';
function App() {
  return (
    <>
      <Nav 
        li= {["Add Menu", "View Employee Choice", "Logout"]}
      />

      <AddMenuForm />
      <ViewItemAdmin />
    </>
  );
}

export default App;
