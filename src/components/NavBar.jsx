import React from "react";
import Filter from "./Filter";
import Search from "./Search";

function NavBar(){
  return (
    <div className="NavBar">
      <Filter />
      <Search />
    </div>
  );
}

export default NavBar;
