
import '../App.css';
import Nav from '../components/Nav';
import EmployeeChoiceList from '../components/EmployeeChoiceList';
import OrderHistCtxProvider from '../context_api/OrderHistCtx';
function EmployeeChoice() {
  
  return (
    <>
      <Nav 
        li= {[{label: "Add Menu", href: "add-menu"},{label: "View Employee Choice", href: "employee-choice"}]}
      />
       <OrderHistCtxProvider>
         <EmployeeChoiceList />
       </OrderHistCtxProvider>
      

    </>
  );
}

export default EmployeeChoice;
