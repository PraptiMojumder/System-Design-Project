import React from 'react';
import Adminlog from "./../assets/css/AdminLogin.module.css";
import UIUlogo from "./../assets/media/images/UIUlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from "./../assets/media/images/library.jpg";


const AdminLogin = () => {
    return (
        <div>
        <div className={Adminlog.screen} style={{width:"100%", backgroundImage: `url(${background})`}}>
       <div className={Adminlog.form}>
       <img className={Adminlog.img} src={UIUlogo} alt=""/>
        <div className={Adminlog.log}><h2>Login</h2></div> 
        <input type="name" name="name" placeholder="Username" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:10,border:'none',backgroundColor:'#D9D9D9'}} />
        <input type="password" name="password" placeholder="Password" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:10,border:'none',backgroundColor:'#D9D9D9'}}/>
        <div className={Adminlog.downbtn} style={{paddingLeft:10,width:394,height:45,borderRadius:8,backgroundColor:'#D9D9D9',marginBottom:10}}> 
        <button type='button' style={{backgroundColor:'#D9D9D9',border:'none',margin:0,padding:0}}>
        <select name="Department" id="Department">
        <option value="CSE"selected className={Adminlog.selectedValue}>Select Department</option>
        <option value="EEE">EEE</option>
        <option value="CSE">CSE</option>
        <option value="Civil">Civil</option>
        </select> 
        </button></div>
        <div className={Adminlog.btn}style={{backgroundColor:'#E14826',width:404}}><button type = "button" style={{width:394,height:45,borderRadius:8,marginBottom:10,border:'none',backgroundColor:'#E14826',fontWeight:'bold',textSize:110,color:'white', fontSize:'medium'}}>Log In</button></div> 
        {/* <input type="Submit" value="Login" style={{width:396,height:45,borderRadius:8,marginBottom:10,border:'none',backgroundColor:'#E14826'}}/> */}
       </div>
    </div>
    </div>
    
    );
};

export default AdminLogin;
