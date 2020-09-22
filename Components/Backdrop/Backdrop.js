import React from "react";
import Auxiliary from "../HOC/Auxiliary/Auxiliary";
import {connect} from "react-redux";
import "./Backdrop.css";

const Backdrop = (props)=>{
    let backdropOpened  = props.backdropStatus;
    return(
        <Auxiliary>
            <div onClick={()=> props.openBackdrop(false)}
             className="main__backdrop"
             style={{
                 display: backdropOpened ? "block" : "none",
                 opacity: backdropOpened ? "1" : "0",
                 transition: "all 0.4s linear"
             }}
             ></div>
        </Auxiliary>
    )
}
const mapStateToProps = state=>{
    return{
        backdropStatus: state.handleBackdrop
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        openBackdrop: (payload)=>  dispatch({type:"HANDLE_SIDEDRAWER", payload:payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Backdrop);