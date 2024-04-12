import React from 'react';
import { useState} from 'react';
import Footer from './../components/Footer';
import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
import RecentJobs from '../components/RecentJobs';
import "./../assets/css/StudentDashboard.css";

    const StudentDashboard = () => {

    const [bellClick, setbellClick] = useState(0);
    const [searchClick, setsearchClick] = useState(0);

    return (
        <div>
            <Header bellClick={bellClick} searchClick={searchClick} setbellClick={setbellClick} setsearchClick = {setsearchClick}/>
            <HeaderNext/>
            <HeaderSearchAndNotification bellClick={bellClick} searchClick={searchClick} setsearchClick = {setsearchClick}/>
            <div className='header-heading'>
                <h1>Recommended Job Opportunities</h1>
                <h4>Department Of Computer Science And Engineering</h4>
            </div>
            <RecentJobs/>
           <Footer/> 
        </div>
    );
};

export default StudentDashboard;