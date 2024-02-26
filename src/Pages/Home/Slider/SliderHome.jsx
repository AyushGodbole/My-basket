import React from "react";
import Slider from "react-slick";
import './Slider.css';

import Slider1 from '../../../../public/Images/slider-1.png';
import Slider2 from '../../../../public/Images/slider-2.png';


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
            <div className="container-fluid">
            {/* <i class="fa-solid fa-user-secret"></i> */}
            <Slider {...settings} className="home_slider_Main">
                <div className="item">
                    <img src={Slider1} alt="" className="w-100"/>
                </div>
                <div className="item">
                    <img src={Slider2} alt="" className="w-100"/>
                </div>
            </Slider>
            </div>
        </section>
    )
}

export default SliderHome;