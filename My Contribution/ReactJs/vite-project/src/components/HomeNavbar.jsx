import React from 'react';
import "./../assets/css/HomeNavbar.css";
import uiulogo from './../assets/media/images/uiulogo.png';

const HomeNavbar = () => {
    return (
        <div>
            <div className='heading1'>
                <img className='heading1_img' src={uiulogo} alt="" />
                <div className='heading2'>
                <h1 className='heading2_title'>United International University</h1>
                <h1 className='heading2_title1'>QUEST FOR EXCELLENCE</h1>
                </div>
            </div>
            <div className='heading3'></div>
            <div>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/facultymembers">FACULTY MEMBERS</a></li>
                    <li>
                        <a href="/">LOGIN</a>
                        <ul className='dropdown'>
                            <li><a href="/">ADMIN</a></li>
                            <li><a href="/">FACULTY</a></li>
                            <li><a href="/">STUDENT</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">SIGNUP</a>
                        <ul className='dropdown'>
                            <li><a href="/">FACULTY</a></li>
                            <li><a href="/">STUDENT</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeNavbar;