import React from "react";
import Nav from "../components/Nav";
import ItemCard from "../components/ItemCard";
const ViewMenu = () => {
  return (
    <>
      <Nav 
        li= {[{label: "View Menu", href: "/employee/employee-choice"},{label: "My Choice", href: "/employee/employee-choice"}, {label: "Logout", href: "/logout"}]}
      />

      <div class="p-5 grid grid-cols-1 mx-auto md:grid-cols-3 gap-3 lg:grid-cols-4">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  );
};

export default ViewMenu;
