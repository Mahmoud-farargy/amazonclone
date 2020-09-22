import React,{Fragment} from "react";
import {connect} from "react-redux";
import WishItem from "./WishItem/WishItem";
import {Link} from "react-router-dom";
const WishList = (props)=>{
    return(
        <Fragment>
            <section className="main__wishlist__container comp-container">
            <span className="gray-font" style={{textTransform:"capitalize"}}><Link to="/" > Home</Link> > <span >Wish List</span></span>
                <h4>Wish List</h4>
                <hr/>
            {
                props.wishList.length >=1 ?
                <div className="main__wishlist__inner">
                    {
                        props.wishList.map((el, i) =>{
                            return(<WishItem item={el} key={el.id + i} addItem={props.addItem} deleteItem={props.deleteItem} data={props.data} index={i} />)
                        })
                    }
                </div>
                :
                <div className="cart__empty w-100">
                        <div>
                            <h4 >Your wish list is empty.<br />Please add items to the wish list and come back again.</h4>
                            <Link to="login" className="primary_btn mr-2 mb-2"><span style={{color:"#000"}}>Sign in to your account </span></Link>
                        </div>
                                
                </div>
            }
            </section>
        </Fragment>
    )
}
const mapStateToProps= state=>{
    return{
        wishList: state.wishList,
        data: state
    }
}

const mapDispatchToProps= dispatch =>{
    return{
        deleteItem: (payload)=> dispatch({type:"DELETE_ITEM", payload:payload}),
        addItem: (payload) => dispatch({type:"ADD_ITEM", payload:payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (WishList);