import React,{Fragment} from "react";
import notFoundImg from "../../images/404-error-page-found.jpg";
import {withRouter} from "react-router-dom";

const NotFound =(props)=>{
    return(
        <Fragment>
            <div className="comp-container">
                <div className="notFound_inner">
                    <img className="notFound-img" src={notFoundImg} alt="404 not found" />
                    <h5>The page you're looking for can't be found.</h5>
                    <button onClick={()=> props.history.push("/")} className="primary_btn">Go to home page</button>
                </div>
                
            </div>
            
        </Fragment>
    )
}

export default withRouter(NotFound);