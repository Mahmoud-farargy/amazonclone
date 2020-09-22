import React, {useEffect} from "react";
import logo from "../../images/logo.png";
import {FaSearch} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {Link, NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import "./Header.css";
import Auxiliary from "../HOC/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import SideDrawer from "../SideDrawer/SideDrawer";
import CartSideDrawer from "../SideDrawer/CartSideDrawer";
import {auth} from "../../firebase/config";
import $ from "jquery";

const Header = (props)=>{
    useEffect(()=>{
        console.log("trigged");
        if(props.sideDrawerStatus){
            $("body").css("overflow","hidden");
        }else{
            $("body").css("overflow","auto");
        }
        
    },[props.sideDrawerStatus]);
    const signOut= ()=>{
        auth.signOut()
    }
    return(
    <Auxiliary>
        <header className="mainHeader" id="navTop">
            <div className="header-inner"> 
            <button className="burger__btn" onClick={()=> props.handleDrawer(true)}><div></div><div></div><div></div></button>
            <Link to="/">
                <img className="logo" src={logo} alt="" />
            </Link>

            
            <nav className="navbar navbar-expand-lg w-100" >
                    <input className="input-search desktop-show" type="text" />
                    <button className="upper__search__btn desktop-show"><FaSearch /></button>

                <ul className="navbar-nav  ml-auto">
                <div className="desktop-flex">
                    {!props.isUserLoggedIn ?
                    <NavLink to="/login" tag="li" className="nav-item">
                        <small>Hello, Sign in</small>
                        <h5>Sign in</h5>
                    </NavLink>
                    : <span onClick={()=> signOut()}>
                        <small>Hello, {props.customersName}</small>
                        <h5>Sign out</h5>
                    </span>
                    }
                    <NavLink to="/orders" tag="li" className="nav-item">
                        <small>returns</small>
                        <h5>& orders</h5>
                    </NavLink>
                    {/* <li className="nav-item">
                        <small>Your</small>
                        <h5>prime</h5>
                    </li> */}
                </div>
                    <NavLink to="/cart" tag="li" className="nav-item cart-side">
                        
                        <h5 className="cartItemsCount">{props.cartItems.length}</h5>
                        <FaShoppingCart style={{fontSize:"1.7rem", marginRight:"1px", position:"absolute", bottom:"-12px",left:"50%", transform: "translate(-50%,-50%)"}} className="shopping__cart__icon"/>
                           
                    </NavLink>
                </ul>
            </nav>
        </div>
            <form className="mobile-show" id="mobile-header-form">
                    <input  type="text" />
                    <button className="upper__search__btn"><FaSearch /></button>
            </form>
            <ul className="navbar-nav mobile-sub-nav mobile-show">
                <li className="nav-item">Today's deal</li>
                <li className="nav-item">Customer Service</li>
                <li className="nav-item">gift cards</li>
                <li className="nav-item">Registry</li>
                <li className="nav-item">Sell</li>
            </ul>
            <Backdrop />
            <SideDrawer sideDrawerStatus={props.sideDrawerStatus}
             handleDrawer={props.handleDrawer}
             customersName={props.customersName}
             cartArrLength={props.cartItems.length}
             userStatus={props.isUserLoggedIn}
             wishArrLength={props.wishList.length} 
             signOut={signOut}
             />
             <CartSideDrawer cartItems={props.cartItems} history={props.history} cartDrawerStatus={props.cartDrawerStatus} closeCartSideDrawer={props.controlCartSideDrawer} cartTotal={props.cartTotal}/>
        </header>
    </Auxiliary>
    )
}
const mapStateToProps = state =>{
    return{
        cartItems: state.cartItems,
        sideDrawerStatus: state.handleSideDrawer,
        customersName: state.customersName,
        wishList: state.wishList,
        isUserLoggedIn: state.isUserSignedIn,
        cartDrawerStatus: state.handleCartDrawer,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        handleDrawer: (payload)=>  dispatch({type:"HANDLE_SIDEDRAWER", payload:payload}),
        controlCartSideDrawer: (payload)=> dispatch({type:"OPEN_CART_SIDEDRAWER", payload:payload})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));