import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {

   state ={
     posts: [],
     filteredPosts: []
   }

   componentDidMount (){
     this.setState({posts:dummyData})
   }

   searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>
        <SearchBar
         searchPosts={this.searchPostsHandler}
         searchTerm={this.state.posts}
         />
        <PostContainer
        posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          } />
      </div>
    );
  }
}

export default App;
