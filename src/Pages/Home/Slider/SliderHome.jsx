import React from "react";
import Slider from "react-slick";
import './Slider.css';

import Slider1 from '../../../../public/Images/slider-1.png';
import Slider2 from '../../../../public/Images/slider-2.png';

import { Button } from "@mui/material";
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IoIosSend } from "react-icons/io";

const SliderHome =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true,
      };

    return(
        <section className="homeSlider">
            <div className="container-fluid position-relative">
            {/* <i class="fa-solid fa-user-secret"></i> */}
            <Slider {...settings} className="home_slider_Main">
                <div className="item">
                    <img src={Slider1} alt="" className="w-100"/>
                    <div className="info">
                        <h2 className="mb-4">
                            Don't miss amazing<br/>
                            grocery deals
                        </h2>
                        <p>Sign up for the daily newsletter</p>
                    </div>
                </div>
                <div className="item">
                    <img src={Slider2} alt="" className="w-100"/>
                    <div className="info">
                        <h2 className="mb-4">
                            Fresh Vegetables<br/>
                            Big discount
                        </h2>
                        <p>Save up to 50% off on your first order</p>
                    </div>
                </div>
            </Slider>

            <div className="newsletterBanner d-flex align-items-center">
                <IoIosSend className="send"/>
                <input type="text" placeholder="Your email address"/>
                <Button className="bg-success">Subscribe</Button>
            </div>
            </div>
        </section>
    )
}

export default SliderHome;