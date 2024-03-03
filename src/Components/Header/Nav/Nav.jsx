import React, { useEffect, useRef } from "react";
import '../Nav/Nav.css';
import '../../../../src/index.css';
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import {IoGrid} from 'react-icons/io5'

import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

import menuBanner from '../../../../public/Images/banner-menu.webp';

function Nav(){

    const headerRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            let position = window.pageYOffset;

            if(position>100){
                headerRef.current.classList.add('fixed');
            }
            else{
                headerRef.current.classList.remove('fixed');
            }
        })
    },[])

    return(
        <div ref={headerRef} className="nav headerWrapper d-flex align-items-center">
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-sm-2 part1 d-flex align-items-center">
                        <Button className="bg-success text-white catTabs"><IoGrid/>&nbsp; Browse All Categories &nbsp;<FaAngleDown/></Button>
                    </div>

                    <div className="col-sm-8 part2 position-static">
                        <nav>
                            <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button><Link>Home</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>About</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Vendors</Link></Button>
                                </li>
                                <li className="list-inline-item position-static">
                                    <Button><Link>Mega Menu &nbsp;<FaAngleDown/></Link></Button>

                                    <div className="dropdown_menu megaMenu">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-g">Fruit & Vegetables</h4>
                                                <ul className="mt-4 mb-0">
                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasoning</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packed Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Breakfast & Dairy</h4>
                                                <ul className="mt-4 mb-0">
                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasoning</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packed Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className="text-g">Meat & Seafood</h4>
                                                <ul className="mt-4 mb-0">
                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasoning</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packed Produce</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col">
                                                <img src={menuBanner} alt="" style={{height:'220px', borderRadius:'10px' , width:'110%'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Pages &nbsp;<FaAngleDown/></Link></Button>

                                    <div className="dropdown_menu">
                                        <ul className="list list-inline mb-0">
                                            <li><Button><Link to={'/about'}>About us</Link></Button></li>
                                            <li><Button><Link>Contact</Link></Button></li>
                                            <li><Button><Link>My Account</Link></Button></li>
                                            <li><Button><Link>Login</Link></Button></li>
                                            <li><Button><Link>Register</Link></Button></li>
                                            <li><Button><Link>Forgot Password</Link></Button></li>
                                            <li><Button><Link>Reser Password</Link></Button></li>
                                            <li><Button><Link>Purchase Guide</Link></Button></li>
                                            <li><Button><Link>Pricing policy</Link></Button></li>
                                            <li><Button><Link>Terms of service</Link></Button></li>
                                            <li><Button><Link>404 page</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Button><Link>Contact</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-sm-2 part3 d-flex align-items-center">
                        <div className="phNo d-flex align-items-center">
                            <span><FaPhone/></span>
                            <div className="info ml-3">
                                <h3 className="text-g mb-0">1800-190</h3>
                                <p className="mb-0">24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;