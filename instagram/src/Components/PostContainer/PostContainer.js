import React from 'react';
import Post from './Post'
import './Post.css'

const PostContainer = ({posts}) => {
   return (
       <div>
       {posts.map(post => (
        <Post
          {...post}
          key ={post.thumbnailUrl}
        />
      ))}
       </div>
   )

}

export default PostContainer;