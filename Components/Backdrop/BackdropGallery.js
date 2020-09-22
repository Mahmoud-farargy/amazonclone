import React from "react";
import {connect} from "react-redux";


const BackdropGallery = (props)=>{
    let openGallery = props.checkGalleryStatus;
    return(
        <div className="backdrop-gallery"
            style={{display: openGallery ? "block" : "none",
                opacity: openGallery ? "1" : "0",
                transition: "all 0.4s linear"
         }}
        onClick={()=> props.changeGalleryStatus(false)}></div>
    )
}
const mapStateToProps= state=>{
    return{
        checkGalleryStatus: state.handleBackdropGallery
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        changeGalleryStatus: (payload) => dispatch({type:"HANDLE_GALLERY" , payload: payload})
    }
}
export default connect(mapStateToProps , mapDispatchToProps) (BackdropGallery);