import React from 'react';
import Body from "./components/Body";
import Error404 from './components/Error404';
import NavBar from './components/NavBar';
// import NewTweetControl from './components/NewTweetControl';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }
  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render() {
    return (
      <div>
      <NavBar />
      <Switch>
      <Route exact path='/' render={()=><Body onNewTweetCreation={this.handleAddingNewTweetToList} tweetList={this.state.masterTweetList} />} />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }

}

  export default App;
