import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Orders = (props)=>{
    console.log(props.orderList);
    // const {cartElCount,orderDate, id, paid, total, delivered} = props.orderList;
    return(
        <Fragment>
            <div className="comp-container">
                <h5>Orders</h5> {/* unfinished */}
                
                <span className="gray-font text-right" style={{textTransform:"capitalize", alignSelf:"flex-start"}}><Link to="/" > Home</Link> > <span >Orders</span></span>
                {
                    props.orderList.length >= 1
                    ?
                    <table className="table table-striped table-bordered orders-table mb-4 mt-1">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="row">ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ITEMS COUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                props.orderList.map((el,i)=>{
                                    return(
                                      <tr key={el.id+i}>
                                            <td>{el.id}</td>
                                            <td>{el.orderDate}</td>
                                            <td>${el.total}</td>
                                            <td>{el.paid ? "Yes" : "No"}</td>
                                            <td>{el.delivered ? "Yes" : "No"}</td>
                                            <td>{el.cartElCount}</td>
                                        </tr>  
                                    )
                                })
                                
                            }
                    </tbody>
                </table>
                    :
                    <div className="cart__empty row">
                                <div className="col-md-9">
                                    <h4 className="mb-3">No order items have been made yet. <br />Please place orders and return.</h4>
                                    <Link to="/login"> <span className="primary_btn mr-2 mb-2 text-dark">Sign in to your account</span></Link>
                                    <Link to="/register"><span className="gray-btn mr-2 mb-2 text-dark"> Sign up now</span></Link>
                                </div>
                                
                    </div>
                }
            </div>
        </Fragment>
    )
}
const mapStateToProps= state =>{
    return{
        orderList: state.orderList
    }
}

export default connect(mapStateToProps) (Orders);