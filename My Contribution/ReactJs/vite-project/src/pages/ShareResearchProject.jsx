import React from 'react';
import research from "./../assets/css/ShareResearchProject.module.css";
import Footer from './../components/Footer';
import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ShareResearchProject = () => {
    return (
        <div>
            <Header/>
            <HeaderNext/>
            <HeaderSearchAndNotification/>
            <div className={research.OuterFrame}>
                <div className={research.frame}>
                    <div className={research.Hline}>
                        <div className={research.back} style={{backgroundColor: 'rgba(0,0,255,0. 5)', marginLeft:93,marginTop:5}}>
                            <button type={research.button} className={research.back} style={{border:'none',height:64, width:91,margin:0}}>
                             <svg className={research.s}xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
                        </div>
                        <div className={research.FirstHeadline} style={{marginLeft:30,marginTop:25}}><h1>Share your research project</h1></div>
                        </div>
                        <div className={research.Innerframe}>
                           <div className={research.SecondHeadLine} style={{color:"#047123"}}><h2>Has your research project been published?</h2></div>
                           <div className={research.Btn}><button className={research.yes} style={{width:110,height:37,borderRadius:20,marginLeft:130,backgroundColor:"green",color:"white",border:"none"}}>Yes</button><button className={research.no} style={{width:110,height:37,marginLeft:20,borderRadius:20,backgroundColor:"red",color:"white",border:"none"}}>No</button></div>
                          <h3 style={{marginTop:50}}>Publication link</h3>
                          <input placeholder="Enter publication link.." style={{width:617,height:49,backgroundColor:"white",borderRadius:15,marginBottom:20,paddingLeft:10}}></input>
                          <h3>Upload project</h3>
                          <div style={{width:100,height:40,marginTop:15,marginLeft:5,backgroundColor:"white",borderRadius:15}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{marginTop:10,marginLeft:5}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg><input type="file" id="files" style={{marginTop:10,display:"none"}}></input><label htmlFor='files' style={{marginLeft:5}}>Add files</label></div>
                          <div className={research.share} style={{width:614,height:42,backgroundColor:"#496DEB",borderRadius:15,color:"white",display:"flex",justifyContent:" center",alignItems:"center",marginTop:20}}>Share</div>
                          
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ShareResearchProject;