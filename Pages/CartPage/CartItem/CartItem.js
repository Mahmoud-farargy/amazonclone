import React,{Fragment, useEffect} from "react";
import TruncateMarkup from "react-truncate";
import {Link} from "react-router-dom";

const CartItems =(props)=>{
    useEffect(()=>{
        document.title= "Amazon.com Shopping Cart";
    },[])
    const {name ,images, type, quantity, priceAfterAlteration, price, id , shippingCost } = props.item; //PLEASE ADD COMPANY'S NAME HERE
    return(
        <Fragment>
                <div className="cartItem_container">
                    <div className="cartItem__image__box">
                        <img className="cartItem__image" src={images[0]} alt="" />
                    </div>
                    <div className="cartItem_inner mr-2">
                        <Link to={`/previewproduct/${name}`}> <TruncateMarkup line={1} ellipsis="..." >
                            <h4 className="product-name">{name}</h4>
                            </TruncateMarkup>
                        </Link>
                        <p className="gray-font mb-1" style={{textTransform:"capitalize"}}>{type}</p>
                        <p className="mb-1 small-font">Original price: <strong>${props.formatNums(price)}</strong></p>
                        <p className="small-font in-stock">In Stock</p>
                        <div>
                           <input onChange={(event)=> props.editCheckbox(event.target.value) } type="checkbox" className="mr-2"/>
                            <span className="small-font ">This is a gift <span className="fake-link">Learn more</span></span> 
                        </div>
                        
                        <div className="cartItem_controls mb-2">
                            
                            <label htmlFor="qty" className="cartItem-qty mt-1 mr-1">Qty</label>
                            <select defaultValue={quantity} className="mr-2" onChange={(event)=> props.updateQty({id: id , val: event.target.value, currentPrice: price * event.target.value + shippingCost})} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                            </select>
                            <button className="button-to-link" onClick={()=> {props.deleteNoti(name); props.deleteItem({index: props.index, location:"cartItems"}); props.updateQty({id: id , val: 1, currentPrice: price })}}>Delete</button>
                            <button className="button-to-link" onClick={()=> {props.addItem({location: "wishList", item: props.item})}}>Add to wish list</button>
                            <Link to={`/previewproduct/${name}`} className="button-to-link" >Preview</Link>
                            <button className="button-to-link remove-mark" >compare with similar items</button>
                        </div>
                    </div>
                    <strong className="cartItem_price">${props.formatNums(priceAfterAlteration)}</strong>
                </div>
        </Fragment>
    )
}

export default CartItems;