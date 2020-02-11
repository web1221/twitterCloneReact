import React from "react";

function Post(){
  var postStyle = {
      padding: "0px 10px",
      width: "200px",
      height: "45px"
    }
    
  return (
    <div>
      <input  style={postStyle} type="text" placeholder="What's happening?" />
    </div>
  );
}
export default Post;
