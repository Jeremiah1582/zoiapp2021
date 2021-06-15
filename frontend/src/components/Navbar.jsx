import React from 'react';
import logo from '../imgs/logo.png'


const Navbar = () => {
    return (
        <div className = "header">
            <div className="logo-box">
                <img src= { logo } alt="logo" className = "logo" />
            </div>

                <div className= "text-wrap">
                    <h1 className = "title-wrap">
                        <span className= "title">ZOEAPP</span>
                        <span className="subTitle"><i>bcs your life matters</i></span>
                    </h1>  
                </div>
                
                
            
        </div>
    )
}

export default Navbar
