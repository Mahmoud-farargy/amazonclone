import React , {Component, Fragment} from "react";
import {connect} from "react-redux";
import CartItem from "./CartItem/CartItem";
import {Link, withRouter} from "react-router-dom";
import kettle from "../../images/kettle-desaturated.svg";
import TruncateMarkup from "react-truncate";
import {Flipped, Flipper} from "react-flip-toolkit";
import randomAd from "../../images/OCC_Amazon1._CB423492668_.jpg";

class Cart extends Component{
    state={
        deletedElName:"",
        itemDeleted: false,
        mirrorCheckbox: false,
        cartTotal:0,
        cartItemsCount: 0
    }
    deleteNotification=(name)=>{
            this.setState({
                deletedElName: name,
                itemDeleted: true
            })
            setTimeout(()=>{
                this.setState({
                    deletedElName: "",
                    itemDeleted: false
                })
            },5000);
    }
    editCheckbox=(val)=>{
        
        this.setState({
            mirrorCheckbox: val
        })
    }
    componentDidMount=()=>{
        //gets total price when the page renders
        this.updateCartTotal();
    }
    componentDidUpdate=(prevProps)=>{
        if(prevProps.cartItems !== this.props.cartItems){
            //gets total price while cartItems is updating
           this.updateCartTotal();
        }
    
    }
    updateCartTotal=()=>{
        var cart =  this.props.cartItems;
        if(cart.length > 0){
            let allPrices = cart.map(el => {
                return  el.priceAfterAlteration;
            })
            let allQuantities = cart.map(el =>{
                return el.quantity
            })
            let total = allPrices.reduce((accumulator, current)=> accumulator + current);
            let newQuantites = allQuantities.reduce((acc, curr)=> Number(acc) + Number(curr));
            this.props.updateTotal({count:newQuantites, total:total});
            console.log(total, allPrices);
            this.setState({
                cartTotal: total,
                cartItemsCount: newQuantites
            })
            
        }
        
      }
    render(){
        return(
            <Fragment>
                <section className="comp-container">
                    <h4 className="my-2 cart-title">Shopping Cart</h4>
                    <span className="gray-font text-right" style={{textTransform:"capitalize", alignSelf:"flex-start"}}><Link to="/" > Home</Link> > <span >Cart</span></span>
                    {
                        this.props.cartItems.length > 0 ?
                            <div className="row w-100">
                                <div className="col-md-8">
                                    <img className="random-ad" src={randomAd} alt="ad" />
                                    <p className="gray-font cart_price_title desktop-show">Price</p>
                                    <hr className="cart_hr" />
                                    
                                    {

                                        this.props.cartItems.map((item, i) =>{
                                           return(
                                            <Flipper flipKey={item} key={item.id+i}>
                                                <Flipped  flipId={item.id}>
                                                        <CartItem item={item} deleteNoti={(name)=> this.deleteNotification(name)} deleteItem={this.props.deleteItem} addItem={this.props.addItem} index={i} formatNums={this.props.formatNums} editCheckbox={(val)=> this.editCheckbox(val) } updateQty={(payload)=> this.props.onQuantityChange(payload)} />
                                                </Flipped>
                                            </Flipper>
                                           )
                                        })
                                    }
                                    {
                                        this.state.itemDeleted ?
                                            <div className="deleted__ELement__Notitication">
                                                <h6><Link to={`/previewproduct/${this.state.deletedElName}`}> <TruncateMarkup line={0.2} ellipsis="...">{this.state.deletedElName}</TruncateMarkup> </Link> was deleted from your cart.</h6>
                                            </div>
                                        :
                                        null
                                    }
                                    <p className="cart__bottom__subtotal">Subtotal ({this.state.cartItemsCount} items): <strong>${this.props.formatNums(this.state.cartTotal)}</strong></p>
    
                                    </div>
                                    <div className="col-md-4 subtotal_main_container">
                                        <div className="subtotal__card">
                                                <h4>Subtotal ({this.state.cartItemsCount} items): <strong>${this.props.formatNums(this.state.cartTotal)}</strong></h4>
                                                <div>
                                                    <input value={this.state.mirrorCheckbox} type="checkbox" className=" mr-2" />
                                                    <span className="gray-font order-gift">This order contains a gift</span>
                                                </div>

                                                <button onClick={()=> this.props.history.push("/checkout")} className="primary_btn">Proceed to checkout</button>
                                                
                                                
                                        </div>
                                            
                                    </div>
                            </div>
                            :
                            <div className="cart__empty row">
                                <img src={kettle} alt="kettle" className="col-md-3 mb-4"/>
                                <div className="col-md-9">
                                    <h4 >Your Amazon cart is empty.<br />Please add items to the cart and come back again.</h4>
                                    <Link to="/login"> <span className="primary_btn mr-2 mb-2 text-dark">Sign in to your account</span></Link>
                                    <Link to="/register"><span className="gray-btn mr-2 mb-2 text-dark"> Sign up now</span></Link>
                                </div>
                                
                            </div>
                    }
                    <p className="gray-font mb-3 mt-4 ">
                        The price and availability of items at Amazon.com are subject to change. <br/> The Cart is a temporary place to store a list of your items and reflects each item's most recent price.<br/>
                        Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                </section>
            </Fragment>
        )
    }
}
const mapStateToProps= state =>{
    return{
        cartItems: state.cartItems,
        formatNums: state.formatNums,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        deleteItem: (payload) => dispatch({type: "DELETE_ITEM", payload: payload}),
        onQuantityChange: (payload) => dispatch({type: "CHANGE_QTY", payload:payload}),
        addItem: (payload)=> dispatch({type: "ADD_ITEM", payload: payload}),
        updateTotal: (payload)=> dispatch({type:"UPDATE_CART_TOTAL",  payload:payload})
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart));