import React from 'react'
import InputFirstName from './InputFirstName'
import InputSecondName from './InputSecondName'
import Click from './Click'
import Navbar from './Navbar'
import Footer from './Footer'


const Homepage =()=>{
    return(
        <>
            <Navbar />
            <div className='HomePage'>
            <h5>
            Welcome to this greatest invention!
            We all know that a name can tell a lot about a person. 
            Names are not randomly chosen: they all have a meaning. 
            Sometimes you'd like to know if a relationship with someone could work out. 
            With The Cupid Calculator you can calculate the probability of a successful relationship between 
            two people. It's an affective way to get an impression of what the chances are on a relationship
            between two people.
            <br></br>
            To find out what the chances for you and your dream partner are, 
            just fill in both full names in the two text boxes below, and press Calculate.
            </h5>
            <div className='HomePageInput'>
            <InputFirstName/>
            <InputSecondName/>
            </div>
            <div className='HomepageClick'>
            <Click/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Homepage