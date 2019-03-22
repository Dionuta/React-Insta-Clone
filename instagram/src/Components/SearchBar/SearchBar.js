import React from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';




const SearchBar = (props) => {
    return (
        <div>
            <div className="nav">
                <div className="left">
                    <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                    <span className='pipe'>&#124;</span>
                    <h3>Instagram</h3>
                </div>
                <div className="middle">
                     <form className='search'>
                         <input 
                         type="text"
                         placeholder='Search'
                         onKeyDown={props.searchPosts}
                         />
                     </form>
                </div>
                <div className="right">
                     <a href='https://www.youtube.com/watch?v=oHg5SJYRHA0'><FontAwesomeIcon icon={faCompass}/></a>
                     <a href='https://www.youtube.com/watch?v=oHg5SJYRHA0'><FontAwesomeIcon icon ={faHeart} /></a>
                     <a href='https://www.youtube.com/watch?v=oHg5SJYRHA0'><FontAwesomeIcon icon ={faUser} /></a>
                </div>
            </div>
        </div >
    )
}

export default SearchBar;