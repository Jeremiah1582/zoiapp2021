import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import appointment from "../imgs/appointment.jpg";
import findYourDoctor from "../imgs/findyourdoctor.jpg";
import aboutUs from "../imgs/aboutus.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="cardWrap">
        <a href="#">
          <div className="card">
            <div className="boxCard">
              <div className="contentCard">
                <img
                  src={findYourDoctor}
                  alt="find a doctor picture"
                  className="imgCard"
                />
                <h2>Find a Doctor</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi neque quo et provident labore, incidunt maxime alias.
                  Consequuntur ipsum temporibus mollitia, quae placeat dolorum,
                  eum odio illum, quos eius nemo?
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="card">
            <div className="boxCard">
              <div className="contentCard">
                <img src={aboutUs} alt="about us picture" className="imgCard" />
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi neque quo et provident labore, incidunt maxime alias.
                  Consequuntur ipsum temporibus mollitia, quae placeat dolorum,
                  eum odio illum, quos eius nemo?
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="card">
            <div className="boxCard">
              <div className="contentCard">
                <img src={appointment} alt="appointment" className="imgCard" />
                <h2>Appointments</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Animi neque quo et provident labore, incidunt maxime alias.
                  Consequuntur ipsum temporibus mollitia, quae placeat dolorum,
                  eum odio illum, quos eius nemo?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* <About /> */}

      <Footer />
    </div>
  );
};

export default Home;
