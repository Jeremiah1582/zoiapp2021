import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';




const Home = () => {
    return (
        <div>

            <Navbar />  
            <div className="cardWrap">
                <a href="#">
                    <div className = "card">
                        <div className = "boxCard">
                            <div className = "contentCard">
                                <h2>Find your Doctor</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque quo et provident labore, incidunt maxime alias. Consequuntur ipsum temporibus mollitia, quae placeat dolorum, eum odio illum, quos eius nemo?</p>
                                {/* <a href="#">Read More</a> */}
                            </div>
                        </div>
                   </div>
                </a>
                
                <a href="#">
                    <div className = "card">
                        <div className = "boxCard">
                            <div className = "contentCard">
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque quo et provident labore, incidunt maxime alias. Consequuntur ipsum temporibus mollitia, quae placeat dolorum, eum odio illum, quos eius nemo?</p>
                                {/* <a href="#">Read More</a> */}
                            </div>
                        </div>
                        
                    </div>
                </a>
                
                <a href="#">
                    <div className = "card">
                        <div className = "boxCard">
                            <div className = "contentCard">
                                <h2>Appointments</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque quo et provident labore, incidunt maxime alias. Consequuntur ipsum temporibus mollitia, quae placeat dolorum, eum odio illum, quos eius nemo?</p>
                                {/* <a href="#">Read More</a> */}
                            </div>
                        </div>
                    </div>
                </a>
                
                
            </div>

            
            {/* <About /> */}
            
            <Footer />
        </div>
    )
}

export default Home
