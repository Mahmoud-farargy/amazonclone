import React,{Fragment, Component} from "react";
import blackLogo from "../../images/logo2.svg";
import {withRouter, Link} from "react-router-dom";
import {auth} from "../../firebase/config";
import {connect} from "react-redux";


class SignIn extends Component{
    state={
        email: "",
        password: 0
    }
    handleChange =(event, name)=>{
        let val = event.target.value;
        this.setState({
            [name]: val
        });
    }
    submitForm =(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(cred=>{
            
            this.props.changeUserStatus(true);
            this.props.history.push("/");
            console.log("logged in successfully", this.props.userStatus);
        }).catch(error=>{
            console.log(error);
            this.props.changeUserStatus(false);
        })
    }
    render(){
        return(
                <Fragment>
                    <section className="signIn__container">
                    <span className="gray-font text-right" style={{textTransform:"capitalize", alignSelf:"flex-start"}}><Link to="/" > Home</Link> > <span >Login in</span></span>
                        <div className="mt-3">
                            <img className="signIn-logo-img" src={blackLogo} alt="logo" />
                        </div>
                        <div className="signIn__inner">
                            <div className="signIn__card">
                                <h1 className="signIn-title">Sign-In</h1>
                                <form onSubmit={(event)=> this.submitForm(event)}>
                                    <label htmlFor="email">Email</label>
                                    <input autoFocus type="email" id="email" onChange={(event)=> this.handleChange(event, "email")} />
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={(event)=> this.handleChange(event, "password")} />
                                    <input type="submit" value="Continue" className="submit-btn" />
                                </form>
                                <p className="signIn-aggreement my-3">By continuing, you agree to the fake Amazon's Conditions of Use and Privacy Notice.</p>
                            </div>
                            <div className="line-break">
                                <div className="line-break-text">New to Amazon?</div>
                            </div>
                            <button onClick={()=> this.props.history.push("/register") } className="submitBtn register_btn">Create your Amazon account</button>
                        </div>
                        
                        <div className="signIn-copy">
                            <p>&copy; 2020 Mahmoud farargy & Amazon</p>
                        </div>
                    </section>

                </Fragment>
            )
    }
    
}
const mapDispatchToProps= dispatch=>{
    return{
        changeUserStatus: (payload) => dispatch({type:"USER_STATUS", payload:payload})
    }
}
const mapStateToProps= state =>{
    return{
        userStatus: state.isUserSignedIn
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(SignIn));