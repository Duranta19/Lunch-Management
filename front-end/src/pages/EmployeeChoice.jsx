
import '../App.css';
import Nav from '../components/Nav';
import EmployeeChoiceList from '../components/EmployeeChoiceList';
function EmployeeChoice() {
  return (
    <>
      <Nav 
        li= {[{label: "Add Menu", href: "add-menu"},{label: "View Employee Choice", href: "employee-choice"}, {label: "Logout", href: "/logout"}]}
      />
      <EmployeeChoiceList />

    </>
  );
}

export default EmployeeChoice;
