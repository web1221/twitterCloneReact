import React from "react";
import Status from "./Status";
import Post from "./Post";

function Feed(){
  var feedStyle = {
    margin: "0px 16px",
    width: "480px",
    border: "2px solid lightgray",
  }
  return (
    <div style={feedStyle}>
      <Status />
      <Post />
    </div>
  );
}
export default Feed;
