import React from 'react'
import InputFirstName from './InputFirstName'
import InputSecondName from './InputSecondName'
import Click from './Click'
import Navbar from './Navbar'
import Footer from './Footer'


const Homepage =()=>{
    return(
        <div>
            <Navbar />
            <div className='HomePage'>
            <InputFirstName/>
            <InputSecondName/>
            <Click/>
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage