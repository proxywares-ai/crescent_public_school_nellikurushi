// src/pages/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    emailjs
      .send(
        "service_88pb8bf",  // service ID
        "template_h237g1l",  // template ID
        formData,
        "ejVooU2diqzd-B_U0"   // public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up" data-aos-duration="2000">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-2xl p-6" data-aos="fade-up" data-aos-duration="3000">
              <h3 className="text-xl font-semibold mb-4" >Get In Touch</h3>
              <p className="text-gray-600 mb-4" >
                Have questions or need more information? We'd love to hear from
                you!
              </p>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-700">Near Nellikurussi Juma Masjid
                    Nellikurussi, Mulanjoor
                    Ottapalam Palakkad Kerala
                    Pin 679511</span>
                </li>
                <li> <span className="text-gray-700">+91 9048075185</span></li>
                <li> <span className="text-gray-700">crescentpublicschoolnjm@gmail.com</span></li>
              </ul>

              <div className="mt-6 flex justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.9146865961568!2d76.4252977!3d10.7869773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d9da7b7fbaa9%3A0xfe94415171d85eb0!2sCrescent%20Public%20School!5e0!3m2!1sen!2sin!4v1757160771129!5m2!1sen!2sin" width="500" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-2xl p-6" data-aos="fade-up" data-aos-duration="3000"
            >
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
