import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const MembersSection = () => {
  const members = [
    { name: "Moideen A", role: "Chairman", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763740/Moideen_A_cpjqsm.jpg" },
    { name: "Abdurahman M", role: "Manager", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763740/Manager_-_Abdurahman_M_k5ssyk.jpg" },
    { name: "Saleena P", role: "Principal", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763745/Principal_-_Saleena_P_pevvpn.jpg" },
    { name: "Ambika TR", role: "Vice principal", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763733/Vice_principal_-_Ambika_TR_ewyngb.jpg" },
    { name: "K Moideen", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763739/K_Moideen_d1iyrf.jpg" },
    { name: "Muhammed M", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757765169/Muhammed_M_d8x81m.jpg" },
    { name: "Muhammed Shafi", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763738/Muhammed_Shafi_yhwlri.jpg" },
    { name: "Shafeer M", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763735/Safeer_qcmt6w.jpg" },
    { name: "Rasheed V", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763742/Rasheed_V_mwaguq.jpg" },
    { name: "Ashraf Malayil", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763740/Ashraf_Malayil_ov5o3g.jpg" },
    { name: "Muhammed P", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763742/Muhammed_P_cgjums.jpg" },
    { name: "Saidh Muhammed", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763743/Saidh_Muhammed_wp3qlp.jpg" },
    { name: "Yousaf", role: "“Board of Members", img: "https://res.cloudinary.com/div7mzklt/image/upload/v1757763737/Yousaf_shckzj.jpg" },
  ];


  const [numberToShow, setNumberToShow] = useState(2);


  
  const location = useLocation();
  
   
     useEffect(() => {
    if (location.pathname === "/members") {
      setNumberToShow(members.length);
    } else {
      setNumberToShow(3);
    }
  }, [location.pathname]);


  return (
    <>
      <div className=" text-white md:py-30 md:px-60 py-20 px-20" style={{ backgroundColor: '#273359' }}>
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center"  data-aos="fade-up" data-aos-duration="2000">Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {members.slice(0, numberToShow).map((m, i) => (
            <div key={i} className="bg-white text-black border-white border-1  shadow text-center z-2" data-aos="fade-up" data-aos-duration="1000">
              <img src={m.img} alt={m.name} className="w-full md:h-80 h-60 object-cover  mb-4" />
              <h3 className="font-bold md:text-lg">{m.role}</h3>
              <p className="pb-3">{m.name}</p>
            </div>
          ))}
        </div>
        {
          location.pathname !== "/members" && <div className="text-center pt-20  z-6 ">
          <Link to="/members"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 " data-aos="fade-up" data-aos-duration="1000">
            View More
          </button></Link>
        </div>
        }
      </div>
    </>
  );
};

export default MembersSection;
