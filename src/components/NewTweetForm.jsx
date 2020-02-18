import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTweetForm(props){
  let _content = null;
  let _name = null;

function handleNewTweetFormSubmission(event){
    event.preventDefault();
    props.onNewTweetCreation({content: _content.value, name: _name.value, id: v4()});
    _content.value = '';
    _name.value = '';
  }

  var tweetStyle = {
      padding: "0px 10px",
      width: "200px",
      height: "45px",
      textAlign: "left",
      flexGrow: "1",
      maxWidth: "350px",
      border: "2px solid #00acee",
      color: "#00acee"
    }
  var tweetContainer = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px"
  }

  var tweetIcon = {
    border: "1px solid black",
    height: "45px",
    width: "45px",
    backgroundColor: "teal"
  }

  return (
    <div style={tweetContainer}>
    <form onSubmit={handleNewTweetFormSubmission}>
      <div style={tweetIcon}></div>
      <input style={tweetStyle} type="text" placeholder="What's happening?" ref={(input) => {_content = input}} />
      <input style={tweetStyle} type="text" placeholder="What's happening?" ref={(input) => {_name = input}} />
      <button type='submit'>Tweet!</button>
      </form>
    </div>
  );
}

  NewTweetForm.propTypes = {
    onNewTweetCreation: PropTypes.func
  };


export default NewTweetForm;
