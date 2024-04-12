import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderSearchAndNotification from '../components/HeaderSearchAndNotification';
import HeaderNext from '../components/HeaderNext';
import color from "./../assets/css/MemberMeeting.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MemberMeeting = () => {
    return (
        <div>
            <Header/>
            <HeaderNext/>
            <HeaderSearchAndNotification/>
            <div className={color.meet}>
              <div className={color.Hline}><div className={color.back} style={{backgroundColor: 'rgba(0,0,255,0. 5)'}}><button type="button" className={color.back} style={{border:'none',height:64, width:91,margin:0}}><svg className={color.s} xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button></div><h1 >Create a meeting with Project members</h1></div> 
               <div className={color.optn}>
                    <h3>About meeting</h3>
                    <textarea className={color.meetdescrip} style={{width:617,height:150}}>Write about this meeting..</textarea>
                    <div className={color.met}><h3>Meeting info.</h3></div>
                    <div className={color.select}><input className={color.date} type="date" id="start" name="trip-start" value="2018-07-22" />
            
                    
                    <input className={color.time} id="appt-time" type="time" name="appt-time" value="13:30" />

                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                    <p>Select Time</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> */}
                    </div>
                    
                    
                    <input className={color.link} type="url"name="url" id="url"placeholder="Meeting link" size="50" required />

                    <div className={color.creat}><button style={{border:'none',backgroundColor:'#E97D7D'}}><h1 style={{color:"white"}}>Add</h1></button></div>
               </div>
         </div>
            <Footer/>

        </div>
    );
};

export default MemberMeeting;