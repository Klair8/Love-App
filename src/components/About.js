import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'


const About =()=>{
    return(
    <>
    <Navbar/>
    <div className="About">
        <h3>About Cupid Privacy </h3>
        <br></br>
        <br></br>
        <p>The Cupid Calculator does not collect any personal information on this site.<br></br>
        The names which are entered for calculation are not stored anywhere.The data is calculate with 
        the use of an API of Rapyd API.
        <br></br>
        This website is a pure creation from me in order to pratice React and Redux. You can see more project on my portofolio by clicking on my Logo </p>
        </div>
        <Footer/>
        </>
    )
}

export default About