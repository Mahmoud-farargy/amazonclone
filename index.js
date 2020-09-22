import React ,{Component} from "react";
import ReactDom from "react-dom";
import Header from "./Components/Header/Header";
import SubHeader from "./Components/SubHeader/SubHeader";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import rootReducer from "./Store/StoreReducer";
import {Provider} from "react-redux";
import PreviewProduct from "./Pages/PreviewProduct/previewProduct";
import Cart from "./Pages/CartPage/CartPage";
import SignIn from "./Pages/SignIn/SignIn";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Footer/Footer";
import WishList from "./Pages/WishList/WishList";
import About from "./Pages/About/About";
import Category from "./Pages/CategoryPage/CategoryPage";
import Checkout from "./Pages/Checkout/Checkout";
import Orders from "./Pages/Orders/Orders";
import NotFound from "./Pages/NotFound/NotFound";

const redux = require("redux");
const createStore = redux.createStore;

const store = createStore(rootReducer);

class App extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <SubHeader />  
                            <Home />
                        <Footer />
                    </Route>
                    <Route path="/previewproduct/:slug">
                        <Header />
                        <SubHeader />  
                            <PreviewProduct/>
                        <Footer />
                    </Route>

                    <Route exact path="/cart" >
                        <Header />
                        {/* <SubHeader />   */}
                            <Cart/>
                        <Footer />
                    </Route>

                    <Route exact path="/login" component={SignIn} />
                    
                    <Route exact path="/register" component={Register} />
                    
                    <Route exact path="/wish-list" >
                        <Header />
                        <SubHeader />  
                            <WishList/>
                        <Footer />
                    </Route>

                    <Route exact path="/about">
                        <Header />
                        <SubHeader />  
                            <About/>
                        <Footer />
                    </Route>
                    <Route exact path="/category/:slug">
                        <Header />
                        <SubHeader />  
                            <Category/>
                        <Footer />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <SubHeader />
                            <Checkout />
                        <Footer />
                    </Route>

                    <Route path="/orders">
                        <Header />
                        <SubHeader />
                            <Orders />
                        <Footer />
                    </Route>

                    <Route >
                        <Header />
                            <SubHeader />
                                <NotFound />
                        <Footer />
                    </Route>
                </Switch> 
            </main>
        )
    }
}


const mainApp =(

    <Provider store ={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
)

ReactDom.render(mainApp, document.getElementById("app"));
export default mainApp;
