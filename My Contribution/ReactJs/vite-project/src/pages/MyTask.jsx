import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
// eslint-disable-next-line no-unused-vars
import Task from "./../assets/css/MyTask.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import Tarek from './../assets/media/images/Tarek-Hasan.jpg';
import Footer from '../components/Footer';
import rakib from './../assets/media/images/rakib.jpg';

const MyTask = () => {
    return (
        <div>
            <Header/>
            <HeaderNext/>
            <HeaderSearchAndNotification/>
            <div style={{height:177,marginTop:50,backgroundColor:"#237696",color:'white',font:faItalic,marginBottom:20}}>
                <p style={{fontSize:24,marginLeft:73,paddingTop:30}}><b>Dept. Of CSE</b></p>
                <p style={{fontSize:24,marginLeft:73}}>Fall 233 CSE 1116 (B): Object Oriented Programming Lab</p>
                <div className={Task.teacher}><p style={{fontSize:16,marginLeft:73,paddingTop:20}}>The following tasks are assigned by the course teacher</p><img src={Tarek} alt="" style={{width:50,height:50,marginLeft:7,borderRadius:50}}></img><p style={{fontSize:16,paddingTop:20,marginLeft:5}}>Md Tarek Hasan</p></div>
                <div className={Task.position}><p>My position :</p><p>Undergraduate Assistant</p></div>
            </div>
            <div className={Task.mytask} style={{paddingLeft:73}}> <p style={{fontWeight:600,fontSize:24,paddingTop:10}}>My tasks</p>
            <div className={Task.condition} style={{marginTop:30,marginBottom:30}} ><h3 className={Task.firstConditation} >Recently</h3><h3 className={Task.secondConditation} style={{marginLeft:90}}>In progress</h3><h3 className={Task.thirdConditation} style={{marginLeft:90}}>Completed</h3></div>
            <div className={Task.div}>
                     <div style={{width:412,height:260,backgroundColor:"#237696"}}><p style={{fontSize:13,color:"white",marginLeft:15,marginTop:10,marginBottom:20}}>assigned on 31 december, 2023 at 7.30 pm</p><p style={{marginLeft:15,fontSize:20,color:"white",marginBottom:20}}>Make class test question</p><div style={{marginLeft:15,width:380, height:90,fontSize:15,color:"white",marginBottom:20}}>relational algebra,sql query, joining statement,sub query. There will be 4 short questions and 2 summaries. make the short question from the relational algebra and subquery. and 2 summaries from the joining statement and SQL query.</div><div className={Task.box1} style={{color:"white",marginBottom:20,marginLeft:15}}><a href="https://cse.uiu.ac.bd/profiles/tarek/" style={{fontSize:18,color:"white"}}>View assessment</a><p style={{color:'white',marginLeft:40,fontSize:13}}>Deadline : 1st january, 2023</p></div></div>
                     <div style={{width:412,height:260,backgroundColor:"#3B5D76",marginLeft:50,}}><p style={{fontSize:13,color:"white",marginLeft:15,marginTop:10,marginBottom:20}}>assigned on 31 december, 2023 at 7.30 pm</p><p style={{marginLeft:15,fontSize:20,color:"white",marginBottom:20}}>Make class test question</p><div style={{marginLeft:15,width:380, height:90,fontSize:15,color:"white",marginBottom:20}}>relational algebra,sql query, joining statement,sub query. There will be 4 short questions and 2 summaries. make the short question from the relational algebra and subquery. and 2 summaries from the joining statement and SQL query.</div><div className={Task.box1} style={{color:"white",marginBottom:20,marginLeft:15}}><a href="https://cse.uiu.ac.bd/profiles/tarek/" style={{fontSize:18,color:"white"}}>View assessment</a><p style={{color:'white',marginLeft:40,fontSize:13}}>Deadline : 1st january, 2023</p></div></div>
                     <div style={{width:412,height:260,backgroundColor:"#3B5D76",marginLeft:50}}><p style={{fontSize:13,color:"white",marginLeft:15,marginTop:10,marginBottom:20}}>assigned on 31 december, 2023 at 7.30 pm</p><p style={{marginLeft:15,fontSize:20,color:"white",marginBottom:20}}>Make class test question</p><div style={{marginLeft:15,width:380, height:90,fontSize:15,color:"white",marginBottom:20}}>relational algebra,sql query, joining statement,sub query. There will be 4 short questions and 2 summaries. make the short question from the relational algebra and subquery. and 2 summaries from the joining statement and SQL query.</div><div className={Task.box1} style={{color:"white",marginBottom:20,marginLeft:15}}><a href="https://cse.uiu.ac.bd/profiles/tarek/" style={{fontSize:18,color:"white"}}>View assessment</a><p style={{color:'white',marginLeft:40,fontSize:13}}>Deadline : 1st january, 2023</p></div></div>
                     <div style={{width:412,height:260,backgroundColor:"#3B5D76",marginLeft:50}}><p style={{fontSize:13,color:"white",marginLeft:15,marginTop:10,marginBottom:20}}>assigned on 31 december, 2023 at 7.30 pm</p><p style={{marginLeft:15,fontSize:20,color:"white",marginBottom:20}}>Make class test question</p><div style={{marginLeft:15,width:380, height:90,fontSize:15,color:"white",marginBottom:20}}>relational algebra,sql query, joining statement,sub query. There will be 4 short questions and 2 summaries. make the short question from the relational algebra and subquery. and 2 summaries from the joining statement and SQL query.</div><div className={Task.box1} style={{color:"white",marginBottom:20,marginLeft:15}}><a href="https://cse.uiu.ac.bd/profiles/tarek/" style={{fontSize:18,color:"white"}}>View assessment</a><p style={{color:'white',marginLeft:40,fontSize:13}}>Deadline : 1st january, 2023</p></div></div>
            </div>
            </div>
            <div className={Task.SecondDiv} style={{backgroundColor:"#F5F2F2",height:563,marginTop:10,paddingLeft:73}}>
              <div style={{marginTop:5,display:"flex",flexDirection:'row'}}>
                <h4 style={{marginTop:20,fontSize:20}}>My Submission</h4>
                <div style={{backgroundColor:"white",height:50,width:210,marginLeft:440,marginTop:10,borderRadius:20,display:"flex",flexDirection:"row"}}><svg style={{marginLeft:10,marginTop:7}} xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg> <p style={{marginTop:13,fontSize:20,marginLeft:10}}> Add submission </p></div>
                <h4 style={{marginTop:20,fontSize:20,marginLeft:480}}>Feedback</h4>
              </div>  
              <hr style={{backgroundColor:'black',marginTop:30}}></hr>
            <div style={{marginTop:20,display:"flex"}}>
                    <div style={{width:594,height:300}}>
                        <div style={{display:"flex"}}>
                            <img src={rakib} alt="" style={{width:50,height:50,marginLeft:7,borderRadius:50}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:22}}>Rakibul Hasan</h4>
                            <p style={{fontSize:16}}>updated on 31/12/2023 at 7.30pm</p>
                        </div> 
                        </div>
                        <div style={{marginLeft:65}}>
                            <h4 style={{fontSize:18,marginTop:20,marginBottom:15}}>Comments</h4>
                            <p style={{fontSize:18,marginBottom:15}}>I have provided my updated methodoloy on the following directory. check the updated files and let me know is their any correction needed. i will highly suggest to sadman to complete this part as if he is more fimiliar with this field.</p>
                            <h4 style={{marginBottom:15}}>Submitted file</h4>
                            <a href="study/sample.pdf" style={{color:"black",textDecoration:"none"}}>classtestquestion1.pdf</a>

                        </div>
                </div>
                <div style={{width:594,height:300,marginLeft:150}}>
                        <div style={{display:"flex"}}>
                                <img src={Tarek} alt="" style={{width:50,height:50,marginLeft:7,borderRadius:50}}></img>
                                <div style={{marginLeft:7,marginBottom:5}}>
                                <h4 style={{fontSize:22}}>Md Tarek Hasan</h4>
                                <p style={{fontSize:16}}>updated on 31/12/2023 at 7.30pm</p>
                            </div> 
                            </div>
                            <div style={{marginLeft:65}}>
                                <h4 style={{fontSize:18,marginTop:20,marginBottom:15}}>Feedback</h4>
                                <p style={{fontSize:18,marginBottom:15}}>I have provided my updated methodoloy on the following directory. check the updated files and let me know is their any correction needed. i will highly suggest to sadman to complete this part as if he is more fimiliar with this field.</p>
                                <h4 style={{marginBottom:15}}>Status</h4>
                                <p style={{color:"red",fontSize:18}}>In progress</p>

                            </div>
                </div>
            </div>
            <hr style={{backgroundColor:'black',marginTop:20,marginBottom:20}}></hr>
            <div style={{display:"flex"}}>
                            <img src={rakib} alt="" style={{width:50,height:50,marginLeft:7,borderRadius:50}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:22}}>Rakibul Hasan</h4>
                            <p style={{fontSize:16}}>updated on 31/12/2023 at 7.30pm</p>
                            </div> 
            </div>
            <div style={{display:"flex",flexDirection:'row'}}>
                <h4 style={{fontSize:18,marginTop:20,marginLeft:65}}>Comments</h4>
                <h3 style={{color:"red",fontSize:22,marginTop:5,marginLeft:650}}>No feedback yet </h3>
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default MyTask;