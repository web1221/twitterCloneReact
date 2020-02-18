import React from 'react';
import PropTypes from 'prop-types';

function Tweet(props){
  return (
    <div>
      <h3>{props.name} - {props.content}</h3>
      <hr/>
    </div>
  );
}

Tweet.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string
};

export default Tweet;
