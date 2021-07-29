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
               ZOE is an online Platform where patient and doctor both can find specialists regarding to their own diseases or for relatives, friends, family members etc. with a very easy searching system without any complication, developed by a young professional team 
              </p>
            </div>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="/aboutzoe"> */}
        <div className="card">
          <div className="boxCard">
            <div className="contentCard">
              <img src={aboutUs} alt="about us" className="imgCard" />
              <h2>Set your Times</h2>
              <p>
               As a doctor you can easily set your available times and dates for your patients, 
               which gonna be display for patients
               and they can select a suitable time for them during booking an appointment and it's always changeable
              </p>
            </div>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="/user/login"> */}
        <div className="card">
          <div className="boxCard">
            <div className="contentCard">
              <img src={appointment} alt="appointment" className="imgCard" />
              <h2>Book Appointments</h2>
              <p>
               You are a patient or a doctor ? <br/>
               don' worry, with ZOE both patient and doctor can book appointments for themselves or for others too and you will be confirmed per e-mail
              </p>
            </div>
          </div>
        </div>
        {/* </a> */}
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
