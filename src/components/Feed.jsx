import React from "react";
import Status from "./Status";
import NewTweetForm from "./NewTweetForm";

function Feed(props){
  var feedStyle = {
    margin: "0px 16px",
    width: "480px",
    border: "2px solid lightgray",
  }
  return (
    <div style={feedStyle}>
      <Status />
      <NewTweetForm onNewTweetCreation={props.onNewTweetCreation} />
    </div>
  );
}
export default Feed;
