import { Link, useLocation } from "react-router-dom";
import Achievements from "./Achievements";
import { useEffect, useState } from "react";




const AboutSection = () => {
  
  const location = useLocation();
  const [about, setAbout] = useState(false)
  
  useEffect(() => {
    location.pathname == "/about" ? setAbout(true) : setAbout(false)
  },[location.pathname])
  



  return (
    <>
    <div className="md:pt-30 py-20 bg-white  rounded-t-4xl top-[-15] h-full">
      <h2 className="md:text-4xl text-2xl font-bold md:mb-5  text-center"   >About Us</h2>
      <div className="flex flex-col md:flex-row p-8 items-center gap-8 mt-5">
        <div className="relative flex justify-center items-center">
          <img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757074212/building-education-florida-photos_2_1_pssnht.png" alt="About" className="w-full md:w-1/2 rounded-lg z-2 shadow" />
          <img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757074215/building-education-florida-photos_3_vofkjm.png" alt="About" className="w-5/6 h-5/6 absolute  md:left-30 right-20 top-10  z-0 md:w-1/2 rounded-lg shadow" />

        </div>        
        <div className="md:w-1/2 ">
          <p className="text-gray-1000 md:text-lg">
Established in 2011, Crescent Public School Nellikurussi is committed to providing quality education with a focus on value-based training. Our mission is to nurture young minds and empower them with the knowledge, skills, and values necessary to succeed in life.we believe in fostering a holistic approach to education. 
Our motto reflects our commitment to imparting education that goes beyond academics. We aim to instill lifelong values such as integrity, respect, and responsibility in our students, shaping them into confident, compassionate learners ready to contribute positively to society.          </p>
          <div className="text-end   sm:pt-5">
           { !about && <Link to ="/about"><button className="mt-4 px-4 py-2  text-white rounded hover:bg-blue-400 hover:cursor-pointer hover: "  style={{ backgroundColor: '#273359' }}>
              Read More
            </button></Link>}
          </div>
        </div>
      </div>
      { !about && <Achievements/>}
      
    </div>
  </>
  ) 
};

export default AboutSection;
