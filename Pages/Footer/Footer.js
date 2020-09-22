import React from "react";
import logo from "../../images/logo.png";
import {GiWorld} from "react-icons/gi";
import {BiDollar} from "react-icons/bi";
import {FaFlagUsa} from "react-icons/fa";

const Footer =(props)=>{
    return(//Desktop version
        <React.Fragment>
            <div className="desktop-footer desktop-show">
                <div className="footer">

                    <a className="nav-top-btn" href="#navTop" aria-label="back to top" >Back to top</a>
                    <div className="footer-links">
                        {/* 1st column */}
                        <div className="footer-col">
                            <h4>Get to Know Us</h4>
                            <ul>
                                <li>Careers</li>
                                <li>blog</li>
                                <li>About amazon</li>
                                <li>investor relations</li>
                                <li>amazon devices</li>
                                <li>amazon tours</li>
                            </ul>   
                        </div>
                        {/* 2nd column */}
                        <div className="footer-col">
                            <h4>Make Money with Us</h4>
                            <ul>
                                <li>Sell on Amazon</li>
                                <li>Sell on Amazon Business</li>
                                <li>Sell Your Apps on Amazon</li>
                                <li>Become an Affiliate</li>
                                <li>Advertise Your Products</li>
                                <li>Self-Publish with Us</li>
                                <li>Host an Amazon Hub</li>
                                <li>See More Make Money with Us</li>
                            </ul>   
                        </div>
                        {/* 3rd column */}
                        <div className="footer-col">
                            <h4>Amazon Payment Products</h4>
                            <ul>
                                <li>Amazon Business Card</li>
                                <li>Shop with Points</li>
                                <li>Reload Your Balance</li>
                                <li>Amazon Currency Converter</li>
                            </ul>   
                        </div>
                        {/* 4th column */}
                        <div className="footer-col">
                            <h4>Let Us Help You</h4>
                            <ul>
                                <li>Amazon and COVID-19</li>
                                <li>Your Account</li> {/* these links can be used */}
                                <li>Your Orders</li>
                                <li>Shipping Rates & Policies</li>
                                <li>Returns & Replacements</li>
                                <li>Manage Your Content and Devices</li>
                                <li>Amazon Assistant</li>
                                <li>Help</li>
                            </ul>   
                        </div>
                    </div>
                </div>
                {/* ------- */}
                <div className="nav__footer__line">
                    <div className="footer-middle-row">
                        <img className="footer-logo" src={logo} alt="logo"/>
                        <div>
                                <h5><GiWorld className="footer-icon"/> English</h5>
                                <h5><BiDollar className="footer-icon"/>USD-U.S Dollar</h5>
                                <h5><FaFlagUsa className="footer-icon"/> United States</h5>
                        </div>
                        
                    </div>
                        
                </div>
                {/* ------- */}
                <div className="footer__bottom__section">
                    <div className="footer__bs__row">
                        <ul>
                            <li>
                                <h6>Amazon Music</h6>
                                <p>Stream millions of songs</p>
                            </li>
                            <li>
                                <h6>Alexa</h6>
                                <p>Actionable Analytics for the Web</p>
                            </li>
                            <li>
                                <h6>Amazon Rapids</h6>
                                <p>Fun stories for kids on the go</p>
                            </li>
                            <li>
                                <h6>CreateSpace</h6>
                                <p>Indie Print Publishing Made Easy</p>
                            </li>
                            <li>
                                <h6>IMDbPro</h6>
                                <p>Get Info Entertainment Professionals Need</p>
                            </li>
                            <li>
                                <h6>Ring</h6>
                                <p>Smart Home Security Systems</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h6>Amazon Music</h6>
                                <p>Stream millions of songs</p>
                            </li>
                            <li>
                                <h6>Alexa</h6>
                                <p>Actionable Analytics for the Web</p>
                            </li>
                            <li>
                                <h6>Amazon Rapids</h6>
                                <p>Fun stories for kids on the go</p>
                            </li>
                            <li>
                                <h6>CreateSpace</h6>
                                <p>Indie Print Publishing Made Easy</p>
                            </li>
                            <li>
                                <h6>IMDbPro</h6>
                                <p>Get Info Entertainment Professionals Need</p>
                            </li>
                            <li>
                                <h6>Ring</h6>
                                <p>Smart Home Security Systems</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h6>Amazon Music</h6>
                                <p>Stream millions of songs</p>
                            </li>
                            <li>
                                <h6>Alexa</h6>
                                <p>Actionable Analytics for the Web</p>
                            </li>
                            <li>
                                <h6>Amazon Rapids</h6>
                                <p>Fun stories for kids on the go</p>
                            </li>
                            <li>
                                <h6>CreateSpace</h6>
                                <p>Indie Print Publishing Made Easy</p>
                            </li>
                            <li>
                                <h6>IMDbPro</h6>
                                <p>Get Info Entertainment Professionals Need</p>
                            </li>
                            <li>
                                <h6>Ring</h6>
                                <p>Smart Home Security Systems</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h6>Amazon Music</h6>
                                <p>Stream millions of songs</p>
                            </li>
                            <li>
                                <h6>Alexa</h6>
                                <p>Actionable Analytics for the Web</p>
                            </li>
                            <li>
                                <h6>Amazon Rapids</h6>
                                <p>Fun stories for kids on the go</p>
                            </li>
                            <li>
                                <h6>CreateSpace</h6>
                                <p>Indie Print Publishing Made Easy</p>
                            </li>
                            <li>
                                <h6>IMDbPro</h6>
                                <p>Get Info Entertainment Professionals Need</p>
                            </li>
                            <li>
                                <h6>Ring</h6>
                                <p>Smart Home Security Systems</p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bs__row">
                    <ul>
                            <li>
                                <h6>Amazon Music</h6>
                                <p>Stream millions of songs</p>
                            </li>
                            <li>
                                <h6>Alexa</h6>
                                <p>Actionable Analytics for the Web</p>
                            </li>
                            <li>
                                <h6>Amazon Rapids</h6>
                                <p>Fun stories for kids on the go</p>
                            </li>
                            <li>
                                <h6>CreateSpace</h6>
                                <p>Indie Print Publishing Made Easy</p>
                            </li>
                            <li>
                                <h6>IMDbPro</h6>
                                <p>Get Info Entertainment Professionals Need</p>
                            </li>
                            <li>
                                <h6>Ring</h6>
                                <p>Smart Home Security Systems</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h6>Amazon Music</h6>
                                <p>Stream millions of songs</p>
                            </li>
                            <li>
                                <h6>Alexa</h6>
                                <p>Actionable Analytics for the Web</p>
                            </li>
                            <li>
                                <h6>Amazon Rapids</h6>
                                <p>Fun stories for kids on the go</p>
                            </li>
                            <li>
                                <h6>CreateSpace</h6>
                                <p>Indie Print Publishing Made Easy</p>
                            </li>
                            <li>
                                <h6>IMDbPro</h6>
                                <p>Get Info Entertainment Professionals Need</p>
                            </li>
                            <li>
                                <h6>Ring</h6>
                                <p>Smart Home Security Systems</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="copyright_footer">
                        <p>Conditions of Use</p>
                        <p>Privacy Notice</p>
                        <p>Interest-Based Ads</p>
                        <p className="footer-author">&copy; 2020 Mahmoud Farargy & Amazon</p> 
                    
                </span>
            </div>

            {/* Mobile version */}
            <div className="mobile-footer mobile-show">
                <div className="footer">
                    <div className="mobile-footer-inner">
                    <a className="nav-top-btn" href="#navTop" aria-label="back to top" >Back to top</a>
                        <ul>
                            <li><h5>Amazon.com</h5></li>
                            <li><h5>Your lists</h5></li>
                            <li><h5>find a gift</h5></li>
                            <li><h5>browsing history</h5></li>
                            <li><h5>Your recommendations</h5></li>
                        </ul>
                        <ul>
                            <li><h5>Your orders</h5></li> {/*can be used*/}
                            <li><h5>gift cards & registery</h5></li>
                            <li><h5>Your account</h5></li>
                            <li><h5>sell products on amazon</h5></li>
                            <li><h5>returns</h5></li>
                            <li><h5>customers</h5></li>
                        </ul>
                        
                    </div>
                </div>
                <div className="mobile-footer-bottom">

                        <div className="mobile-footer-middle">
                                <div>
                                    <h5><GiWorld className="footer-icon"/> English</h5>
                                    <h5><BiDollar className="footer-icon"/>USD-U.S Dollar</h5>
                                    <h5><FaFlagUsa className="footer-icon"/> United States</h5>
                                </div>
                        </div>
                        <h5 className="mobile-footer-sign-in">Already a customer? Sign in</h5>
                        <div className="mobile-footer-middle">
                                <div className="mobile-footer-middle-txt">
                                    <p>Conditions of Use</p>
                                    {/* <p>Privacy Notice</p>
                                    <p>Interest-Based Ads</p> */}
                                </div>
                        </div>
                        <p className="footer-author">&copy; 2020 Mahmoud Farargy & Amazon</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;