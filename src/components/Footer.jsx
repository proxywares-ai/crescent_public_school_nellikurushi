import { Link } from "react-router-dom";


const Footer = () => {
   const currentYear = new Date().getFullYear();



return(
  <footer className="bg-black text-white p-8 px-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="md:flex md:flex-col md:items-center">
        <h3 className="font-bold mb-4 text-2xl">Quick Links</h3>
        <ul className="space-y-1  ">
          <Link to="/"><li className="pb-2 hover:text-gray-300">Home</li></Link>
          <Link to="/about"><li className="pb-2 hover:text-gray-300">About</li></Link>
          <Link to="/members"><li className="pb-2 hover:text-gray-300">Members</li></Link>
          <Link to="/gallery"><li className="pb-2 hover:text-gray-300">Gallery</li></Link>
        </ul>
      </div>
      <div className="md:flex md:flex-col md:items-center " >
        <h3 className="font-bold mb-4 text-2xl">Contact Info</h3>
        <p className="pb-2 md:text-center">
          Near Nellikurussi Juma Masjid, Nellikurussi, Mulanjoor <br />
          Ottapalam, Palakkad, Kerala.   Pin - 679511</p>
        <p className="pb-2"><a href="tel:0466 291 2185">0466 291 2185</a> / 
          <a href="tel:+919048075185">+91 9048075185</a>
        </p>
        <a href="mailto:crescentpublicschoolnjm@gmail.com"><p className="pb-2">crescentpublicschoolnjm@gmail.com</p></a>
      </div>
      <div className="md:flex md:flex-col md:items-center">
        <h3 className="font-bold mb-4 text-2xl">Follow Us</h3>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/c_p_s_nellikurussi/"  target="_blank" rel="noopener noreferrer">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></span>
          </a>
          <a href="https://www.facebook.com/crescentpublicschoolnjm"  target="_blank" rel="noopener noreferrer">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></span>

          </a>
          <a href="https://wa.me/919048075185"  target="_blank" rel="noopener noreferrer">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg></span>

          </a>        </div>
      </div>
    </div>
    <p className="text-center text-sm text-gray-400 mt-6">
      © {currentYear} Crescent Public School. All Rights Reserved.
    </p>
  </footer>
)
};

export default Footer;
