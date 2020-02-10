import React from "react";

function Stats(){
  var statStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 16px 8px 16px",
    fontSize: "12px"
  }
  return (
    <div style={statStyle}>
      <p>TWEETS</p>
      <p>FOLLOWING</p>
      <p>FOLLOWERS</p>
    </div>
  );
}
export default Stats;
