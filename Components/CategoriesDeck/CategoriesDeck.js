import React from "react";
import "./CategoriesDeck.css";
import {Link} from "react-router-dom"
const CategoriesDeck  =(props)=>{
    const {title, image, btnText, directTo } = props;
    return(
        <div>
            <div className="card categories-card">
                <div className="card-body">
                   <h4>{title}</h4>
                   <Link  to={directTo}><img src={image} alt="" /></Link>
                    {props.btnText ==="" ? <Link  to={directTo}>See more</Link> :null }
                    {props.btnText !=="" ? <Link exact="true" to={directTo} className="primary_btn">{btnText}</Link> : null}
                </div>
                
            </div>
        </div>
    )
}

export default CategoriesDeck;