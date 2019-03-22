import React from 'react';
import Comments from './Comments'
import  moment from 'moment';

class CommentSection extends React.Component {
 
    state = {  
      comments:this.props.comments
   }

  render(){
      return(
         <div>
        {this.state.comments.map((c, i) => <Comments key={i} comment={c} />)}
        <div className='time'>{moment().startOf('day').fromNow()}</div>
      </div>
      )
  }  

}

export default CommentSection