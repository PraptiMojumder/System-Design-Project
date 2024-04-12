import React from 'react';
import { useRef, useState } from 'react';
import "./../assets/css/Header.css";
import rakib from './../assets/media/images/rakib.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSearch, faBell} from '@fortawesome/free-solid-svg-icons';

const Header = ({bellClick, searchClick, setbellClick, setsearchClick}) => {

    const handleBellClick = ()=>{
        if(bellClick==0){
            setbellClick(1);
        }else if(bellClick==1){
            setbellClick(0);
        }
    }
    const handleSearchClick1 = ()=>{
        if(searchClick==0){
            setsearchClick(1);
        }else if(searchClick==1){
            setsearchClick(0);
        }
    }


    return (
        <div>
            <div className='header-top'>
                <img src={rakib} alt="" />
                <p>Rakibul Hasan</p>
                <FontAwesomeIcon onClick={handleBellClick} className='bell' icon={faBell} />
                <FontAwesomeIcon className='home' icon={faHome} />
                <h3>Home</h3>
                <FontAwesomeIcon onClick={handleSearchClick1} className='search' icon={faSearch} />
            </div>
        </div>
    );
};

export default Header;