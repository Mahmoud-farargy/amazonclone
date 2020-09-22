import React from "react";
import Auxiliary from "../../Components/HOC/Auxiliary/Auxiliary";
import bcg1 from "../../images/hero-bcg.jpg";
import bcg2 from "../../images/hero-bcg2.jpg";
import bcg3 from "../../images/hero-bcg3.jpg";
import bcg4 from "../../images/hero-bcg4.jpg";
import bcg5 from "../../images/hero-bcg5.jpg";
import bcg6 from "../../images/hero-bcg6.jpg";
import bcg7 from "../../images/hero-bcg7.jpg";
import bcg8 from "../../images/hero-bcg8.jpg";
import ProductsDeck from "../../Components/ProductsDeck";
import CategoriesDeck from "../../Components/CategoriesDeck/CategoriesDeck";
import {Link} from "react-router-dom";
import cat2 from "../../images/Electronics2.jpg";
import catKitchen from "../../images/kitchen-19.jpg";
import catVideoGames from "../../images/video-games-19.jpg";
import {connect} from "react-redux";
class Home extends React.Component{    
    render(){
        return(
            <Auxiliary>
                <div>
                    <div className="carousel slide" id="hero_slider" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                    <img className="hero__img" src={bcg1} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg2} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg3} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg4} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg5} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg6} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg7} alt="" />
                            </div>
                            <div className="carousel-item">
                                    <img className="hero__img" src={bcg8} alt="" />
                            </div>

                        </div>
                        <a href="#hero_slider" className="carousel-control-prev" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a href="#hero_slider" className="carousel-control-next" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>

                    </div>
                    <section className="custom-container">
                        <div className="categories__deck">
                            <CategoriesDeck title="Electronics" image={cat2} directTo="/category/tech" btnText="" />
                            <CategoriesDeck title="Kitchen " image={catKitchen} directTo="/category/kitchen"  btnText=""  />
                            <CategoriesDeck title="Video Games" image={catVideoGames} directTo="/category/videoGames"  btnText="" />
                            {!this.props.userLoggedIn ? <CategoriesDeck image="" directTo="/login" title="Sign in for the best experience" btnText="Sign in securely" /> : null }
                        </div>
                            {/* Tech */}
                        <div className="deck-container">
                            <h4>Best sellers in Technology <span className="small-font"><Link to="/category/tech" className="ml-2"> Shop now</Link> </span></h4> 
                            <div className="deck-container-inner" >
                                {
                                    this.props.techItems.map((item,index) =>{
                                        return( <ProductsDeck item ={item}key={item.id + index} />)
                                    })
                                }
                            </div>                            
                        </div>
                            {/* Video games */}
                        <div className="deck-container">
                            <h4>Best sellers in Video Games  <span className="small-font"><Link to="/category/videoGames" className="ml-2"> Shop now</Link></span></h4>
                            <div className="deck-container-inner" >
                                {
                                    this.props.vidGames.map((item,index) =>{
                                        return( <ProductsDeck item ={item}key={item.id + index} />)
                                    })
                                }
                            </div>                            
                        </div>
                                {/* Kitchen */}
                        <div className="deck-container">
                            <h4>Best sellers in Kitchen <span className="small-font"><Link to="/category/kitchen" className="ml-2"> Shop now</Link></span></h4> 
                            <div className="deck-container-inner" >
                                {
                                    this.props.kitchen.map((item,index) =>{
                                        return( <ProductsDeck item ={item}key={item.id + index} />)
                                    })
                                }
                            </div>                            
                        </div>
                                {/* Watches */}
                                <div className="deck-container">
                            <h4>Best sellers in Watches <span className="small-font"><Link to="/category/watches" className="ml-2"> Shop now</Link></span></h4>
                            <div className="deck-container-inner" >
                                {
                                    this.props.watches.map((item,index) =>{
                                        return( <ProductsDeck item ={item}key={item.id + index} />)
                                    })
                                }
                            </div>                            
                        </div>
                    </section>
                </div>
            </Auxiliary>
        )
    }
}
function mapStateToProps (state){
    return {
        techItems: state.tech,
        vidGames: state.videoGames,
        kitchen: state.kitchen,
        watches: state.watches,
        userLoggedIn: state.isUserSignedIn
    }
}

export default connect(mapStateToProps) (Home);