import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import ItemCard from "../components/ItemCard";
import axios from "axios";
import ViewMenuProvider from "../context_api/ViewMenuCtx";
const ViewMenu = () => {

  const [data, setData] = useState([]);
  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/admin/get-option'
      );
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMenu();
    const interval = setInterval(fetchMenu, 30000); // Fetch data every 30 seconds
    return () => clearInterval(interval);
  }, []);

  console.log(data);

  if (!data || data.length === 0) {
    return <p>Loading...</p>; 
  }
  return (
    <>
      <Nav 
        li= {[{label: "View Menu", href: "/employee/employee-choice"},{label: "My Choice", href: "/employee/employee-choice"}]}
      />

      <div class="p-5 grid grid-cols-1 mx-auto md:grid-cols-3 gap-3 lg:grid-cols-4">
        {data.map((item) => (
          // <ViewMenuProvider>
              <ItemCard key={item.opt_id} opt_name={item.opt_name} img={item.img_path} opt_items={item.opt_items} total_cal={item.total_cal}/>
          // </ViewMenuProvider>
            
        ))}
  
      </div>
    </>
  );
};

export default ViewMenu;
