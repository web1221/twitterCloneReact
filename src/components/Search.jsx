import React from "react";

function Search(){
  var searchBar = {
    display: "flex",
    alignItems: "center",
    borderRadius: "20px"
  }

  var input = {
    padding: "0px 10px",
    width: "200px",
    height: "40px",
    borderRadius: "40px",
    border: "2px solid #00acee"
  }

  var button = {
    padding: "0px 10px",
    marginLeft: "10px",
    width: "100px",
    height: "44px",
    borderRadius: "44px",
    border: "2px solid #00acee"

  }
  return (
    <form style={searchBar}>
        <input style={input} type="text" placeholder="Search" />
        <button style={button} type="submit">Tweet</button>
    </form>
  );
}
export default Search;
