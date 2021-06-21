import React from 'react';
import ashik from '../imgs/ashik.png';
import jeremiah from '../imgs/jeremiah.jpeg';
import jose from '../imgs/jose.png';



const About = () => {
    return (
        
        <div className = "aboutMain">
            <div className = "aboutWrap">
                <h1 className = "aboutTitle">About Us</h1>
                <div className="card-wrap">
                    <div className="card">
                        <div className="box">
                            <img src= {jeremiah} alt="jeremiah" className = "card-img"/>
                            <h2>Jeremiah: </h2> <h4> <i> Web Developer</i></h4>
                           
                            
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure enim eligendi perspiciatis distinctio fugiat inventore est cum omnis ipsum. Magni, possimus aspernatur. Architecto numquam ut accusantium aliquid asperiores error a?</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="textAbout">
                            <div className="box">
                                <img src= {ashik} alt="ashik" className = "card-img"/>
                                <h2>Ashik</h2>
                                <hr />
                                <h3>Web Developer</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure enim eligendi perspiciatis distinctio fugiat inventore est cum omnis ipsum. Magni, possimus aspernatur. Architecto numquam ut accusantium aliquid asperiores error a?</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="textAbout">
                            <div className="box">
                                <img src= {jose} alt="jose" className = "card-img"/>
                                <h2>José</h2>
                                <hr />
                                <h3>Web Developer</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure enim eligendi perspiciatis distinctio fugiat inventore est cum omnis ipsum. Magni, possimus aspernatur. Architecto numquam ut accusantium aliquid asperiores error a?</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
            </div>
            
        </div>

       
    )
}

export default About
