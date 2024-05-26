import '../App.css';
import Nav from '../components/Nav';
import AddMenuForm from '../components/AddMenuForm'
import ViewItemAdmin from '../components/ViewItemAdmin';
import AdminAddOptProvider from '../context_api/AdminAddOptCtx'
function AddMenu() {
  return (
    <>
      <Nav 
        li= {[{label: "Add Menu", href: "/admin/add-menu"},{label: "View Employee Choice", href: "/admin/employee-choice"}]}
      />
      <AdminAddOptProvider >
        <AddMenuForm />
        <ViewItemAdmin />
      </AdminAddOptProvider>
      

    </>
  );
}

export default AddMenu;
