import React from 'react';

const Navigation = () => {
    return (
        <div className= "navigation">
            <input type="checkbox" className = "navCheckbox" id="navigationToogle" />
            <label htmlFor="navigationToogle" className= "navButton">MENU</label>
            <div className="navBackground">&nbsp;</div>
            <nav className="navNav">
                <ul className="navList">
                  <li className="navItem"><a href="#" className="navLink">Company</a></li>
                  <li className="navItem"><a href="#" className="navLink">About us</a></li>
                  <li className="navItem"><a href="#" className="navLink">Contact</a></li>
                  <li className="navItem"><a href="#" className="navLink">Career</a></li>
                  <li className="navItem"><a href="#" className="navLink">Privacy Policy</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
