import React from 'react';
//import { useRef,useEffect,useState } from 'react';
import "./../assets/css/HeaderNext.css";
import uiulogo from './../assets/media/images/uiulogo.png';

const HeaderNext = () => {

    // const [isClicked, setisClicked] = useState(true);
    // const [isClicked1, setisClicked1] = useState(false);
    // const handleClick1 = ()=>{
    //     setisClicked(true);
    //     setisClicked1(false);
    // }
    // const handleClick2 = ()=>{
    //     setisClicked1(true);
    //     setisClicked(false);
    // }

    // const headerimgRef = useRef();
    // const [headimg_isVisible, setheadimg_isVisible] = useState(false);
    // useEffect(()=>{
    //     const observer = new IntersectionObserver((entries)=>{
    //         const entry = entries[0];
    //         setheadimg_isVisible(entry.isIntersecting);
    //     })
    //     observer.observe(headerimgRef.current);
    // },[])

    return (
        <div>
            <div className='header-nav'>
                <img src={uiulogo} alt="" />
                <h2>United International University</h2>
                <div>
                    <h3 className='nav-item'>Alumni</h3>
                    <h3 className='nav-item'>Research</h3>
                    <h3 className='nav-item'>Academic Assistant</h3>
                </div>
            </div>
            {/* <div ref={headerimgRef} className={headimg_isVisible? 'header-img' : 'header-img_not'}>
                <div className='header-img_1'>
                    <button onClick={handleClick1} className={isClicked ? 'header-img_1_b1' : 'b1_not'} >Posted Jobs</button>
                    <button onClick={handleClick2} className={isClicked1 ? 'header-img_1_b2' : 'b2_not'} >Recent Recruitment</button>
                </div>
            </div> */}
        </div>
    );
};

export default HeaderNext;