"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      number: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <>
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('deal95.webp')" }}
      >
        <div className=" bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
          <p className="text-lg mt-4 font-light">
            Discover the Himalayas like never before—one step at a time.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Contact Details - Left Side */}
          <div className="md:w-1/2 space-y-8 bg-white p-8 rounded-lg ">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Details
            </h3>

            <div className="flex items-start gap-4">
              <Phone className="text-orange-600" />
              <div>
                <p className="font-medium">Give us a call</p>
                <p className="text-sm text-gray-600">
                  Get expert travel help now!
                </p>
                <a
                  href="tel:+919259205032"
                  className="text-orange-600 font-semibold block mt-1"
                >
                +91-6239092532
                <br></br>
                +91-7466028080
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-600" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-sm text-gray-600">
                  Send us your queries anytime!
                </p>
                <a
                  href="mailto:booking@travelmybharat.com"
                  className="text-orange-600 font-semibold block mt-1"
                >
                  booking@mountainmytrip.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-orange-600" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">
                  Jhajhra near Subharti Hospital Chakrata Road Dehradun, Uttarakhand 248001
                </p>
                <a
                  href="https://goo.gl/maps/DG8c9nUKF1fSgFMu7"
                  target="_blank"
                  className="text-orange-600 font-semibold block mt-1"
                >
                  Get Direction
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
              >
                <FaFacebookF className="text-gray-600 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
              >
                <FaTwitter className="text-gray-600 hover:text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
              >
                <FaInstagram className="text-gray-600 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 border rounded-md h-32 mt-4 focus:ring-2 focus:ring-red-400"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-6 w-full bg-[#F54900] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition-all"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Embedded Google Map */}
      <div className="relative h-[400px] rounded-lg shadow-lg overflow-hidden mb-8">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.458926441687!2d-122.08424958469406!3d37.42206597984618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0x3f8f5e9b4a8f8b8e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1629999999999!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0"
        ></iframe>
      </div>
    </>
  );
}

// "use client";

// import { useState } from "react";
// import { Mail, MapPin, Phone } from "lucide-react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaDribbble,
// } from "react-icons/fa";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     email: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully!");
//     setFormData({
//       name: "",
//       number: "",
//       email: "",
//       address: "",
//       message: "",
//     });
//   };

//   return (
//     <>
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('deal95.jpg')" }}
//       >
//         <div className=" bg-opacity-50 p-10 rounded-xl">
//           <h1 className="text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
//           <p className="text-lg mt-4 font-light">
//             Discover the Himalayas like never before—one step at a time.
//           </p>
//         </div>
//       </div>

//       <section className="flex flex-col items-center p-6 md:p-12 lg:p-16 bg-gray-50 text-gray-900">

//          <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl">
//           {/* <div className="text-center md:text-left md:w-1/2 pr-6">
//             <p className="text-lg text-gray-700 mb-4">
//               We're here to help! Drop us a message, and our team will get back to you as soon as possible.
//             </p>
//             <p className="text-lg text-gray-700 mb-4">
//               Send us a message, and we’ll provide the guidance you need.
//             </p>
//             <p className="text-lg text-gray-700 mb-4">
//               Have concerns or feedback? We'd love to hear from you!
//             </p>

//             <div className="flex space-x-4 justify-center md:justify-start">
//               <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all">
//                 <FaFacebookF className="text-gray-600 hover:text-white" />
//               </a>
//               <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all">
//                 <FaTwitter className="text-gray-600 hover:text-white" />
//               </a>
//               <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-red-400 transition-all">
//                 <FaInstagram className="text-gray-600 hover:text-white" />
//               </a>

//             </div>
//           </div> */}

//           <form
//             onSubmit={handleSubmit}
//             className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg mt-6 md:mt-0"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
//                 required
//               />
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Your Address"
//                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
//                 required
//               />
//             </div>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write Comment"
//               className="w-full p-3 border rounded-md h-32 focus:ring-2 focus:ring-red-400"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="mt-4 w-full bg-[#F54900] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition-all"
//             >
//               SEND A MESSAGE
//             </button>
//           </form>
//         </div>
//                 <div className="bg-gray-50 border rounded-xl p-6 space-y-6 shadow-sm">
//           <h3 className="text-2xl font-bold text-gray-800">Contact Details</h3>

//           <div className="flex items-start gap-4">
//             <Phone className="text-orange-600" />
//             <div>
//               <p className="font-medium">Give us a call</p>
//               <p className="text-sm">Get expert travel help now!</p>
//               <a href="tel:+919259205032" className="text-orange-600 font-semibold">+91-9259205032</a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <Mail className="text-orange-600" />
//             <div>
//               <p className="font-medium">Email Us</p>
//               <p className="text-sm">Get travel help by sending an email!</p>
//               <a href="mailto:booking@travelmybharat.com" className="text-orange-600 font-semibold">booking@travelmybharat.com</a>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <MapPin className="text-orange-600" />
//             <div>
//               <p className="font-medium">Address</p>
//               <p className="text-sm">Shimla Bypass Rd, Dehradun, Uttarakhand 248001</p>
//               <a href="https://goo.gl/maps/DG8c9nUKF1fSgFMu7" target="_blank" className="text-orange-600 font-semibold">Get Direction</a>
//             </div>
//           </div>
//           </div>

//       </section>

//       <div className="relative h-[400px] rounded-lg shadow-lg overflow-hidden mb-8">
//         {/* Embedded Google Map */}
//         <iframe
//           title="Company Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.458926441687!2d-122.08424958469406!3d37.42206597984618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0x3f8f5e9b4a8f8b8e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1629999999999!5m2!1sen!2sus"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           className="absolute inset-0 mb-4"
//         ></iframe>
//       </div>
//     </>
//   );
// }
