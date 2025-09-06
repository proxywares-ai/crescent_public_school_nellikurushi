import { Link } from "react-router-dom";


const Footer = () => (
  <footer className="bg-black text-white p-8 px-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold mb-2 text-2xl">Quick Links</h3>
        <ul className="space-y-1 text-gray-300 ">
          <Link to="/"><li className="pb-2">Home</li></Link>
          <Link to="/about"><li  className="pb-2">About</li></Link>
          <Link to="/members"><li className="pb-2">Members</li></Link>
          <Link to="/gallery"><li className="pb-2">Gallery</li></Link>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-2xl">Contact Info</h3>
        <p className="pb-2">Nellikurushi, Ottapalam, Palakkad, Kerala</p>
        <p className="pb-2">+91 1234567890</p>
        <p className="pb-2">crescentpublicschool@gmail.com</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-2xl">Follow Us</h3>
        <div className="flex gap-4">
          <Link to="" >
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></span>

          </Link>
          <Link to="" >
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></span>

          </Link>
          <Link to="" >
            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg></span>

          </Link>        </div>
      </div>
    </div>
    <p className="text-center text-sm text-gray-400 mt-6">
      © 2025 Crescent Public School. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
