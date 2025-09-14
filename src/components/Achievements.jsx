import AOS from "aos"
import "aos/dist/aos.css";
AOS.init({ duration: 750, offset: -100,  once: false });



function Achievements() {
  return (
    <>
        <div className="w-full  my-10 py-1 px-10 md:px-3  rounded-lg shadow-lg flex justify-center items-center text-center relative   z-0">
               <div className="w-full md:w-3/4 z-3 mt-3 absolute top-[0] md:top-0 flex justify-between  md:px-40  rounded py-5 text-white drop-shadow-2xl drop-shadow-black  " style={{ backgroundColor: '#273359' }} data-aos="fade-up"
     data-aos-duration="3000">
                    <div className=" py-5 px-10 md:px-20 " >
                        <h1 className="text-5xl md:text-7xl ">700+</h1>
                        <p className="text-xl md:text-3xl mt-3">Students</p>
                    </div>
                    <div className=" py-5 px-10  md:px-20">
                        <h1 className="text-5xl md:text-7xl ">250+</h1>
                        <p className="text-xl md:text-3xl mt-3">Faculties</p>
                    </div>
               </div>
            </div>
    </>
  )
}

export default Achievements