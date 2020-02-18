import React from "react";
import PropTypes from "prop-types"
import Tweet from "./Tweet";

function TweetList(props){
  console.log(props);
  return (
    <div>
    {props.tweetList.map((tweet, index) =>
      <Tweet name={tweet.name}
      content={tweet.content}
      key={tweet.id} />
    )}
    </div>
  )
  }

TweetList.propTypes = {
  tweetList: PropTypes.array
};


export default TweetList;
