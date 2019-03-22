import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

const Likes = (props) =>{
    return (
        <span className='likeWrapper' >
                <span className='likesButtons'>
                
                <button><FontAwesomeIcon icon={faHeart}
                onClick={props.toggleLike}
                /></button>
               <button> <FontAwesomeIcon icon={faComment}/></button>
                </span>
                <p><b>{props.likes} likes</b></p>
            </span>
    )
}





export default Likes