import React, { useState } from "react";
import '../CatSlider/CatSlider.css';
import Slider from "react-slick";
import '../../index.css';


function CatSlider(){

    const [itemBg,setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
    ])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade:false,
      };

    return(
        <div className="catSliderSection">
            <div className="container-fluid">
                <h2 className="hd">Featured Categories</h2>
                <Slider {...settings} className="cat_slider_Main">
                    {
                        itemBg.length!=0 && itemBg.map((item,idx)=>{
                            return(
                                <div className="item" key={idx}>
                                    <div className="info" style={{background:item}}>
                                        <img src="public\Images\thumbnail-2.jpg" alt="" className="w-100"/>
                                        <h5>Cake & Milk</h5>
                                        <p>26 items</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    {/* <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-3.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-2.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-3.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-2.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-3.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-2.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-3.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-2.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="info">
                            <img src="public\Images\thumbnail-3.jpg" alt="" className="w-100"/>
                            <h5>Cake & Milk</h5>
                            <p>26 items</p>
                        </div>
                    </div> */}
                </Slider>
            </div>
        </div>
    )
}

export default CatSlider;