import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import TruncateMarkup from "react-truncate";
import {BsFillStarFill} from "react-icons/bs";
import {withRouter} from "react-router-dom";

const Suggestion =(props) =>{
   
    const {name, images, rating, price, reviewsCount, bestSeller} = props.item;
    const formattedPrice = props.data.formatNums(price);

    return(
        <Fragment>
            <div className="suggestion__container">
            <div className="suggestion-img">
                <Link to={`/previewproduct/${name}`}> <img src={images[0]} className="main-image" alt="product"/> </Link>
                    </div>
                    <div className="wishItem-info-column wishItem-basis-info">
                       <Link to={`/previewproduct/${name}`}><h5 className="wishItem-title"><TruncateMarkup line={1} ellipsis="...">{name}</TruncateMarkup></h5></Link> 
                        <span>{
                            Array(rating).fill().map((_, i) => {
                                return(<BsFillStarFill key={i} className="product-rating" />)
                            })
                        }
                        </span>
                        <span className="ml-2">({reviewsCount})</span>
                        <p className="price-tag mt-1"><strong className="">${formattedPrice}</strong></p>
                        {bestSeller ? <div className="bestSeller-badge mb-2"> <span>Best Seller</span> </div> : null}
                        <p className="small-font">In Stock Offered by Amazon.com.</p>
                        <div className="mb-2 w-100">
                            {/* <button onClick={()=> props.history.replace(`/previewproduct/${name}`)} className="button-to-link text-center remove-mark" >Preview</button> */}
                            <button className="primary_btn suggestion-btn" onClick={()=> {props.addItem({location: "cartItems", item: props.item})}}>Add to cart</button>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Suggestion);