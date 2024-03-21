import React from "react";
import '../Footer/Footer.css';

import Icon1 from '../../../public/Images/icon1.svg';
import Icon2 from '../../../public/Images/icon2.svg';
import Icon3 from '../../../public/Images/icon3.svg';
import Icon4 from '../../../public/Images/icon4.svg';
import Icon5 from '../../../public/Images/icon5.svg';

import Logo from '../../../public/Images/logo.svg';
import { Link } from "react-router-dom";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import HeadphonesIcon from '@mui/icons-material/Headphones';

import appStore from '../../../public/Images/app-store.jpg';
import googlePlay from '../../../public/Images/google-play.jpg';
import paymentImage from '../../../public/Images/payment-method.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer(){
    return(
        <>
        <div className="footerWrapper">
            <div className="footerboxes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="box d-flex align-items-center">
                                <span><img src={Icon1} alt="" className="w-100"/></span>
                                <div className="info">
                                    <h4>Best prices & offers</h4>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center">
                                <span><img src={Icon2} alt="" className="w-100"/></span>
                                <div className="info">
                                    <h4>Free delivery</h4>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center">
                                <span><img src={Icon3} alt="" className="w-100"/></span>
                                <div className="info">
                                    <h4>Great daily deal</h4>
                                    <p>when you sign up</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center">
                                <span><img src={Icon4} alt="" className="w-100"/></span>
                                <div className="info">
                                    <h4>Wide assortment</h4>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center">
                                <span><img src={Icon5} alt="" className="w-100"/></span>
                                <div className="info">
                                    <h4>Easy returns</h4>
                                    <p>within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 part1">
                            <Link to={'/'}><img src={Logo} alt=""/></Link>
                            <br /> <br />
                            <p>Awesome grocery website template</p>

                            <p><LocationOnIcon/> <strong>Address:</strong> 5171 W Campbell Ave undefined Kent , Uttah 53127 USA</p>
                            <p><HeadphonesIcon/> <strong>Call us:</strong> (+91) - 540-025-124553</p>
                            <p><EmailIcon/> <strong>Email:</strong> sale@nest.com</p>
                            <p><WatchLaterIcon/> <strong>Hours:</strong> 10.00 - 18.00 , Mon-Sat</p>
                        </div>

                        <div className="col-md-6 part2">
                            <div className="row">
                                <div className="col">
                                    <h3 className="company">Company</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About us</Link></li>
                                        <li><Link to="#">Delivery information</Link></li>
                                        <li><Link to="#">Privacy policy</Link></li>
                                        <li><Link to="#">Terms &amp; conditions</Link></li>
                                        <li><Link to="#">Contact us</Link></li>
                                        <li><Link to="#">Support center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Account</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">Account</Link></li>
                                        <li><Link to="#">Delivery information</Link></li>
                                        <li><Link to="#">Privacy policy</Link></li>
                                        <li><Link to="#">Terms &amp; conditions</Link></li>
                                        <li><Link to="#">Contact us</Link></li>
                                        <li><Link to="#">Support center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>


                                <div className="col">
                                    <h3>Corporate</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About us</Link></li>
                                        <li><Link to="#">Delivery information</Link></li>
                                        <li><Link to="#">Privacy policy</Link></li>
                                        <li><Link to="#">Terms &amp; conditions</Link></li>
                                        <li><Link to="#">Contact us</Link></li>
                                        <li><Link to="#">Support center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>

                                <div className="col">
                                    <h3>Popular</h3>
                                    <ul className="footer-list mb-sm-5 mb-md-0">
                                        <li><Link to="#">About us</Link></li>
                                        <li><Link to="#">Delivery information</Link></li>
                                        <li><Link to="#">Privacy policy</Link></li>
                                        <li><Link to="#">Terms &amp; conditions</Link></li>
                                        <li><Link to="#">Contact us</Link></li>
                                        <li><Link to="#">Support center</Link></li>
                                        <li><Link to="#">Careers</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 part3">
                            <h3>Install App</h3>
                            <br />
                            <p>From App Store or Google Play</p>

                            <div className="d-flex">
                                <Link><img src={appStore} alt="" width={128}/></Link>
                                <Link><img src={googlePlay} alt="" className="mx-2" width={128}/></Link>
                            </div>

                            <br />
                            <p>Secured Payment Gateway</p>
                            <img src={paymentImage} alt=""/>
                        </div>
                    </div>

                    <hr />

                    <div className="row laststripe">
                        <div className="col-md-3">
                            <p>© 2022, Nest - HTML Ecommerce Template
                                    All rights reserved</p>
                        </div>

                        <div className="col-md-6 d-flex">
                            <div className="phone d-flex align-items-center">
                                <div className="phNo d-flex align-items-center">
                                <span><HeadphonesIcon/></span>
                                <div className="info ml-3">
                                    <h3 className="text-g mb-0">1800-190</h3>
                                    <p className="mb-0">24/7 Support Center</p>
                                </div>
                                </div>

                                <div className="phNo d-flex align-items-center">
                                <span><HeadphonesIcon/></span>
                                <div className="info ml-3">
                                    <h3 className="text-g mb-0">1900-190</h3>
                                    <p className="mb-0">24/7 Support Center</p>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 part3">
                            <div className="d-flex align-items-center">
                                <h5>Follow us</h5>
                                <ul className="list list-inline">
                                    <li className="list-inline-item">
                                        <Link to={''}><FacebookIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><XIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><InstagramIcon/></Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to={''}><YouTubeIcon/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer;