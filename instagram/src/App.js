import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {

   state ={
     posts: []
   }

   componentDidMount (){
     this.setState({posts:dummyData})
   }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer
         posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
