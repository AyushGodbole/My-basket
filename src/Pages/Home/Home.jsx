import React from "react";
import SliderBanner from "./Slider/SliderHome.jsx";
import CatSlider from "../../Components/CatSlider/CatSlider.jsx";
import Banner from "../../Components/Banners/Banner.jsx";
import '../Home/Home.css';
import Product from "../../Components/Product/Product.jsx";
import Banner4 from '../../../public/Images/banner4.jpg';

import Slider from "react-slick";
import TopProducts from "./topProducts/TopProducts.jsx";
import "./topProducts/TopProducts.css";

import newsletterImg from '../../../public/Images/newsletter.png';
import Newsletter from "../../Components/Newsletter/Newsletter.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home(){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
        autoplay: true,
        autoplaySpeed:2000,
        cssEase:"linear"
      };

    return(
        <>
            <SliderBanner/>
            <CatSlider/>

            <Banner/>

            <section className="homeProducts">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd">Popular Products</h2>
                        <ul className="list list-inline filterTab">
                            <li className="list-inline-item">
                                <a href="#" className="cursor">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Milk & Dairies</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Coffes & Teas</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Pet Foods</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Meats</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Vegetables</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Fruits</a>
                            </li>
                        </ul>
                    </div>

                    <div className="productRow">
                        <div className="item">
                            <Product tag='hot'/>
                        </div>

                        <div className="item">
                            <Product tag='new' />
                        </div>

                        <div className="item">
                            <Product tag='best' />
                        </div>

                        <div className="item">
                            <Product tag='sale' />
                        </div>

                        <div className="item">
                            <Product/>
                        </div>


                        <div className="item">
                            <Product tag='new'/>
                        </div>

                        <div className="item">
                            <Product/>
                        </div>

                        <div className="item">
                            <Product tag='sale'/>
                        </div>

                        <div className="item">
                            <Product/>
                        </div>

                        <div className="item">
                            <Product tag='hot'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="homeProducts homeProductsRow2">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd">Daily Best Sells</h2>
                        <ul className="list list-inline filterTab">
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Featured</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">Popular</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="cursor">New Added</a>
                            </li>
                        </ul>
                    </div>

                    <br/>

                    <div className="row d-flex align-items-center">
                        <div className="col-md-3 pr">
                            <img src={Banner4} className="w-100" />
                        </div>

                        <div className="col-md-9">
                        <Slider {...settings} className="prodSlider">
                            <div className="item">
                                <Product tag='new'/>
                            </div>
                            <div className="item">
                                <Product tag='best'/>
                            </div>
                            <div className="item">
                                <Product tag='hot'/>
                            </div>
                            <div className="item">
                                <Product tag='sale'/>
                            </div>
                            <div className="item">
                                <Product tag='new'/>
                            </div>
                            <div className="item">
                                <Product tag='hot'/>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="topProductsSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <TopProducts title={'Top Selling'}/>
                        </div>

                        <div className="col">
                            <TopProducts title={'Trending Products'}/>
                        </div>

                        <div className="col">
                            <TopProducts title={'Recently added'}/>
                        </div>

                        <div className="col">
                            <TopProducts title={'Top Rated'}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletterSection">
                <div className="container-fluid">
                    <div className="box d-flex align-items-center">
                        <div className="info">
                            <h2>Stay at your home & get your dialy<br/>needs from our shop</h2>
                            <p>Start You'r Daily Shopping with Nest Mart </p>

                            <br/>
                            <br/>

                            <Newsletter/>
                        </div>

                        <div className="img">
                            <img src={newsletterImg} alt="" className="w-100"/>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Home;