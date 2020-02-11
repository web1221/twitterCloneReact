import React from "react";
import About from "./About";
import Account from "./Account";
import Feed from "./Feed";

function Body(){
  return (
    <div className="Body">
      <div>
        <Account />
        <About />
      </div>
      <div>
        <Feed />
      </div>
    </div>
  );
}

export default Body;
