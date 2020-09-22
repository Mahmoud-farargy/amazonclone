import React,{Fragment} from 'react';
import {Link} from "react-router-dom";
const About =(props)=>{
    return(
        <Fragment>
            <section className="comp-container ">
                <span className="gray-font" style={{textTransform:"capitalize"}}><Link to="/" > Home</Link> > <span >About</span></span>
                <div className="about__main">
            
                    <div className="about__section">
                         <h2>Hi, I'm Mahmoud!</h2>
                        <p>I am a front end developer who is specialized in Vue.js, React.js, Javascript and other technologies. You can visit my portfolio to find more cool projects like this one <a target="_blank" rel="noopener noreferrer" href="https://mahmoudportfolio.netlify.app">Portfolio.</a></p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;