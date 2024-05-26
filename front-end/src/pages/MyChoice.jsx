import React from 'react'
import Nav from '../components/Nav';
import MyChoiceList from '../components/MyChoiceList';
import OrderHistCtxProvider from '../context_api/OrderHistCtx';
const MyChoice = () => {

    return (
        <>
          <Nav li= {[{label: "View Menu", href: "/employee/view-menu"},{label: "My Choice"}]} />
          <OrderHistCtxProvider>
            <MyChoiceList/> 
          </OrderHistCtxProvider>
          
    
        </>
      );
}

export default MyChoice