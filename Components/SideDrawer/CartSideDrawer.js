import React from "react";
import Auxiliary from "../HOC/Auxiliary/Auxiliary";
import {useLocation} from "react-router-dom";
const CartSideDrawer = (props)=>{
    const openCartSideDrawer = props.cartDrawerStatus;
    const location = useLocation();
    console.log(props.cartTotal);
    return(
        <Auxiliary>
            <aside className="cart__sidedrawer"
            style={{
                    display: openCartSideDrawer ? "flex" : "none",
                    tranform: openCartSideDrawer ? "translateX(0)" : "translateX(-100%)",
                    opacity: openCartSideDrawer ? "1" : "0" 
            }}>
                <strong className="close-cart-drawer-icon mb-4" onClick={()=> props.closeCartSideDrawer(false)}>&times;</strong>
                {
                    location.pathname === "/cart" ?
                    <div className="cart-sidedrawer-total">
                        <h6>Subtotal</h6>
                        <p className="cart-card-price" style={{wordBreak:"break-all", whiteSpace:"wrap"}}>${props.cartTotal}</p>
                    </div>
                    :
                    null
                }
                
                {
                    props.cartItems.map((el,i) =>{
                        return(
                        <div  key={el.id + i} onClick={()=> props.history.push(`/previewproduct/${el.name}`)}
                         className="cart-drawer-item">
                            <div className="cart-notif ml-2">
                                <strong>{el.quantity}</strong>
                            </div>
                            <img src={el.images[0]} alt={el.name} />

                        </div>
                        )
                    })
                }
            </aside>
        </Auxiliary>
    )
}
export default CartSideDrawer;