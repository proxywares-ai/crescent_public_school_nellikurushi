


const HeroSection = () => (
  <>
    <div className="relative md:h-screen h-screen ">
      <img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757068165/crecent_school_pic_2_orjrxp.jpg" alt="School" className="w-full h-screen object-cover top-0 fixed z-[-1] brightness-40" />
      <div className="absolute inset-0  flex flex-col justify-center md:items-center text-white bottom-30 " data-aos="fade-up"
     data-aos-duration="2000">
        <h1 className="top-1/2 text-6xl font-bold pl-2 md:pl-0">CRESCENT PUBLIC SCHOOL</h1>
        <p className="top-1/2 text-xl pt-4  pl-2 md:pl-0">Value Based Training</p>
      </div>
    </div>
    
  </>
);

export default HeroSection;
