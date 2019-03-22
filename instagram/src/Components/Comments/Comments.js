import React from 'react';



const Comments =(props)=> {
    return (
        <p className='text'><b>{props.comment.username}</b> {props.comment.text}</p>
    )
}

export default Comments 