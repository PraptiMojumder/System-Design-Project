import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from './../components/Footer';
import HomeNavbar from './../components/HomeNavbar';
import "./../assets/css/FacultyMembers.css";
import swakkhr from "./../assets/media/images/swakkhr.jpg";

const FacultyMembers = () => {

    const [facultySearch, setfacultySearch] = useState(false);

    const handleSearchClick = ()=>{
        setfacultySearch(true);
    }
    const handleBlurClick = ()=>{
        setfacultySearch(false);
    }


    return (
        <div>
            <HomeNavbar/>
            <div className='search-bar'>
                <input onClick={handleSearchClick} onBlur={handleBlurClick} type="text" placeholder='Search'/>
                <button type='button'><FontAwesomeIcon className='' icon={faSearch} /></button>
            </div>
            <div className={facultySearch ? 'search-bar_1' : 'search-bar_1_not'}>
                <h5>SWAKKHAR SHATABDA</h5>
                <h5>SWAKKHAR SHATABDA</h5>
                <h5>SWAKKHAR SHATABDA</h5>
                <h5>SWAKKHAR SHATABDA</h5>
                <h5>SWAKKHAR SHATABDA</h5>
            </div>
            <div className='faculty-profile'>
                <img src={swakkhr} alt="" />
                <div>
                    <h4>SWAKKHAR SHATABDA</h4>
                    <p>Professor & Director - B.Sc. in Data Science at UIU</p>
                    <h5>Department Of Computer Science And Engineering</h5>
                </div>
            </div>
            <div className='faculty-profile'>
                <img src={swakkhr} alt="" />
                <div>
                    <h4>SWAKKHAR SHATABDA</h4>
                    <p>Professor & Director - B.Sc. in Data Science at UIU</p>
                    <h5>Department Of Computer Science And Engineering</h5>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default FacultyMembers;