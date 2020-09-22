import React,{Fragment, Component} from "react";
import blackLogo from "../../images/logo2.svg";
import {Link} from "react-router-dom";
import {db, auth} from "../../firebase/config";//receives variables from firbase config

class Register extends Component{
    state={
        email:"",
        password: 0,
        name: "",
        isPasswordValid: false
    }
    handleChange= (e, inputName)=>{
        console.log(e.target.value);
        let val = e.target.value
        this.setState({
            [inputName]: val
            })
    }
    checkPassword= (event)=>{
        var valid = (this.state.password === event.target.value);

        this.setState({
            isPasswordValid: valid
        })
        console.log(valid);
    }
    submitForm = (event)=>{
        event.preventDefault();
        console.log(this.state.email, this.state.password); //creates a new account using an email and password
        if(this.state.isPasswordValid){
            auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred=>{
                db.collection("users").doc(cred.user.uid).set({ //adds new fields to the database once the account is created
                    name: this.state.name
                })
            }).then(()=>{ //if creating new account process was successful
                console.log("successful");
            }).catch((error)=>{ //else if the process failed
                console.log(error)
            });
        }
        
      
    }
    render(){
        return(
                <Fragment>
                    <section className="signIn__container">
                    <span className="gray-font text-right" style={{textTransform:"capitalize", alignSelf:"flex-start"}}><Link to="/" > Home</Link> > <span >Register</span></span>
                        <div className="mt-3">
                            <img className="signIn-logo-img" src={blackLogo} alt="logo" />
                        </div>
                        <div className="signIn__inner">
                            <div className="signIn__card">
                                <h1 className="signIn-title">Register</h1>
                                <form onSubmit={(event)=> this.submitForm(event)}>
                                    {/* name */}
                                    <label htmlFor="name">Your Name</label>
                                    <input autoFocus type="text" onChange={(event)=> this.handleChange(event,"name")} />
                                    {/* email */}
                                    <label htmlFor="email" id="name" name="name">Email</label>
                                    <input type="email" name="email"  id="email" onChange={(event)=> this.handleChange(event,"email")} />
                                    {/* password */}
                                    <label htmlFor="password" >Password</label>
                                    <input type="password" id="password" name="password" placeholder="At least 6 characters" onChange={(event)=> this.handleChange(event, "password")}/>
                                    {/* re-enter password */}
                                    <label htmlFor="re-enter-password" >Re-enter Password</label>
                                    <input type="password" id="re-enter-password" name="re-enter-password" onChange={(event)=> this.checkPassword(event)}/>
                                    <label>Payment</label>

                                    <div className="cart-card-upper mb-3">
                                        <div className="cart-card-upper-row"><div className="fake-checkbox mr-2"><div></div></div> <span>PayPal</span></div>
                                    </div>

                                    <input type="submit" value="Create your fake Amazon account" className="submit-btn" />
                                </form>
                                <p className="signIn-aggreement my-3">By creating new account, you agree to the fake Amazon's Conditions of Use and Privacy Notice.</p>
                                <p>Already have an account?<Link to="/login"> Sign-In</Link></p>
                            </div>
                            
                        </div>
                        
                        <div className="signIn-copy">
                            <p>&copy; 2020 Mahmoud farargy & Amazon</p>
                        </div>
                    </section>

                </Fragment>
            )
    }
    
}

export default Register;