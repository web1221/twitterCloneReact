import React from "react";
import PropTypes from "prop-types"
import About from "./About";
import Account from "./Account";
import Feed from "./Feed";
import TweetList from "./TweetList";

function Body(props){
  return (
    <div className="Body">
      <div>
        <Account />
        <About />
      </div>
      <div>
      <Feed onNewTweetCreation={props.onNewTweetCreation}/>
      <TweetList tweetList={props.tweetList}/>
      </div>
    </div>
  );
}
Body.propTypes = {
  tweetList: PropTypes.array
};


export default Body;
