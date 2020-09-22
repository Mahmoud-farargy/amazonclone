import React, { Component } from "react";
import Auxiliary from "../../Components/HOC/Auxiliary/Auxiliary";
import {withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import CategoryItem from "./CategoryItem/CategoryItem";

class CategoryPage extends Component{
    state={
        inputRating: 1,
        inputBestSeller: false,
        inputPrice: 0,
        maxPrice:0,
        inputDiscount: false,
        inputShipping: false,
        catArr: [],
        // category: this.props.data[this.props.match.params.slug]
    }
     handleInputChange =(event)=>{
        const name = event.target.name;
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name] : value
        },this.filterProducts);
    } 

    filterProducts = ()=>{
        let {inputRating, inputBestSeller, inputDiscount, inputPrice, maxPrice , inputShipping } = this.state;
        inputRating = parseInt(inputRating);
        let tempFilter = [...this.props.data[this.props.match.params.slug]];
        //filters
        //rating
        if(inputRating >=1){
           tempFilter = tempFilter.filter(el => el.rating >= inputRating); 
        }
        //bestseller
        if(inputBestSeller){
            tempFilter = tempFilter.filter(el => el.bestSeller === true);
        }
        //price
        if(inputPrice <= maxPrice){
            tempFilter = tempFilter.filter(el => el.price <= inputPrice);
        }
        //discount
        if(inputDiscount){
            tempFilter = tempFilter.filter(el => el.discount !== 0);
        };
        //shipping cost
        if(inputShipping){
            tempFilter = tempFilter.filter(el => el.shippingCost === 0);
        }

        //---change state-----
        this.setState({
            catArr: tempFilter
        })
    }
    componentDidMount=()=>{
        this.updateProductPage();
    }

    componentDidUpdate=(prevProps)=>{
        let slug = this.props.match.params.slug;
        console.log(slug);
        if(prevProps.match.params.slug !== slug){
           this.updateProductPage();
        }
    }
    updateProductPage=()=>{
        const specialSlug = this.props.match.params.slug;
        const category = this.props.data[specialSlug];
        const maxPrice = Math.max(...category.map(item => item.price))+5; //extracts the highest price from all product prices
        this.setState(prevState =>({
            ...prevState,
            catArr: category,
            inputPrice: maxPrice,
            maxPrice
        }))
    }
    render(){
            let specialSlug = this.props.match.params.slug;
            let {inputRating, inputPrice,inputBestSeller, inputDiscount, maxPrice, inputShipping } =this.state;
            // const category = this.props.data[specialSlug];
            // this.setState({
            //     catArr: category
            // })
         
        return(
            <Auxiliary>
                <div className="comp-container">
                <span className="gray-font" style={{textTransform:"capitalize"}}><Link to="/" > Home</Link> > <span >{specialSlug}</span></span>
                <div className="filter-box">
                    {/* rating */}
                    <div>
                        <label htmlFor="rating">Rating</label>
                        <input id="rating" name="inputRating" value={inputRating} className="rating-filter" onChange={(e)=> this.handleInputChange(e)} type="number" max="5" min="1" />
                    </div>
                    {/* best seller */}
                    <div>
                        <input type="checkbox" name="inputBestSeller" checked={inputBestSeller} onChange={(e)=> this.handleInputChange(e)} />
                        <span> Best Seller</span>
                    </div>

                    {/* price */}
                    <div>
                        <label htmlFor="price">Price:  ${inputPrice}</label>
                        <input type="range" name="inputPrice" min="0" max={maxPrice} value={inputPrice} onChange={(e)=> this.handleInputChange(e)} />
                    </div>
                    {/* discount */}
                    <div>
                         <input type="checkbox" name="inputDiscount" checked={inputDiscount} id="discount" value={inputDiscount} onChange={(e)=> this.handleInputChange(e)} />
                        <span> With discounts</span>
                    </div>
                   {/* shipping cost */}
                   <div>
                       <input type="checkbox" name="inputShipping" checked={inputShipping} onChange={(e)=> this.handleInputChange(e)} />
                        <span> Free shipping</span>
                    </div>
                </div>
                        <div className="category__inner">
                                {
                                    this.state.catArr.length >=1 ?
                                        this.state.catArr.map((el, index)=>{
                                            return(<CategoryItem item={el} Link={Link} data={this.props.data}  key={index+el.id} />)
                                            })
                                    :
                                    <div className="container text-center">
                                        <h4>Unfortunately no product matched your parameters</h4>
                                    </div>
                                }
                                            
                        </div>
                </div>
                
            </Auxiliary>

            
        )
    }
}
const mapStateToProps = state =>{
    return{
        data: state
    }
}
export default connect(mapStateToProps) (withRouter(CategoryPage));