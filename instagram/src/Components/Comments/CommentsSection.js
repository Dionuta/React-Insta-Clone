import React from 'react';
import Comments from './Comments'
import moment from 'moment';
import AddComment from './AddComment'

class CommentSection extends React.Component {

    state = {
        comments: this.props.comments,
        comment: ''
    }

    handleAddComment = (text) => {
        this.setState(prevState => {
            return {
                comments: [...prevState.comments,
                {
                    username: 'user',
                    text: text
                }],
                comment: ''
            }
        });
    };

    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comments key={i} comment={c} />)}
                <div className='time'>{moment().startOf('day').fromNow()}</div>
                <AddComment
                    addComment={this.handleAddComment}
                />
            </div>
        )
    }

}

export default CommentSection