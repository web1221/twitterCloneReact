import React from "react";
import HeaderImage from "./HeaderImage";
import Image from "./Image";
import Name from "./Name";
import Stats from "./Stats";

function Account(){
  var accountStyle = {
    border: "2px solid lightgray",
    width: "272px",
    marginBottom: "16px"
  }
  var imageNameStyle = {
    display: "flex",
    padding: "0px 16px 8px 16px",
  }
  return (
    <div style={accountStyle}>
      <HeaderImage />
      <div style={imageNameStyle}>
        <Image />
        <Name />
      </div>
      <Stats />
    </div>
  );
}
export default Account;
