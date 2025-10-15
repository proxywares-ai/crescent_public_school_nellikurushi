import { Link, useLocation } from "react-router-dom";
import Achievements from "./Achievements";
import { useEffect, useState } from "react";




const AboutSection = () => {

  const location = useLocation();
  const [about, setAbout] = useState(false)

  useEffect(() => {
    location.pathname == "/about" ? setAbout(true) : setAbout(false)
  }, [location.pathname])




  return (
    <>
      <div className="md:pt-35 py-20 bg-white  rounded-t-4xl top-[-15] h-full " >
        <h2 className="md:text-4xl text-2xl font-bold md:mb-15  text-center" data-aos="fade-up"
          data-aos-duration="2000" >About Us</h2>
        <div className="flex flex-col  p-8 items-center gap-8 mt-5 w-full ">
          <div className="relative flex justify-center items-center md:w-full" data-aos="fade-up"
            data-aos-duration="1000">
            <img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757068165/crecent_school_pic_2_orjrxp.jpg" alt="About" className="w-auto md:w-auto md:h-130  rounded-lg z-2 shadow" />
            {/* <img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757074215/building-education-florida-photos_3_vofkjm.png" alt="About" className="w-5/6 h-5/6 absolute  md:left-30 right-20 top-10  z-0 md:w-1/2 rounded-lg shadow" /> */}

          </div>
          <div className="md:w-3/4 text-justify md:pt-20"  >
            {about ? 
            <div className="md:w-full "  > <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
              data-aos-duration="2000">
              <span className="font-bold md:text-2xl ml-10">Crescent Public School</span> is a prestigious educational institution located in the serene town of Nellikkurussi, Palakkad district, Kerala. With a strong commitment to holistic education,
              we cater to students from LKG  to VII Std, providing a solid foundation for their academic and personal development.
              The Chairman  of Crescent Public School Mr. Moideen .A ,
              whose visionary leadership and extensive experience in education ensure the maintenance of the highest standards of excellence in teaching and learning <br /> <br />
            </p>

              <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
                data-aos-duration="2000">Academically, Crescent Public School is committed to nurturing the intellectual curiosity and potential of each student.
                Our experienced and dedicated faculty members employ innovative teaching methodologies to create a stimulating and engaging learning environment.
                We prioritize a student-centered approach that encourages critical thinking, creativity and problem-solving skills. <br /> <br />
              </p>

              <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
                data-aos-duration="2000">We offer a comprehensive curriculum that combines academic excellence with a wide range of co-curricular activities.
                Our students are encouraged to explore their talents and interests through art, music, sports, and other extracurricular pursuits.
                By providing a holistic education, we aim to foster creativity, leadership skills, and a sense of social responsibility in our students. <br /> <br />
              </p>

              <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
                data-aos-duration="2000">We believe in the importance of a strong partnership between parents and teachers.
                Regular parent-teacher meetings, open communication channels, and parent involvement in school activities are some of the ways we foster a collaborative approach to education.
                This ensures that parents are actively engaged in their child's educational journey and allows for a comprehensive support system. <br /> <br />
              </p>

              <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
                data-aos-duration="2000">If you are seeking a nurturing and inspiring educational environment for your child, Crescent Public School is the ideal choice.
                Our dedicated team of educators, picturesque location, and commitment to holistic education make us a premier institution in the region.
                Come, be a part of the Crescent Public School family, and witness your child's growth and success. <br /><br />
              </p>

              <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
                data-aos-duration="2000">Contact us today to schedule a visit and learn more about the admission process.
                Together, let's shape a brighter future for your child at Crescent Public School. <br /><br />
              </p>

              <ul className="text-gray-1000 md:text-lg " data-aos="fade-up"
                data-aos-duration="2000">
                <li>• LKG to 7th grade</li>
                <li>•	English-medium CBSE syllabus</li>
                <li>•	Bus Service:We provide travel facilities from all areas near the school.</li>
              </ul>
            </div>
              :
              <div className="md:w-full"  >
                <p className="text-gray-1000 md:text-lg" data-aos="fade-up"
                  data-aos-duration="2000">
                  <span className="font-bold md:text-2xl ml-10">Crescent Public School</span> is a prestigious educational institution located in the serene town of Nellikkurussi, Palakkad district, Kerala. With a strong commitment to holistic education,
                  we cater to students from LKG  to VII Std, providing a solid foundation for their academic and personal development.
                  The Chairman  of Crescent Public School Mr. Moideen .A ,
                  whose visionary leadership and extensive experience in education ensure the maintenance of the highest standards of excellence in teaching and learning <br /> <br />
                </p>

                <p className="text-gray-1000 md:text-lg " data-aos="fade-up"
                  data-aos-duration="2000">  Academically, Crescent Public School is committed to nurturing the intellectual curiosity and potential of each student.
                  Our experienced and dedicated faculty members employ innovative teaching methodologies to create a stimulating and engaging learning environment.
                  We prioritize a student-centered approach that encourages critical thinking, creativity and problem-solving skills.
                </p>


                <div className="text-end  cursor-pointer   sm:pt-5" data-aos="fade-up"
                  data-aos-duration="1000">
                  {!about && <Link to="/about"><button className="mt-4 px-4 py-2  text-white bg-[#273359]  border-2  rounded-lg hover:text-[#273359] hover:bg-white hover:border-2 hover:cursor-pointer " >
                    Read More
                  </button></Link>}
                </div>
              </div>}
          </div>
        </div>



        <div className="w-full h-auto mt-10 overflow-x-hidden">
          <div className="w-full  md:flex object-cover  md:my-40 py-25 text-black bg-[linear-gradient(165deg,#273359_50%,#ffffff_50%)] md:bg-[linear-gradient(125deg,#273359_50%,#ffffff_50%)]" data-aos="fade-right"
            data-aos-offset="10"
            data-aos-easing="ease-in-sine">
            <div className="md:w-1/2 flex-col items-center justify-center ">
              <div className=" flex justify-center  " data-aos="fade-up"
                data-aos-duration="1500"><img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757763740/Moideen_A_cpjqsm.jpg" alt="" className=" w-60 h-70 md:w-90 mx-3 md:h-100 object-cover shadow-2xl rounded-xl mb-4" /></div>
              <h2 className="md:text-4xl md:pt-5 text-2xl font-semibold   text-center text-white" data-aos="fade-up"
                data-aos-duration="2000" >
                Moideen A
              </h2>
              <p className="md:text-xl md:pt-2 text-lg italic   text-center text-white" data-aos="fade-up"
                data-aos-duration="3000">
                  Chairman
              </p>

            </div>

            <div className="md:w-1/2 italic flex items-center justify-center p-10" >
              <p className="text-gray-1000 md:text-lg leading-[2] text-justify pt-20" data-aos="fade-up"
                data-aos-duration="3000">
                " Education is a life-long learning process. Learning happens all the time; not only in a pre-designated place called the school. It happens in the home, between home and school too.
                The home’s and school’s mission therefore is to provide a learning environment and opportunities to the children as the learners "
              </p>
            </div>
          </div>


          <div className="w-full  md:flex object-cover  md:my-40 py-25 text-black bg-[linear-gradient(165deg,#ffffff_50%,#273359_50%)] md:bg-[linear-gradient(125deg,#ffffff_50%,#273359_50%)]" data-aos="fade-left"
            data-aos-offset="10"
            data-aos-easing="ease-in-sine">
           

            <div className="hidden md:w-1/2 italic md:flex items-center justify-center p-10 " >
              <p className="text-gray-1000 md:text-lg leading-[2] text-justify pt-25 pr-10 " data-aos="fade-up"
                data-aos-duration="3000">
                " The world around us is constantly changing and we are aware that there are many challenges that lie ahead of us as we navigate around this world of changing demands. The need of the hour is to collaborate,innovate and keep growing in order to keep pace with the changes that are inevitable.
                Education and training today are to be aligned and geared to meet these remarkable challenges "
              </p>
            </div>

             <div className="md:w-1/2 flex-col items-center justify-center ">
              <div className=" flex justify-center  " data-aos="fade-up"
                data-aos-duration="1500"><img src="https://res.cloudinary.com/div7mzklt/image/upload/v1760550939/Manager_-_Abdurahman_M_k5ssyk.jpg" alt="" className=" w-60 h-70 md:w-90 mx-3 md:h-100 object-cover shadow-2xl rounded-xl mb-4" />
              </div>
              <h2 className="md:text-4xl pt-5 text-2xl font-semibold   text-center text-black md:text-white" data-aos="fade-up"
                data-aos-duration="2000" >
                Abdurahman M
              </h2>
              <p className="md:text-xl md:pt-2 text-lg italic   text-center text-black md:text-white" data-aos="fade-up"
                data-aos-duration="3000">
                  Manager
              </p>

            </div>

            <div className=" md:hidden md:w-1/2 italic flex items-center justify-center p-10" >
              <p className="text-gray-1000 md:text-lg leading-[2] text-white text-justify pt-25 " data-aos="fade-up"
                data-aos-duration="3000">
                " The world around us is constantly changing and we are aware that there are many challenges that lie ahead of us as we navigate around this world of changing demands. The need of the hour is to collaborate,innovate and keep growing in order to keep pace with the changes that are inevitable.
                Education and training today are to be aligned and geared to meet these remarkable challenges "
              </p>
            </div>

          </div>


          <div className="w-full  md:flex object-cover  md:my-40 py-25 text-black bg-[linear-gradient(165deg,#273359_50%,#ffffff_50%)] md:bg-[linear-gradient(125deg,#273359_50%,#ffffff_50%)]" data-aos="fade-right"
            data-aos-offset="10"
            data-aos-easing="ease-in-sine">
            <div className="md:w-1/2 flex-col items-center justify-center ">
              <div className=" flex justify-center  " data-aos="fade-up"
                data-aos-duration="1500"><img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757763745/Principal_-_Saleena_P_pevvpn.jpg" alt="" className=" w-60 h-70 md:w-90 mx-3 md:h-100 object-cover shadow-2xl rounded-xl mb-4" /></div>
              <h2 className="md:text-4xl  md:pt-5  text-2xl font-semibold   text-center text-white" data-aos="fade-up"
                data-aos-duration="2000" >
                Saleena P
              </h2>
              <p className="md:text-xl md:pt-2 text-lg italic   text-center text-white" data-aos="fade-up"
                data-aos-duration="2000">
                  Principal
              </p>

            </div>

            <div className="md:w-1/2 italic flex items-center justify-center p-10" >
              <p className="text-gray-1000 md:text-lg leading-[2] text-justify pt-20" data-aos="fade-up"
                data-aos-duration="3000">
                " Dear Parents, Students and all other stake holders of our school....
                We aim to create a safe nurturing the students to develop different qualities to face challenge of the modern world.
                we provide an appealing and stimulating curriculum that is flexible and tailored to the needs of each and every student as we strive for high educational out comes and personal best for all of our students "
              </p>
            </div>
          </div>
        </div>
        
        {about && <div className="w-full flex-col justify-center items-center text-center mt-10 mb-10 md:px-90">
                <h2 className="text-black font-bold text-2xl md:text-3xl mb-10"  data-aos="fade-up"
          data-aos-duration="2000">OUR FACILITIES</h2>
                <ul className="text-justify md:text-center px-3 md:text-lg "  data-aos="fade-up"
          data-aos-duration="3000">
                  <li>Assuring a safe, caring, congenial and conducive environment</li> <br />
                  <li>Qualified and highly experienced mentors</li> <br />
                  <li>Focus on competency based education and Experiential learning </li> <br />
                  <li>Integrated method of coaching </li> <br />
                  <li>Information Technology from first std to 7 th std.</li> <br />
                  <li>Conduct of co-curricular activities and club activities under the supervision of expert faculties.</li> <br />
                  <li>Arts, Sports & Games </li> <br />
                  <li>Transport facilities from all areas near the school.</li> <br />
                  <li>Purified Drinking water facility</li> <br />
                  <li>Conduct frequent in-service programmes for the teachers.</li> <br />
                  <li>Children Park</li>
                </ul>
        </div>}
        
        {!about && <Achievements />}

      </div>
    </>
  )
};

export default AboutSection;
