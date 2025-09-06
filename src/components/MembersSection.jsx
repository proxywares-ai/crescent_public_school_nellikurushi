import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const MembersSection = () => {
  const members = [
    { name: "James", role: "Chairman", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Annie", role: "Principal", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Rahul", role: "Vice Chairman", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sara", role: "Trustee", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sara", role: "Trustee", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sara", role: "Trustee", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sara", role: "Trustee", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];


  const [numberToShow, setNumberToShow] = useState(2);


  
  const location = useLocation();
  
   
     useEffect(() => {
    if (location.pathname === "/members") {
      setNumberToShow(members.length);
    } else {
      setNumberToShow(4);
    }
  }, [location.pathname]);


  return (
    <>
      <div className=" text-white md:py-40 md:px-30 py-20 px-15" style={{ backgroundColor: '#273359' }}>
        <h2 className="text-3xl font-bold mb-10 text-center">Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {members.slice(0, numberToShow).map((m, i) => (
            <div key={i} className="bg-white text-black border-white border-1  shadow text-center z-2">
              <img src={m.img} alt={m.name} className="w-full md:h-80 h-80 object-cover  mb-4" />
              <h3 className="font-bold">{m.role}</h3>
              <p>{m.name}</p>
            </div>
          ))}
        </div>
        {
          location.pathname !== "/members" && <div className="text-center pt-20  z-6 ">
          <Link to="/members"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 ">
            Read More
          </button></Link>
        </div>
        }
      </div>
    </>
  );
};

export default MembersSection;
