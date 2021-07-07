import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jeremiah from "../imgs/Jeremiah.png";
import Ashik from "../imgs/ashik.jpeg";
import Jose from "../imgs/jose.jpg";
import Pietro from "../imgs/pietro.jpeg";

const Team = () => {
  return (
    <div className="teamWrap">
      <Navbar />

      <h2 className="teamTitle">ZOE Team</h2>

      <div className="teamMainWrap">
        <p className="textComponent">
          He’d waited in the human system. The semiotics of the console in faded
          pinks and yellows. Then a mist closed over the black water and the
          robot gardener. Its hands were holograms that altered to match the
          convolutions of the room where Case waited. They were dropping, losing
          altitude in a canyon of rainbow foliage, a lurid communal mural that
          completely covered the hull of the car’s floor. Case felt the edge of
          the blowers and the amplified breathing of the fighters. Case felt the
          edge of the console in faded pinks and yellows.
        </p>

        <div className="teamAbout">
          <div className="teamPresentation">
            <h2 className="teamName">Jeremiah Brown</h2>

            {/*  follow button  */}
            <div className="follow-button">
              <span className="follow-button-frontage">Follow</span>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/jeremiah-brown-35232190/"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                  className="social-links_link"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="https://github.com/Jeremiah1582"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                  className="social-links_link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Jeremiah} alt="jeremiah" className="teamImage" />
          <p className="textComponent">
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling.
          </p>
        </div>

        <div className="teamAbout">
          <div className="teamPresentation">
            <h2 className="teamName">Ashik Ahammed</h2>
            {/*  follow button  */}
            <div className="follow-button">
              <span className="follow-button-frontage">Follow </span>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/md-ashik-ahammed-a450881b3/"
                  className="social-links_link"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/ashikkhandani"
                  className="social-links_link"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Ashik} alt="ashik" className="teamImage" />
          <p className="textComponent">
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling.
          </p>
        </div>

        <div className="teamAbout">
          <div className="teamPresentation">
            <h2 className="teamName">Jose Campos</h2>
            {/*  follow button  */}
            <div className="follow-button">
              <span className="follow-button-frontage">Follow</span>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/jose-campos-plaza-265541180/"
                  className="social-links_link"
                  target="_blank"
                  rel="noopener noreferrer"                  
                   
                  
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/camposCode"
                  className="social-links_link"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Jose} alt="jose" className="teamImage" />
          <p className="textComponent">
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling.
          </p>
        </div>

        <div className="teamAbout">
          <div className="teamPresentation">
            <h2 className="teamName">Pietro Simcic</h2>
            {/*  follow button  */}
            <div className="follow-button">
              <span className="follow-button-frontage">Follow</span>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/pietro-simcic/"
                  className="social-links_link"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/whiteroach"
                  className="social-links_link"
                  target="_blank"
                  rel="noopener noreferrer"                  
                  
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Pietro} alt="pietro" className="teamImage" />
          <p className="textComponent">
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
