import React from 'react'
import CommentSection from '../Comments/CommentsSection';
import Likes from './Likes'


class Post extends React.Component {
   state = {
       likes :this.props.likes,
       updated: false
   }

   updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
}
    render() {
        return (
            <div className='wrapper'>
            <div className='container'>
                <header>
                    <img src={this.props.thumbnailUrl} alt='userPic'/>
                    <p><b>{this.props.username}</b></p>
                </header>
                <span className='media'>
                   <img src={this.props.imageUrl} alt='url'/>
                </span>
                  <Likes
                  toggleLike={this.updateLikes}
                  likes = {this.state.likes}
                   />
                 <span className='lower'>
                   <CommentSection 
                   comments={this.props.comments}
                   />
                 </span>
              </div>
            </div>
        )
    }
    
}

export default Post