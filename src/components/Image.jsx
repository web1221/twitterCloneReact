import React from "react";

function Image(){
  var imageStyle = {
    marginTop: "-32px",
    width: "72px",
    height: "72px",
    borderRadius: "16px",
    backgroundColor: "#00acee",
    border: "2px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  var iconStyle = {
    margin: "0px",
    fontSize: "3em",
    color: "white",
  }
  return (
    <div style={imageStyle}>
      <h1 style={iconStyle}>J</h1>
    </div>
  );
}
export default Image;
