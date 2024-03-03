import React from 'react';
import '../Product/Product.css'
import '../../../src/index.css';
import productImage from '../../../public/Images/bottle.jpg';
import { Button, Rating , Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { Link } from 'react-router-dom';

import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function Product({tag}){
    return(
        <>
            <div className="productThumb">
                {tag!=null && tag!=undefined && 
                    <span className={`badge ${tag}`}>{tag}</span>
                }
                <Link>
                    <div className="imageWrapper">
                        <img src={productImage} alt="" className='w-100'/>

                        <div className="overlay">
                            <ul className='list list-inline'>
                                <li className='list-inline-item'>
                                    <Tooltip title='Add to wishlist' TransitionComponent={Zoom}>
                                        <Link className='cursor'>
                                            <FaRegHeart/>
                                        </Link>
                                    </Tooltip>
                                </li>

                                <li className='list-inline-item'>
                                    <Tooltip title='Compare' TransitionComponent={Zoom}>
                                        <Link className='cursor'>
                                            <MdCompareArrows/>
                                        </Link>
                                    </Tooltip>
                                </li>

                                <li className='list-inline-item'>
                                    <Tooltip title='Quick view' TransitionComponent={Zoom}>
                                        <Link className='cursor'>
                                            <FaEye/>
                                        </Link>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Link>

                <div className="info">
                    <span className="d-block catName">Snack</span>
                    <h4 className="title"><Link>Seeds of Charge Organic Quinoa , Brown , & Red Rice</Link></h4>
                    <Rating name='half-rating-read' defaultValue={3.5} precision={0.5} readOnly/>
                    <span className="brand d-block">By <Link className='text-g'>NestFood</Link></span>


                    <div className="d-flex align-items-center desc">
                        <div className="d-flex align-items-center">
                            <span className='price text-g'>$28.85</span>&nbsp; <span className='oldPrice'>$32.8</span>
                        </div>

                        <Button className='add-btn'><BsCart3 />&nbsp; Add</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;