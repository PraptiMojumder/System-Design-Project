import React, { useState } from 'react';
import "./../assets/css/HeaderSearchAndNotification.css";
import rakib from './../assets/media/images/rakib.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSearch, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderSearchAndNotification = ({bellClick, searchClick}) => {

    
    return (
        <div>
            <div className={searchClick === 1 ? 'header-top-search' : 'search_not_clicked'}>
                <div className='top-search'>
                    <input type="text" placeholder='Search'/>
                    <div className='search-action'><FontAwesomeIcon className='search-icon' icon={faSearch} /></div>
                </div>
                <div className='top-search_suggestion'>
                    <div className='suggestions'>
                        <h5>Rakibul Hasan</h5>
                        <h5>Prapti Mojumder</h5>
                        <h5>Sadman Sakib</h5>
                        <h5>Mahmudur Rahman</h5>
                    </div>
                </div>
            </div>
            <div className={bellClick === 1 ? 'header-top-notification' : 'bell_not_clicked'}>
                <div className='notification-header'>
                    <h3>Notifications</h3>
                    <h4>Clear All</h4>
                </div>
                <div className='notification-out'>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                    <div className='notification-body'>
                        <img src={rakib} alt="" />
                        <h4>Rakibul Hasan has assigned you a task, for research methodlogy</h4>
                        <FontAwesomeIcon className='notification-delete' icon={faDeleteLeft} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeaderSearchAndNotification;