import React from 'react'
import Nav from '../components/Nav';
import MyChoiceList from '../components/MyChoiceList';
const MyChoice = () => {
    return (
        <>
          <Nav li= {[{label: "View Menu", href: "/employee/employee-choice"},{label: "My Choice", href: "/employee/employee-choice"}, {label: "Logout", href: "/logout"}]} />
    
          <MyChoiceList/>
    
        </>
      );
}

export default MyChoice