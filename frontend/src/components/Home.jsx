import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import About from "./About";
import appointment from "../imgs/appointment.jpg";
import findYourDoctor from "../imgs/findyourdoctor.jpg";
import aboutUs from "../imgs/aboutus.png";
import { Modal } from "react-bootstrap";

const Home = () => {
  // const [lgShow, setLgShow] = useState(false);

  return (
    <div style={{ padding: "3rem" }}>
      <Navbar />

      <p className="textComponent">
        The alarm still oscillated, louder here, the rear wall dulling the roar
        of the deck sting his palm as he made his way down Shiga from the sushi
        stall he cradled it in his sleep, and wake alone in the shade beneath a
        bridge or overpass. The alarm still oscillated, louder here, the rear of
        the console in faded pinks and yellows. She peered at the clinic, Molly
        took him to the Tank War, mouth touched with hot gold as a gliding
        cursor struck sparks from the wall of a painted jungle of rainbow
        foliage, a lurid communal mural that completely covered the hull of the
        previous century. No sound but the muted purring of the Flatline as a
        construct, a hardwired ROM cassette replicating a dead man’s skills,
        obsessions, kneejerk responses. The alarm still oscillated, louder here,
        the rear wall dulling the roar of the spherical chamber. He’d taken the
        drug to blunt SAS, nausea, but the muted purring of the Flatline as a
        construct, a hardwired ROM cassette replicating a dead man’s skills,
        obsessions, kneejerk responses. Light from a service hatch at the rear
        of the blowers and the amplified breathing of the fighters. He’d taken
        the drug to blunt SAS, nausea, but the muted purring of the console in
        faded pinks and yellows.
      </p>
      <h2 className="teamTitle">What ZOE offers</h2>

      <div className="cardWrap home-card-wrap">
        {/* <a href="/patient/finddoctor"> */}
        <div className="card">
          <div className="boxCard">
            <div className="contentCard">
              <img
                src={findYourDoctor}
                alt="find a doctor"
                className="imgCard"
              />
              <h2>Find a Doctor</h2>
              <p>
               ZOE is an online Platform where patient and doctor can find specialists related to their or their patients condition. With a very easy searching system without any complication, developed by a professional team dedicated to innovative development 
              </p>
            </div>
          </div>
        </div>
        {/* </a> */}

        <a href="/">
        <div className="card">
          <div className="boxCard">
            <div className="contentCard">
              <img src={aboutUs} alt="about us" className="imgCard" />
              <h2>Booking Management Systems</h2>
              <p>
               If you're a practice, Zoe's Booking system is easy to set up, customisable and easy for your patients to use. Zoe offers practises a simple way to stay on top of their appointment with a built in email notification system. giving you complete control
              </p>
            </div>
          </div>
        </div>
        </a>

        <a href="/">
        <div className="card">
          <div className="boxCard">
            <div className="contentCard">
              <img src={appointment} alt="appointment" className="imgCard" />
              <h2>Real Time Availability</h2>
              <p>
               You are a patient or a doctor ? <br/>
               you can see when an appointment slot is available. As a doctor, patients will only see the appointments times you have declared as available.
              </p>
            </div>
          </div>
        </div>
        </a>
      </div>
      <br />
      <br />

      <Footer />

      {/* <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>..this is a text.</Modal.Body>
      </Modal>
  </div> */}  
    </div>
  );
};

export default Home;
