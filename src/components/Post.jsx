import React from "react";

function Post(){
  var postStyle = {
      padding: "0px 10px",
      width: "200px",
      height: "45px",
      textAlign: "left",
      flexGrow: "1",
      maxWidth: "350px",
      border: "2px solid #00acee",
      color: "#00acee"
    }
  var postContainer = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px"
  }

  var postIcon = {
    border: "1px solid black",
    height: "45px",
    width: "45px",
    backgroundColor: "teal"
  }

  return (
    <div style={postContainer}>
      <div style={postIcon}></div>
      <input style={postStyle} type="text" placeholder="What's happening?" />
    </div>
  );
}
export default Post;
