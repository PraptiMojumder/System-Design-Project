import React from 'react';
import Grader from "./../assets/css/GraderList.module.css";
import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
//import { faItalic } from '@fortawesome/free-solid-svg-icons';
//import Tarek from './../assets/media/images/Tarek-Hasan.jpg';
import Footer from '../components/Footer';
import rakib from './../assets/media/images/rakib.jpg';
import Sadman from './../assets/media/images/Sadman.jpg';
import Tushar from './../assets/media/images/Tushar.jpg';
import Prapti from './../assets/media/images/Prapti2.jpg';
import dipa from './../assets/media/images/dipa.jpg';


const GraderList = () => {
    return (
        <div>
            <Header/>
            <HeaderNext/>
            <HeaderSearchAndNotification/>
            <div style={{height:150,backgroundColor:"#618264",padding:25}}>
                <p style={{fontSize:30,color:"white"}}><b>UIU Academic Assistant</b></p>
                <p style={{fontSize:22,color:"white",marginTop:25}}>A bridge that helps students cross the river of knowledge, turning obstacles into stepping stones on their educational journey and and discover the path to their aspirations.</p>
            </div>
                <div style={{display:"flex"}}>
                    <p style={{fontSize:30,color:"black",marginBottom:20,marginTop:30}}>Undergraduate Assistants (UA) and Graders List  |  Summer 2023</p>
                    <p style={{marginTop:30,fontSize:22,marginLeft:500}}>Department</p>
                    <svg style={{marginTop:35,marginLeft:7}} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </div>
                <p style={{fontSize:20,color:"black"}}>Department of computer science and engineering</p>
                <hr className={Grader.inline} style={{marginTop:30}}></hr>
                <div style={{height:90,backgroundColor:"white",display:"flex",justifyContent:"center",alignContent:"center",marginTop:40}}>
                     <div className={Grader.UA} style={{borderRadius:10,height:34,width:83,backgroundColor:"black",display:"flex",justifyContent:"center",alignContent:"center",marginRight:7}}><button style={{border:"none",backgroundColor:"black"}}><b style={{fontSize:18,color:"white"}}>UA</b></button></div>
                     <div className={Grader.Gra} style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignContent:"center",marginLeft:7}}><button style={{backgroundColor:"white",height:34,width:83,borderRadius:10,}}><b style={{fontSize:18,color:"black"}}>Grader</b></button></div>
                </div>
                <div style={{display:"flex",marginBottom:75}}>
                  <div>
                        <div style={{display:"flex"}}>
                            <img src={rakib} alt="" style={{width:100,height:100,marginLeft:7,borderRadius:20}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:24}}>Rakibul Hasan</h4>
                            <p style={{fontSize:20,marginTop:10}}>Undergraduate Assistants at UIU</p>
                            <p style={{fontSize:16,marginTop:4}}>Department of computer science and engineering</p>
                            <p style={{fontSize:16}}>Data Structure and algorithm  |  B  |  Summer 2023</p>
                            </div> 
                        </div>
                        <div style={{display:"flex",marginTop:40}}>
                            <img src={Sadman} alt="" style={{width:100,height:100,marginLeft:7,borderRadius:20}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:24}}>Sadman Sakib</h4>
                            <p style={{fontSize:20,marginTop:10}}>Undergraduate Assistants at UIU</p>
                            <p style={{fontSize:16,marginTop:4}}>Department of computer science and engineering</p>
                            <p style={{fontSize:16}}>Data Structure and algorithm  |  B  |  Summer 2023</p>
                            </div> 
                        </div>
                        <div style={{display:"flex",marginTop:40}}>
                            <img src={Tushar} alt="" style={{width:100,height:110,marginLeft:7,borderRadius:20}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:24}}>Mahmudur Rahman</h4>
                            <p style={{fontSize:20,marginTop:10}}>Undergraduate Assistants at UIU</p>
                            <p style={{fontSize:16,marginTop:4}}>Department of computer science and engineering</p>
                            <p style={{fontSize:16}}>Data Structure and algorithm  |  B  |  Summer 2023</p>
                            </div> 
                        </div>
                    </div>


                    <div style={{marginLeft:400}}>
                        <div style={{display:"flex"}}>
                            <img src={Prapti} alt="" style={{width:100,height:100,marginLeft:7,borderRadius:20}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:24}}>Prapti Mojumder</h4>
                            <p style={{fontSize:20,marginTop:10}}>Undergraduate Assistants at UIU</p>
                            <p style={{fontSize:16,marginTop:4}}>Department of computer science and engineering</p>
                            <p style={{fontSize:16}}>Data Structure and algorithm  |  B  |  Summer 2023</p>
                            </div> 
                        </div>
                        <div style={{display:"flex",marginTop:40}}>
                            <img src={dipa} alt="" style={{width:100,height:100,marginLeft:7,borderRadius:20}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:24}}>Dipa Akter</h4>
                            <p style={{fontSize:20,marginTop:10}}>Undergraduate Assistants at UIU</p>
                            <p style={{fontSize:16,marginTop:4}}>Department of computer science and engineering</p>
                            <p style={{fontSize:16}}>Data Structure and algorithm  |  B  |  Summer 2023</p>
                            </div> 
                        </div>
                        <div style={{display:"flex",marginTop:40}}>
                            <img src={Tushar} alt="" style={{width:100,height:110,marginLeft:7,borderRadius:20}}></img>
                            <div style={{marginLeft:7,marginBottom:5}}>
                            <h4 style={{fontSize:24}}>MD Easin</h4>
                            <p style={{fontSize:20,marginTop:10}}>Undergraduate Assistants at UIU</p>
                            <p style={{fontSize:16,marginTop:4}}>Department of computer science and engineering</p>
                            <p style={{fontSize:16}}>Data Structure and algorithm  |  B  |  Summer 2023</p>
                            </div> 
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default GraderList;