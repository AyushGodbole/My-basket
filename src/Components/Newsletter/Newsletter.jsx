import React from "react";
import { Button } from "@mui/material";
import { IoIosSend } from "react-icons/io";
import '../Newsletter/Newsletter.css';

function Newsletter(){
    return(
        <>
            <div className="newsletterBanner d-flex align-items-center">
                <IoIosSend className="send"/>
                <input type="text" placeholder="Your email address"/>
                <Button className="bg-success">Subscribe</Button>
            </div>
        </>
    )
}

export default Newsletter;