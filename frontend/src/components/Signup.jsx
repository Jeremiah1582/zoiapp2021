import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import doctor from '../imgs/doctorpng.png';
import patient from '../imgs/patient.png'

const Signup = () => {
    return (
        <div>
            <Navbar />  
            
            
            <div className="cardWrap">
                <a href="/about">
                    <div className = "card">
                        <div className = "boxCard">
                            <div className = "contentCard">
                                <img src= { patient } alt="about us picture" className = "imgCard"/>
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque quo et provident labore, incidunt maxime alias. Consequuntur ipsum temporibus mollitia, quae placeat dolorum, eum odio illum, quos eius nemo?</p>
                            </div>
                        </div>
                        
                    </div>
                </a>
                
                <a href="#">
                    <div className = "card">
                        <div className = "boxCard">
                            <div className = "contentCard">
                                <img src= { doctor } alt="appointment" className = "imgCard"/>
                                <h2>Appointments</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque quo et provident labore, incidunt maxime alias. Consequuntur ipsum temporibus mollitia, quae placeat dolorum, eum odio illum, quos eius nemo?</p>
                            </div>
                        </div>
                    </div>
                </a>
                
                
            </div>
            
            <Footer />
        </div>
    )
}

export default Signup
