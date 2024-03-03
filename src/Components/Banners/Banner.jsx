import React from "react";
import '../Banners/Banner.css';
import Banner1 from '../../../public/Images/banner1.jpg';
import Banner2 from '../../../public/Images/banner2.jpg';
import Banner3 from '../../../public/Images/banner3.jpg';



function Banner(){
    return(
        <>
            <div className="bannerSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box">
                                <img src={Banner1} alt="" className="w-100"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box">
                                <img src={Banner2} alt="" className="w-100"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box">
                                <img src={Banner3} alt="" className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;