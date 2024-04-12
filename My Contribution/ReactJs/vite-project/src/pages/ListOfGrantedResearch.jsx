import React from 'react';
import Footer from './../components/Footer';
import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
import ListOfGranted from"./../assets/css/ListOfGrantedResearch.module.css";
import swakkhr from "./../assets/media/images/swakkhr.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListOfGrantedResearch = () => {
    return (
        <div>
            <Header/>
            <HeaderNext/>
            <HeaderSearchAndNotification/>
            <div className={ListOfGranted.list}>
              <div className={ListOfGranted.paragraph} style={{width:392,height:29,marginLeft:20}}><p>List Of Granted Research Projects</p></div>
              <hr className={ListOfGranted.line} style={{width:'100%'}}/>
              <div className={ListOfGranted.tittle}><h4>Title Of The Project</h4><h4>Name of Principal Investigator</h4><h4>Grant Amount</h4></div>
              <div className={ListOfGranted.data}>
              <div className={ListOfGranted.first}><p>Application of Multi-facet Performance Measurement System: A Framework for the Ready Made Garments of Bangladesh</p></div>
              <div className={ListOfGranted.second}><img className="img" style={{width:90,height:90}} src={swakkhr} alt=""/> <div className="info" style={{marginTop:40,marginLeft:5}}><h4> Swakkhar Shatabda</h4><h5 style={{marginTop:10}}> Professor At UIU</h5> <p style={{fontSize:'small',marginRight:100}}>Department Of Computer Science and Engineering</p></div> </div> 
              <div className={ListOfGranted.third}><h4>BDT 6,00,000 TK</h4></div>
              </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ListOfGrantedResearch;