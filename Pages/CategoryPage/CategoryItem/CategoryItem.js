import React,{Component, Fragment} from "react";
import {BsFillStarFill} from "react-icons/bs";
import TruncateMarkup from "react-truncate";
import {Link} from "react-router-dom";
class CategoryItem extends Component{
    
    render(){
        const {name, images,price, rating, bestSeller, reviewsCount, discount} = this.props.item;
        const formattedPrice = this.props.data.formatNums(price);
        const formattedDiscount = this.props.data.formatNums(discount);
        return(
            <Fragment>
                <div className="suggestion__container">
                <div className="suggestion-img">
                    <Link to={`/previewproduct/${name}`}><img src={images[0]} className="main-image" alt="product"/></Link> 
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
                            <p className="price-tag mb-1 mt-2"><strong >${formattedPrice}</strong></p>
                            {discount !== 0 ? <p className="gray-font">Last Price: <span className="discount">${formattedDiscount}</span> </p> :null}
                            {bestSeller ? <div className="bestSeller-badge my-2"> <span>Best Seller</span> </div> : null}
                            <p className="small-font">In Stock Offered by Amazon.com.</p>
                            
                            <Link to={`/previewproduct/${name}`}><span className="button-to-link text-center mt-0 remove-mark" >Preview</span></Link>
                            
                        </div>
                </div>
            </Fragment>
        )
    }
}

export default CategoryItem;