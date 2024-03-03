import React, { useEffect, useState } from "react";
import '../Header/Header.css';
import Logo from '../../../public/Images/logo.svg'
import IconCompare from '../../../public/Images/icon-compare.svg';
import IconWishlist from '../../../public/Images/icon-heart.svg';
import IconCart from '../../../public/Images/icon-cart.svg';
import Account from '../../../public/Images/icon-user.svg';


import '../../../src/index.css';
import {FaSearch, FaSignOutAlt} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import Select from "../SelectDrop/Select.jsx";
import axios from "axios";

import { Button, ClickAwayListener } from "@mui/material";
import { FaUser , FaHeart , FaGear} from "react-icons/fa6";
import Nav from "./Nav/Nav.jsx";

function Header(){

    const [isOpenDropdown,setOpenDropdown] = useState(false);

    const [categories,setCategories] = useState([
        'Wines and Drinks',
        'Clothing and beauty',
        'Fresh seafood',
        'Milk and Dairies',
        'Pet foods and toys',
        'Fast food',
        'Baking material',
        'Bread and Juice',
        'Milk and Dairies',
        'Wines and Drinks',
        'Clothing and beauty',
        'Fresh seafood'
    ])

    const [countryList,setCountryList] = useState([]);

    const getCountry= async(url)=>{
        try {
            const response = await axios.get(url)
            // console.log(response?.data?.data);

            if(response){
                response.data.data.map((item,idx)=>{
                    countryList.push(item.country);
                })

                // console.log('sjsj',countryList);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleOpenDropdown=()=>{
        setOpenDropdown(!isOpenDropdown);
    }

    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    },[])

    return(
        <>
            <div className="headerWrapper">
            <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1" style={{width:'12.33%'}}>
                        <img src={Logo} alt="logo" style={{height:'44px'}}/>
                    </div>

                    {/* search box */}
                    <div className="col-sm-5">
                        <div className="headerSearch d-flex align-items-center">
                            <Select data={categories} placeholder={'All Categories'}/>

                            <div className="search position-relative">
                                <input type="text" placeholder="seacrh for items..."/>
                                <FaSearch className="searchIcon cursor"/> 
                            </div> 
                        </div>
                    </div>

                    <div className="col-sm-5 d-flex align-items-center justify-content-end">
                        <div className="d-flex align-items-center">
                            <div className="countryWrapper">
                                <Select data={countryList} placeholder={'Your location'} icon={<FaLocationDot style={{opacity:'0.5' , width:'18%'}}/>}/>
                            </div>

                            <ul className="list list-inline mb-0 headerTabs">

                                <li className="list-inline-item"> 
                                        <span>
                                            <img src={IconCompare} alt="comp" style={{height:'21px'}}/>
                                            <span className="badge bg-success rounded-circle">3</span>
                                            Compare</span>
                                </li>

                                <li className="list-inline-item"> 
                                    <span>
                                        <img src={IconWishlist} alt="wish" style={{height:'21px'}}/>
                                        <span className="badge bg-success rounded-circle">3</span>
                                        Wishlist</span>
                                </li>

                                <li className="list-inline-item"> 
                                    <span>
                                        <img src={IconCart} alt="cart" style={{height:'21px'}}/>
                                        <span className="badge bg-success rounded-circle">3</span>
                                        Cart</span>
                                </li>

                                <li className="list-inline-item"> 
                                    <span onClick={handleOpenDropdown}>
                                        <img src={Account} alt="account" style={{height:'21px'}}/>
                                        Account
                                    </span>

                                    {
                                        isOpenDropdown && 
                                        <ClickAwayListener onClickAway={()=>setOpenDropdown(false)}>
                                            <ul className="dropdownMenu">
                                                <li><Button><FaUser/>My Account</Button></li>
                                                <li><Button><FaLocationDot/>Order Tracking</Button></li>
                                                <li><Button><FaHeart/>My Wishlist</Button></li>
                                                <li><Button><FaGear/>Setting</Button></li>
                                                <li><Button><FaSignOutAlt/>Signout</Button></li>
                                            </ul>
                                        </ClickAwayListener>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </div>
        </header>
        <Nav/>
            </div>
        </>
    )
}

export default Header;