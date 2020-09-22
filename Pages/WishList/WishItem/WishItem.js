import React from "react";
import Auxiliary from "../../../Components/HOC/Auxiliary/Auxiliary";
import TruncateMarkup from "react-truncate";
import {BsFillStarFill } from "react-icons/bs";
import {Link} from "react-router-dom";

const WishItem =(props)=>{ //please add the production company
    const {name, images, rating, price, reviewsCount, bestSeller} = props.item;
    const formattedPrice = props.data.formatNums(price);
    return(
        <Auxiliary>
                <div className="wishItem__container">
                    <div className="wishItem-basis-img">
                        <img src={images[0]} className="main-image" alt="product"/>
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
                        <p className="price-tag"><strong >${formattedPrice}</strong></p>
                        {bestSeller ? <div className="bestSeller-badge mb-2"> <span>Best Seller</span> </div> : null}
                        <p className="small-font">In Stock Offered by Amazon.com.</p>
                        <div className="cartItem_controls mb-2">
                            
                            <button className="button-to-link" onClick={()=> {props.deleteItem({index: props.index, location:"wishList"})}}>Delete</button>
                            <Link to={`/previewproduct/${name}`} className="button-to-link remove-mark" >Preview</Link>
                        </div>
                    </div>
                    <button className="primary_btn wishItem-basis-btn" onClick={()=> {props.addItem({location: "cartItems", item: props.item})}}>Add to cart list</button>
                </div>
        </Auxiliary>
    )
}
export default WishItem;