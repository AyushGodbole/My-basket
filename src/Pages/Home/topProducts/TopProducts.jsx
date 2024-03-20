import React from "react";
import '../topProducts/TopProducts.css';
import { Link } from "react-router-dom";
import img1 from '../../../../public/Images/thumbnail-1.jpg';
import { Rating } from "@mui/material";
import '../../../Components/Product/Product.css';

function TopProducts({title}){
    return(
        <>
            <div className="topSellingBox">
                <h3>{title}</h3>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to={""}>
                            <img src={img1} alt="" className="w-100"/>
                        </Link>
                    </div>

                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>

                        <div className="d-flex align-items-center">
                            <span className="price text-g font-weight-bold">$28.85</span>
                            <span className="oldPrice">$32.8</span>
                        </div>
                    </div>
                </div>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to={""}>
                            <img src={img1} alt="" className="w-100"/>
                        </Link>
                    </div>

                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>

                        <div className="d-flex align-items-center">
                            <span className="price text-g font-weight-bold">$28.85</span>
                            <span className="oldPrice">$32.8</span>
                        </div>
                    </div>
                </div>

                <div className="items d-flex align-items-center">
                    <div className="img">
                        <Link to={""}>
                            <img src={img1} alt="" className="w-100"/>
                        </Link>
                    </div>

                    <div className="info px-3">
                        <Link to=""><h4>Nestle Original Coffee-mate Coffee Creamer</h4></Link>
                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>

                        <div className="d-flex align-items-center">
                            <span className="price text-g font-weight-bold">$28.85</span>
                            <span className="oldPrice">$32.8</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopProducts;