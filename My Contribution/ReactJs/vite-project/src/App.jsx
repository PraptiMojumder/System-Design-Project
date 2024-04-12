/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import FacultyMembers from './pages/FacultyMembers';
import StudentDashboard from './pages/StudentDashboard';
import MemberMeeting from './pages/MemberMeeting';
import AdminLogin from './pages/AdminLogin';
import StudentSingup from './pages/StudentSingup';
import ListOfGrantedResearch from './pages/ListOfGrantedResearch';
import ShareResearchProject from './pages/ShareResearchProject';
import MyTask from './pages/MyTask';
import GraderList from './pages/GraderList';
import SelectedGrader from './pages/SelectedGrader';

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/facultymembers" element = {<FacultyMembers/>}/>
            <Route path="/studentdashboard" element = {<StudentDashboard/>}/>
            <Route path="/membermeeting" element = {<MemberMeeting/>}/>
            <Route path="/AdminLogin" element = {<AdminLogin/>}/>
            <Route path="/StudentSingup" element = {<StudentSingup/>}/>
            <Route path="/ListOfGrantedResearch" element = {<ListOfGrantedResearch/>}/>
            <Route path="/ShareResearchProject" element = {<ShareResearchProject/>}/>
            <Route path="/MyTask" element = {<MyTask/>}/>
            <Route path="/GraderList" element = {<GraderList/>}/>
            <Route path="/SelectedGrader" element = {<SelectedGrader/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;