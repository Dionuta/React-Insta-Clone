import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {

   state ={
     post: dummyData
   }

  render() {
    const{post}=this.state;
    return (
      <div>
        <SearchBar />
        <PostContainer {...post}/>
      </div>
    );
  }
}

export default App;
