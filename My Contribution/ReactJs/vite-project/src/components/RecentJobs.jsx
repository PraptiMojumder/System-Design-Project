import React, { useEffect, useState, useRef } from 'react';
import "./../assets/css/RecentJobs.css";
import tareksir from './../assets/media/images/tareksir.jpg';
import jobrecruitment from './../assets/media/images/jobrecruitment.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

const RecentJobs = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [showMore, setShowMore] = useState(false);

    const descriptionRef = useRef(null)
    useEffect(()=>{
        if(descriptionRef.current){
            console.log(descriptionRef.current.scrollHeight, descriptionRef.current.clientHeight);
            setShowMore(descriptionRef.current.scrollHeight!==descriptionRef.current.clientHeight);
        }
    },[])

    return (
        <div>
            <div className='header-job'>
                <img className='header-job_img1' src={tareksir} alt="" />
                <div className='header-job_info'>
                    <h4 className='job_info_fname'>Md Tarek Hasan</h4>
                    <h5 className='job_info_fstatus'>FACULTY PROFILE | Lecturer</h5>
                    <p className='job_info_postdate'>posted on 31/12/2023 at 15:45</p>
                    <h5 className='job_info_jobtitle'>Job Title</h5>
                    <p className='job_info_position'>Software Engineer</p>
                    <h5 className='job_info_description'>Description</h5>
                    <p ref={descriptionRef} className={isOpen ? 'job_info_details' : 'job_info_details_not'} >The Fastest Growing Cloud Based MarketPlace Company, Field Nation is looking for a "Software Engineer" for its development team. All the student of United International University is highly encouraged to apply here. All the student of United International University is highly encouraged to apply here.</p>
                    <div className='read-more'>
                        <span>Read More</span>
                        <FontAwesomeIcon className='readicon' icon={faArrowCircleRight} />
                    </div>
                    <h5 className='job_info_visit'>Visit Here</h5>
                    <a className='job_info_link' href="">Click to visit recruitment site</a>
                </div>
                <img className='header-job_img2' src={jobrecruitment} alt="" />
            </div>
            <br />
            <hr className='gray-line'/>
            <div className='header-job'>
                <img className='header-job_img1' src={tareksir} alt="" />
                <div className='header-job_info'>
                    <h4 className='job_info_fname'>Md Tarek Hasan</h4>
                    <h5 className='job_info_fstatus'>FACULTY PROFILE | Lecturer</h5>
                    <p className='job_info_postdate'>posted on 31/12/2023 at 15:45</p>
                    <h5 className='job_info_jobtitle'>Job Title</h5>
                    <p className='job_info_position'>Software Engineer</p>
                    <h5 className='job_info_description'>Description</h5>
                    <p ref={descriptionRef} className={isOpen ? 'job_info_details' : 'job_info_details_not'} >The Fastest Growing Cloud Based MarketPlace Company, Field Nation is looking for a "Software Engineer" for its development team. All the student of United International University is highly encouraged to apply here. All the student of United International University is highly encouraged to apply here.</p>
                    <div className='read-more'>
                        {showMore ? <span>Read More</span> : <span>Read Less</span>}
                        {showMore && (
                            <div>
                                <FontAwesomeIcon onClick={()=>setIsOpen(!isOpen)} className='readicon' icon={isOpen ? faArrowCircleRight : faArrowCircleLeft} />
                            </div> 
                        )}
                    </div>
                    <h5 className='job_info_visit'>Visit Here</h5>
                    <a className='job_info_link' href="">Click to visit recruitment site</a>
                </div>
                <img className='header-job_img2' src={jobrecruitment} alt="" />
            </div>
            {/* <div>
                <p ref={ref} className={isOpen ? 'rakib' : 'rakib_not'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, vero, consequatur consequuntur porro voluptates quidem dicta sit et non laborum corrupti molestias iusto facilis nisi sint itaque quas id officia.
                Eos, repudiandae! Ab, libero. Deleniti tenetur vero molestiae reprehenderit suscipit illum, velit sequi, sed veritatis modi facilis nulla, dolores doloremque repellendus eos autem hic laborum! Minima excepturi quod corrupti odit.
                Deleniti incidunt iste debitis minima qui dolorem perspiciatis. Error quisquam iste voluptatibus ipsum facilis! Culpa possimus debitis sequi atque. Amet nihil accusantium tenetur culpa placeat deserunt cupiditate quidem vero ea!
                Ad, quisquam similique! Et eius laudantium mollitia ipsum inventore earum vitae dolorum quidem rem! Harum optio totam ullam, aliquid iste quis illum obcaecati quos officiis quia est minima incidunt ex?
                Impedit earum porro veniam dignissimos provident illo iste, modi repellendus, explicabo aspernatur, cumque deserunt at fugiat perspiciatis delectus magnam obcaecati soluta ad quo pariatur facere in eaque nemo! Suscipit, inventore?</p>
                {showMore && (
                    <button onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'Read More...' : 'Read Less...'}</button>
                )}
            
            </div> */}
        </div>
    );
};

export default RecentJobs;