import React from 'react';
import doctor from '../imgs/doctorpng.png'

const Footer = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className = "footerWrap">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footerNavigation">
                        <ul className="footerList">
                            <li className="footerItem">
                                <a href="#" className="footerLink">Company</a>
                                <a href="#" className="footerLink">About Us</a>
                                <a href="#" className="footerLink">Contact</a>
                                <a href="#" className="footerLink">Career</a>
                                <a href="#" className="footerLink">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-2-of-2">
                    <p className="copyright">
                        all rights reserved<span> &copy;</span> <span>{ date }</span>
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default Footer
