import React , {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {BsFillStarFill} from "react-icons/bs";
import {GrLocation} from "react-icons/gr";
import {FaLock} from "react-icons/fa";
import TruncateMarkup from "react-truncate";
import Suggestion from "../../Components/Suggestion";
import {MagnifierContainer, MagnifierPreview, MagnifierZoom} from "react-image-magnifiers";
import BackdropGallery from "../../Components/Backdrop/BackdropGallery";
// import  ImageGallery  from "react-image-gallery";
import Test from "../../Components/test";
import $ from "jquery";

class PreviewProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            slug: this.props.match.params.slug,
            imageIndex: 0,
        }
    }
    UNSAFE_componentWillUpdate=(prevProps)=>{
        if(prevProps.match.params.slug !== this.props.match.params.slug){
            this.setState({
                slug: prevProps.match.params.slug,
                imageIndex:0
            })
        }
    }

    componentDidMount=()=>{
       
        document.title = `Amazon.com: ${this.state.slug} `;
        $(".img-inner").on("mouseover", function(){
            console.log("hoved");
            $(".indicators-text").html("Click image to open expanded view");
        });
        $(".img-inner").on("mouseout", function(){
            $(".indicators-text").html("Roll over image to zoom in");
        });
    }
    // randomNum =(max)=>{
    //    return Math.floor((Math.random() * max) +1);
    // }
    openGalleryModal=()=>{
        this.props.openGallery(true);
    }
    render(){
        let product = this.props.data.copiedData.find( item => item.name === this.state.slug);
        
        const checkGallery = this.props.checkGalleryStatus;
       const {images , name, rating, price, reviewsCount, shippingCost, subArray, id, quantity, platform , type, extras, bestSeller, discount} = product;
       
       let formattedPrice = this.props.data.formatNums(price);
       if(discount !== 0){
           var formattedDiscount = this.props.data.formatNums(discount);
           var formattedSavedAmount = this.props.data.formatNums(discount - price);
           var percentage = ((discount - price) /(discount) * 100);
       }
    //    const galleryImages = [
    //        {
    //            original:images[0],
    //             thumbnail: images[1]
    //        },
    //        {
    //             original:images[2],
    //             thumbnail: images[2]
    //        }
    //    ];
    // ----------
        return(
            <React.Fragment>
                <section className="comp-container">
                   
                    <span className="gray-font" style={{textTransform:"capitalize"}}><Link to="/" > Home</Link> > <span ><Link to={`/category/${type === "video-games" ? "videoGames" : type}`} >{type}</Link></span> > <TruncateMarkup line={1} ellipsis="..">{name}</TruncateMarkup></span>
                    <div className="row w-100 pb-3">
                        <div className="product-images col-md-5 mt-4">
                            <MagnifierContainer  className="product-image-box">
                                <div className="img-inner" onClick={()=>this.openGalleryModal()}>
                                    <MagnifierPreview id="productImage" style={{margin: "0 15px 30px 15px", maxWidth: "100%", maxHeight:"190px" }} className="main-image control-image-width" imageSrc={images[this.state.imageIndex]} alt =""/>
                                </div>
                                <MagnifierZoom id="zoomResult" imageSrc={images[this.state.imageIndex]} className="zoomResult" />
                            </MagnifierContainer>
                           
                            <div>
                                <p className="indicators-text">Roll over image to zoom in</p>

                                <div className="indicators-box">
                                    <span onClick={()=> this.setState({imageIndex:1})} > <img className="image-indicator" src={images[1]} alt="product" /> </span>
                                    <span onClick={()=> this.setState({imageIndex:2})} > <img className="image-indicator"src={images[2]} alt="product"/></span >
                                    <span onClick={()=> this.setState({imageIndex:3})} > <img className="image-indicator" src={images[3]} alt="product" /></span >
                                    <span onClick={()=> this.setState({imageIndex:4})} > <img className="image-indicator" src={images[4]} alt="product" /></span>
                                    <span onClick={()=> this.setState({imageIndex:0})} > <img className="image-indicator" src={images[0]} alt="product" /></span>
                                </div>
                            </div>
                        </div>

                        <div className="product-details col-md-4 mt-3">
                            <TruncateMarkup line={2} ellipsis="..."><h5 className="product-name">{name}</h5></TruncateMarkup><br/>
                            <span>{Array(rating).fill().map((_,i) =>{
                                return <BsFillStarFill key={i} className="product-rating" />
                            })}
                            </span>
                            <span className="product-reviews">{reviewsCount} ratings</span>
                            {bestSeller ? <div className="bestSeller-badge"> <span>Best Seller</span> </div> : null}
                            <hr />
                            <p className="price-tag gray-font">Price: <strong>${formattedPrice}</strong> <span>{ shippingCost !==0 ?  `+ ${this.props.data.formatNums(shippingCost)} Shipping & Import Fees Deposit to Egypt` : null}</span></p>
                            {discount !== 0 ? <p className="gray-font">Last Price: <span className="discount">${formattedDiscount}</span>  </p> :null}
                            {discount !== 0 ? <p className="gray-font">You save: <span className="price-tag">${formattedSavedAmount} ({Math.floor(percentage)}%) </span> </p> : null}
                            <p className="in-stock-text">In stock.</p>
                            <p className="gray-font">Arrives: <strong>Sep 23 - Oct 8 </strong></p>
                            <p className="gray-font">Ships from and sold by Amazon.com.</p>
                            <p className="gray-font">Platform: <strong>{type}</strong> </p>
                            <p className="gray-font">Brand: {platform} </p>
                            <h5>About the item</h5>
                            <ul className="products-extras">
                                {
                                    extras.map((item,i) =>{
                                        return(<li key={i}>{item}</li>)
                                    })
                                }
                            </ul>
                        </div>

                        <div className="product-cart col-md-3  mt-3">
                            <div className="product-cart-card">
                                <div className="cart-card-upper">
                                    <div className="cart-card-upper-row"><div className="fake-checkbox mr-2"><div></div></div> <strong>Buy new:</strong></div>
                                    <p className="cart-card-price">${this.props.data.formatNums(price)} </p>
                                </div>
                                <label htmlFor="qty" className="mr-2">Qty: </label>
                                <select defaultValue={quantity} id="qty" onChange={(e)=>this.props.changeQuantity( {id: id , val: e.target.value, currentPrice: price * e.target.value + shippingCost} )}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </select><br />
                                <button className="primary_btn mt-3" onClick={()=> this.props.addItem({location:"cartItems", item: product})}>Add to cart </button>
                                <p className="gray-font"><FaLock/> Secure transaction</p>
                                <input type="checkbox" /><span className="ml-2 gray-font">Add gift options</span>
                                <hr/>
                                <p className="my-0"><GrLocation className="mr-2 gray-font"/> Deliver to Egypt</p>
                                <hr />
                                <p className="gray-font">Total price: <strong>${this.props.data.formatNums(price * quantity + shippingCost)}</strong> </p>
                                <hr />
                                <button className="gray-btn" onClick={()=>this.props.addItem({location:"wishList", item: product})}>Add to wish list</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    { this.props.data[subArray].filter(item => item.id !== id).slice(0,5).length >= 1 ? <h5 style={{color:"var(--yellowish-clr)"}}>Customers who viewed this item also viewed</h5> : null}
                    <div className="suggestions_main_container">
                        { //this map excludes the already viewed item and is limited to 5 items only to render
                            this.props.data[subArray].filter(item => item.id !== id).slice(0,5).map((el, i) => {
                                return (<Suggestion key={i+el.id} item={el} data={this.props.data} addItem={this.props.addItem} />)
                            })
                        
                        }
                    </div>
                    <BackdropGallery />
                    <div className="galleryModal"
                        style={{display: checkGallery ? "block" : "none",
                                opacity: checkGallery ? "1" : "0",
                                transition: "all 0.3s linear" 
                        }}>
                            {/* <ImageGallery items={galleryImages} /> */}
                            <Test />
                        </div>
                        
                </section>
            </React.Fragment>
        )
    }
}
function mapStateToProps (state){
    return{
        data: state,
        tech: state.tech,
        checkGalleryStatus: state.handleBackdropGallery
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        changeQuantity: (payload)=> dispatch ({type:"CHANGE_QTY" , payload:payload}),
        addItem: (payload) => dispatch({type: "ADD_ITEM", payload:payload}),
        openGallery: (payload) => dispatch({type: "HANDLE_GALLERY", payload: payload})
    }
}
export default  connect(mapStateToProps, mapDispatchToProps) (withRouter(PreviewProduct));