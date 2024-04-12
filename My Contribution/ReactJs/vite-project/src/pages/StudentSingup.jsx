import React from 'react';
import StudentSing from "./../assets/css/StudentSingup.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from "./../assets/media/images/rain2.jpg";
import UIUlogo from "./../assets/media/images/UIUlogo.png";


const StudentSingup = () => {
    return (
        <div>
            <div className={StudentSing.screen}style={{ width:"100%", backgroundImage: `url(${background})`}}>
            <div className={StudentSing.form}>
            <img className={StudentSing.img} style={{marginTop:0}} src={UIUlogo} alt=""/>
            <div className={StudentSing.log}><h2>Singup</h2></div> 
            <input type="name" name="name" placeholder="Full Name" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:15,border:'none',backgroundColor:'#D9D9D9'}} />
            <input type="id" name="ID" placeholder="Studend ID" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:15,border:'none',backgroundColor:'#D9D9D9'}} />
            <input type="email" name="email" placeholder="Email" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:15,border:'none',backgroundColor:'#D9D9D9'}}/>
            <input type="cgpa" name="cgpa" placeholder="CGPA" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:15,border:'none',backgroundColor:'#D9D9D9'}}/>
            <input type="credit" name="credit" placeholder="Completed Credit" style={{paddingLeft:10,width:394,height:45,borderRadius:8,marginBottom:15,border:'none',backgroundColor:'#D9D9D9'}}/>
            <div className={StudentSing.downbtn} style={{paddingLeft:10,width:394,height:45,borderRadius:8,backgroundColor:'#D9D9D9',marginBottom:15}}> 
            <button type='button' style={{backgroundColor:'#D9D9D9',border:'none',margin:0,padding:0}}>
            <select name="Department" id="Department">
            <option value="CSE"selected className={StudentSing.selectedValue}>Select Department</option>
            <option value="EEE">EEE</option>
            <option value="CSE">CSE</option>
            <option value="Civil">Civil</option>
            </select> 
            </button></div>
            <div className={StudentSing.btn} style={{marginTop:25,backgroundColor:'#E14826'}}><button type = "button" style={{width:396,height:35,borderRadius:8,marginBottom:15,border:'none',backgroundColor:'#E14826',fontWeight:'bold',fontSize:'medium',textSize:110,color:'white'}}>Register</button></div> 
            
            <div className={StudentSing.click}> <p className="Isregesterd" style={{color:'white',marginTop:18,marginRight:13}}>Already Registered?</p><div className="Login" style={{width:160,height:37,marginTop:10,marginBottom:5,borderRadius:20,backgroundColor:'#E14826',marginLeft:8}}><button  style={{color:'white',backgroundColor:'#E14826',border:'none',width:160,height:37,borderRadius:20}}> Login Here</button></div></div>

           </div>
        </div>
        </div>
    );
};

export default StudentSingup;