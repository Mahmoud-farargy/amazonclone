import React from "react";
import Auxiliary from "../HOC/Auxiliary/Auxiliary";
import {HiOutlineLocationMarker} from "react-icons/hi";
import "./SubHeader.css";
const SubHeader = (props) =>{
    return(
        <Auxiliary>
            <div className="subHeader">
                <div className="subHeader-inner">
                    <HiOutlineLocationMarker className="location__icon"/>
                    <div className="d-flex flex-column w-25">
                        <small>deliver to</small>
                        <h6>Egypt</h6>
                    </div>
                    <nav className="navbar navbar-expand-lg w-100  ml-2">
                        <ul className="navbar-nav desktop-show">
                            <li className="nav-item">Today's deal</li>
                            <li className="nav-item">Customer Service</li>
                            <li className="nav-item">gift cards</li>
                            <li className="nav-item">Registry</li>
                            <li className="nav-item">Sell</li>
                        </ul>
                    </nav>  
                </div>
                
            </div>
        </Auxiliary>
    )
}

export default SubHeader;