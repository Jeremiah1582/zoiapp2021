import React from 'react';
import logo from '../imgs/logo.png'


const Navbar = () => {
    return (
        <div className = "header">
            <div className="logo-box">
                <img src= { logo } alt="logo" className = "logo" />
            </div>
                <h1 className = "title-wrap">
                    <span className= "title">ZOEAPP</span>
                    <span className="subTitle">bcs your life matters</span>
                </h1>
                
            
        </div>
    )
}

export default Navbar
