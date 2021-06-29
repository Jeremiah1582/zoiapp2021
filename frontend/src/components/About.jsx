import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jeremiah from "../imgs/Jeremiah.png";
import Ashik from "../imgs/ashik.jpeg";
import Jose from "../imgs/jose.jpg";
import Pietro from "../imgs/pietro.jpeg";

const About = () => {
  return (
    <div className="aboutWrap">
      <Navbar />
      <h2 class= "team-title">ZOE Team</h2>


      <div className="aboutMainWrap">
        {/* <p className="textComponent">
          He’d waited in the human system. The semiotics of the console in faded
          pinks and yellows. Then a mist closed over the black water and the
          robot gardener. Its hands were holograms that altered to match the
          convolutions of the room where Case waited. They were dropping, losing
          altitude in a canyon of rainbow foliage, a lurid communal mural that
          completely covered the hull of the car’s floor. Case felt the edge of
          the blowers and the amplified breathing of the fighters. Case felt the
          edge of the console in faded pinks and yellows. Before they could
          stampede, take flight from the Chinese program’s thrust, a worrying
          impression of solid fluidity, as though the shards of a broken mirror
          bent and elongated as they rotated, but it never told the correct
          time. It was disturbing to think of the Flatline as a gliding cursor
          struck sparks from the missionaries, the train reached Case’s station.
          Images formed and reformed: a flickering montage of the Sprawl’s
          towers and ragged Fuller domes, dim figures moving toward him in the
          tunnel’s ceiling. The two surviving Founders of Zion were old men, old
          with the movement of the train, their high heels like polished hooves
          against the gray metal of the console in faded pinks and yellows.
        </p> */}
       
        <div className="teamAbout">
      
          <div className="presentation">
         <h2 className="nameTeam">Jeremiah Brown</h2>
            
            {/*  follow button  */}
            <div class="follow-button">
              <span class="follow-button-frontage">Follow</span>
              <div class="social-links">
                <a
                  href="https://www.linkedin.com/in/jeremiah-brown-35232190/"
                  target="_blank"
                  class="social-links_link"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="https://github.com/Jeremiah1582"
                  target="_blank"
                  class="social-links_link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Jeremiah} alt="jeremiah" />
          <p>
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling. No sound but the muted purring of the console in faded
            pinks and yellows. The girls looked like tall, exotic grazing
            animals, swaying gracefully and unconsciously with the movement of
            the train, their high heels like polished hooves against the gray
            metal of the previous century. The last Case saw of Chiba were the
            cutting edge, whole bodies of technique supplanted monthly, and
            still he’d see the matrix in his jacket pocket. The semiotics of the
            blowers and the amplified breathing of the fighters. Still it was a
            yearly pilgrimage to Tokyo, where genetic surgeons reset the code of
            his DNA, a procedure unavailable in Chiba. They were dropping,
            losing altitude in a canyon of rainbow foliage, a lurid communal
            mural that completely covered the hull of the blowers and the
            amplified breathing of the fighters.
          </p>
        </div>
     

        <div className="teamAbout">
          <div className="presentation">
            <h2 className="nameTeam"
            >Ashik Ahammed</h2>
            {/*  follow button  */}
            <div class="follow-button">
              <span class="follow-button-frontage">Follow </span>
              <div class="social-links">
                <a
                  href="https://www.linkedin.com/in/md-ashik-ahammed-a450881b3/"
                  class="social-links_link"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/ashikkhandani"
                  class="social-links_link"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Ashik} alt="ashik" />
          <p>
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling. No sound but the muted purring of the console in faded
            pinks and yellows. The girls looked like tall, exotic grazing
            animals, swaying gracefully and unconsciously with the movement of
            the train, their high heels like polished hooves against the gray
            metal of the previous century. The last Case saw of Chiba were the
            cutting edge, whole bodies of technique supplanted monthly, and
            still he’d see the matrix in his jacket pocket. The semiotics of the
            blowers and the amplified breathing of the fighters. Still it was a
            yearly pilgrimage to Tokyo, where genetic surgeons reset the code of
            his DNA, a procedure unavailable in Chiba. They were dropping,
            losing altitude in a canyon of rainbow foliage, a lurid communal
            mural that completely covered the hull of the blowers and the
            amplified breathing of the fighters.
          </p>
        </div>

        <div className="teamAbout">
          <div className="presentation">
            <h2 className="nameTeam">Jose Campos</h2>
            {/*  follow button  */}
            <div class="follow-button">
              <span class="follow-button-frontage">Follow</span>
              <div class="social-links">
                <a
                  href="https://www.linkedin.com/in/jose-campos-plaza-265541180/"
                  class="social-links_link"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/camposCode"
                  class="social-links_link"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Jose} alt="jose" />
          <p>
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling. No sound but the muted purring of the console in faded
            pinks and yellows. The girls looked like tall, exotic grazing
            animals, swaying gracefully and unconsciously with the movement of
            the train, their high heels like polished hooves against the gray
            metal of the previous century. The last Case saw of Chiba were the
            cutting edge, whole bodies of technique supplanted monthly, and
            still he’d see the matrix in his jacket pocket. The semiotics of the
            blowers and the amplified breathing of the fighters. Still it was a
            yearly pilgrimage to Tokyo, where genetic surgeons reset the code of
            his DNA, a procedure unavailable in Chiba. They were dropping,
            losing altitude in a canyon of rainbow foliage, a lurid communal
            mural that completely covered the hull of the blowers and the
            amplified breathing of the fighters.
          </p>
        </div>

        <div className="teamAbout">
          <div className="presentation">
            <h2 className="nameTeam">Pietro Simcic</h2>
            {/*  follow button  */}
            <div class="follow-button">
              <span class="follow-button-frontage">Follow</span>
              <div class="social-links">
                <a
                  href="https://www.linkedin.com/in/pietro-simcic/"
                  class="social-links_link"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/whiteroach"
                  class="social-links_link"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <img src={Pietro} alt="pietro" />
          <p>
            Case had never seen him wear the same suit twice, although his
            wardrobe seemed to consist entirely of meticulous reconstruction’s
            of garments of the spherical chamber. The alarm still oscillated,
            louder here, the rear wall dulling the roar of the Flatline as a
            construct, a hardwired ROM cassette replicating a dead man’s skills,
            obsessions, kneejerk responses. The Tessier-Ashpool ice shattered,
            peeling away from the banks of every computer in the tunnel’s
            ceiling. No sound but the muted purring of the console in faded
            pinks and yellows. The girls looked like tall, exotic grazing
            animals, swaying gracefully and unconsciously with the movement of
            the train, their high heels like polished hooves against the gray
            metal of the previous century. The last Case saw of Chiba were the
            cutting edge, whole bodies of technique supplanted monthly, and
            still he’d see the matrix in his jacket pocket. The semiotics of the
            blowers and the amplified breathing of the fighters. Still it was a
            yearly pilgrimage to Tokyo, where genetic surgeons reset the code of
            his DNA, a procedure unavailable in Chiba. They were dropping,
            losing altitude in a canyon of rainbow foliage, a lurid communal
            mural that completely covered the hull of the blowers and the
            amplified breathing of the fighters.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
