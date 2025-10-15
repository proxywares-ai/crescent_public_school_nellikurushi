import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = () => {

    setIsOpen(false);
  };

 


  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center ">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/div7mzklt/image/upload/v1757069523/logo_cropped_zv49kp.jpg" alt="Logo" className="md:w-20 w-15 h-full" />
            <h1 className="md:text-xl text-lg font-bold">CRESCENT PUBLIC SCHOOL</h1>
          </div>
        </Link>

        <div className=" gap-6 font-medium text-lg hidden md:flex items-center">
          <div><Link to="/" className="hover:text-blue-600">Home</Link></div>
          <div><Link to="/about" className="hover:text-blue-600">About</Link></div>
          <div><Link to="/members" className="hover:text-blue-600">Members</Link></div>
          <div><Link to="/gallery" className="hover:text-blue-600">Gallery</Link></div>
          <div className="bg-[#273359] text-white border-2 px-5 py-2 rounded-lg hover:text-[#273359] hover:bg-white hover:border-2" ><Link to="/contact" className="">Contact</Link></div>
        </div>


        <div className="md:hidden">
          {isOpen ? (
            <button className="h-8 w-8 text-gray-800 cursor-pointer"
              onClick={() => setIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>
          ) : (
            <button className="  flex justify-center items-center  text-gray-800 cursor-pointer "
              onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
          )}
        </div>

      </nav>
      {isOpen &&
        (<div className=" gap-6 font-medium bg-white p-4 flex-col">
          <Link to="/" className="hover:text-blue-600" ><div className="px-4 py-2"   onClick={() => handleSelect()}>Home</div></Link> 
          <Link to="/about" className="hover:text-blue-600"><div className="px-4 py-2"   onClick={() => handleSelect()}>About</div></Link> 
          <Link to="/members" className="hover:text-blue-600"><div className="px-4 py-2"   onClick={() => handleSelect()}>Members</div></Link>
          <Link to="/gallery" className="hover:text-blue-600"><div className="px-4 py-2"   onClick={() => handleSelect()}>Gallery</div></Link> 
          <Link to="/contact" className="hover:text-blue-600"><div className="px-4 py-2"   onClick={() => handleSelect()}>Contact</div></Link>
        </div>)

      }
    </>
  );
};

export default Navbar;
