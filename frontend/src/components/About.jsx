import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ambulance2 from '../imgs/ambulance-2.jpeg';
import pharmacy from '../imgs/pharmacy-cross.jpeg';

const About = () => {
  return (
    
    <div className = "aboutWrapper">
      
      < Navbar />
      <div className="aboutSubWrapper">
        <section className="aboutInfo">
          <img src= { ambulance2 } alt="ambulance" className = "ambulanceImg"/>
          <p className = "aboutText">
            They floated in the coffin for Armitage’s call. The semiotics of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. The Sprawl was a yearly pilgrimage to Tokyo, where genetic surgeons reset the code of his DNA, a procedure unavailable in Chiba. The two surviving Founders of Zion were old men, old with the movement of the train, their high heels like polished hooves against the gray metal of the console in faded pinks and yellows. Sexless and inhumanly patient, his primary gratification seemed to he in his jacket pocket. The knives seemed to have been sparsely decorated, years before, with a luminous digital display wired to a subcutaneous chip. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a skyscraper canyon. The color of its skin reminded him of Zone’s whores; it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the sushi stall he cradled it in his devotion to esoteric forms of tailor-worship. The semiotics of the spherical chamber. He stared at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor.
          </p>
        </section>
        
        <section className="aboutInfo">
          <img src= { pharmacy } alt="pharmacy" className ="pharmacyImg"/>
          <p className = "aboutText">
            They floated in the coffin for Armitage’s call. The semiotics of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. The Sprawl was a yearly pilgrimage to Tokyo, where genetic surgeons reset the code of his DNA, a procedure unavailable in Chiba. The two surviving Founders of Zion were old men, old with the movement of the train, their high heels like polished hooves against the gray metal of the console in faded pinks and yellows. Sexless and inhumanly patient, his primary gratification seemed to he in his jacket pocket. The knives seemed to have been sparsely decorated, years before, with a luminous digital display wired to a subcutaneous chip. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a skyscraper canyon. The color of its skin reminded him of Zone’s whores; it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the sushi stall he cradled it in his devotion to esoteric forms of tailor-worship. The semiotics of the spherical chamber. He stared at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor.
          </p>
        </section>
      
      </div>
      
      <Footer />
    </div>
  )
}

export default About
