import React from 'react';
import logo from '../imgs/logo.png'


const Navbar = () => {
    return (
        <div className = "header">
            <div className="logo-box">
                <img src= { logo } alt="logo" className = "logo" />

                <h1 className = "title">ZOIAPP</h1>
                
            </div>
        </div>
    )
}

export default Navbar
