import React from "react";
import {withRouter} from "react-router-dom";

const ProductsDeck =(props)=>{
    const directToProduct = ()=>{ //please change "name" with "slug" ASAP
        props.history.push(`/previewproduct/${props.item.name}`)
    }
    return(
        <div className="deck-inner">
            <img onClick={()=> directToProduct()} src={props.item.images[0]} alt="" />

        </div>
    )
}
export default withRouter(ProductsDeck);