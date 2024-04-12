
import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
// // eslint-disable-next-line no-unused-vars
 import selected from "./../assets/css/SelectedGrader.module.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import React from 'react';
// import { faItalic } from '@fortawesome/free-solid-svg-icons';
import Tarek from './../assets/media/images/Tarek-Hasan.jpg';
import Swakkhar from './../assets/media/images/swakkhr.jpg';
import Footer from '../components/Footer';
import Display from './../assets/media/images/display3.jpg';
import Display2 from './../assets/media/images/display5.jpg';

const SelectedGrader = () => {
    return (
        <div>
            <Header/>
            <HeaderNext/>
            <HeaderSearchAndNotification/>
            <p style={{fontSize:26,color:"black",marginLeft:20,marginTop:35}}><b>You have been selected for the following courses as a UA/Grader for Summer 2023</b></p>
            <p style={{fontSize:20,color:"black",marginTop:15,marginLeft:20}}>Click on the following courses to access their task management portals</p>
            <div style={{backgroundColor:'#EAF9FD',width:1518,height:1081,marginTop:20}}>
                <div style={{width:1428,height:1001,marginLeft:50,display:"flex",flexDirection:"column"}}>
                    <div style={{backgroundColor:'white',width:1428,height:340,marginTop:70}}>
                        <img src={Display} alt="" style={{width:1428,height:116,objectFit:"fill"}}></img>
                        <p style={{fontSize:24,color:"#787474",marginLeft:20,marginTop:20}}>Dept. Of CSE</p>
                        <p style={{fontSize:22,color:"black",marginLeft:20}}>Fall 233 CSE 1116 (B): Object Oriented Programming Lab</p>
                        <p style={{fontSize:22,color:"black",marginLeft:20,marginTop:10,marginBottom:10}}><b>Course teacher</b></p>
                        <div>
                            <div style={{display:"flex"}}>
                                <img src={Tarek} alt="" style={{width:70,height:80,marginLeft:20,borderRadius:5}}></img>
                                <div style={{marginLeft:7,marginBottom:5}}>
                                <h4 style={{fontSize:20,marginTop:20}}>Md. Tarek Hasan</h4>
                                <p style={{fontSize:16}}>Lecturer at UIU</p>
                                </div> 
                                <div ><hr className={selected.midline} style={{height:90,marginLeft:400}}></hr></div>
                                <div>
                                <p style={{fontSize:22,color:"black",marginLeft:40,marginBottom:20}}><b>My position</b></p>
                                <p style={{fontSize:22,marginTop:10,marginLeft:40}}>Undergraduate Assistant</p>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div style={{backgroundColor:'white',width:1428,height:340,marginTop:70}}>
                        <img src={Display2} alt="" style={{width:1428,height:116,objectFit:"fill"}}></img>
                        <p style={{fontSize:24,color:"#787474",marginLeft:20,marginTop:20}}>Dept. Of CSE</p>
                        <p style={{fontSize:22,color:"black",marginLeft:20}}>Fall 233 CSE 1116 (B): Object Oriented Programming Lab</p>
                        <p style={{fontSize:22,color:"black",marginLeft:20,marginTop:10,marginBottom:10}}><b>Course teacher</b></p>
                        <div>
                            <div style={{display:"flex"}}>
                                <img src={Swakkhar} alt="" style={{width:70,height:80,marginLeft:20,borderRadius:5}}></img>
                                <div style={{marginLeft:7,marginBottom:5}}>
                                <h4 style={{fontSize:20,marginTop:20}}>Swakkhar Shatabda</h4>
                                <p style={{fontSize:16}}>Lecturer at UIU</p>
                                </div> 
                                <div ><hr className={selected.midline}  style={{height:90,marginLeft:370}}></hr></div>
                                <div>
                                <p style={{fontSize:22,color:"black",marginLeft:40,marginBottom:20}}><b>My position</b></p>
                                <p style={{fontSize:22,marginTop:10,marginLeft:40}}>Undergraduate Assistant</p>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default SelectedGrader;