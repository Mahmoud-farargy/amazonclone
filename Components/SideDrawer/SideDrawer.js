import React, {useEffect} from "react";
import {FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {MdKeyboardArrowRight} from "react-icons/md";
import $ from "jquery";

const SideDrawer = (props)=>{
    
    let {handleDrawer, sideDrawerStatus , customersName, cartArrLength , wishArrLength, userStatus } = props;
    useEffect(()=>{ //event delegation
        $(".sideDrawer .sideDrawer__body ul li").on("click", function(){
            handleDrawer(false);
        })  
    });
    
    return(
        <div className="sideDrawer" style={{
            transform: sideDrawerStatus ? "translateX(0)": "translateX(-100%)",
            opacity: sideDrawerStatus ? "1" : "0",
            transition: "all 0.4s linear " 
        }}>
                {
                sideDrawerStatus ?
                    <div className="customer__profile">
                       <div><FaUserCircle className="profile_icon"/> <span className="profile_name">Hello, {customersName}</span></div>
                       <h5 className="close_sideDrawer_icon" onClick={()=> handleDrawer(false)}>&times;</h5> 
                    </div>
                  : null
                }      
                <div className="sideDrawer__body">
                    <h4 className="ul__upper__title">Lists</h4>
                    <ul className="sideDrawer_ul">
                        <Link to="/wish-list"><li>Wish list{
                            wishArrLength >=1
                            ?
                            <span className="cart-notif ml-2">
                                <strong >{wishArrLength}</strong>
                            </span>
                            :
                            null
                        }

                        </li></Link>
                        
                        <Link to="/cart"><li>shopping cart {
                            cartArrLength >=1
                            ?
                            <span className="cart-notif ml-2">
                                <strong >{cartArrLength}</strong>
                            </span>
                            :
                            null
                        }</li></Link>

                        <Link to="/orders"><li>Orders</li></Link>
                    </ul>
                    <hr/>
                    <h4 className="ul__upper__title">shop by category</h4>
                    <ul className="sideDrawer_ul categories-ul">
                        
                        <Link exact="true" to={`/category/tech`} ><li><span>Technology</span> <MdKeyboardArrowRight className="sideDrawer_arrow_right"/></li></Link>
                        <Link exact="true" to={`/category/kitchen`} ><li><span>Kitchen</span> <MdKeyboardArrowRight className="sideDrawer_arrow_right"/></li></Link>
                        <Link exact="true" to={`/category/videoGames`} ><li><span>Video Games</span> <MdKeyboardArrowRight className="sideDrawer_arrow_right"/></li></Link>
                        <Link exact="true" to={`/category/watches`} ><li><span>Watches</span> <MdKeyboardArrowRight className="sideDrawer_arrow_right"/></li></Link>
                    </ul>
                    <hr/>
                    <h4 className="ul__upper__title">Settings</h4>
                    <ul className="sideDrawer_ul">
                        
                        {!userStatus ? <Link exact="true" to="/login"><li>Sign In</li></Link>
                            : <span className="fake-link" onClick={()=> props.signOut()}>Sign out</span>
                        }
                        <Link exact="true" to="/about"><li>About</li></Link>
                    </ul>
                    
                 </div>
                
        </div>
    )
}

export default SideDrawer;