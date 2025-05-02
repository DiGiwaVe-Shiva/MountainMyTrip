// // "use client";

// // import { useState } from "react";
// // import { Mail, MapPin, Phone } from "lucide-react";
// // import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// // export default function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     number: "",
// //     email: "",
// //     address: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Message sent successfully!");
// //     setFormData({
// //       name: "",
// //       number: "",
// //       email: "",
// //       address: "",
// //       message: "",
// //     });
// //   };

// //   return (
// //     <>
// //       <div
// //         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
// //         style={{ backgroundImage: "url('deal95.webp')" }}
// //       >
// //         <div className=" bg-opacity-50 p-10 rounded-xl">
// //           <h1 className="text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
// //           <p className="text-lg mt-4 font-light">
// //             Discover the Himalayas like never before—one step at a time.
// //           </p>
// //         </div>
// //       </div>

// //       <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
// //         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
// //           {/* Contact Details - Left Side */}
// //           <div className="md:w-1/2 space-y-8 bg-white p-8 rounded-lg ">
// //             <h3 className="text-3xl font-bold text-gray-800 mb-6">
// //               Contact Details
// //             </h3>

// //             <div className="flex items-start gap-4">
// //               <Phone className="text-orange-600" />
// //               <div>
// //                 <p className="font-medium">Give us a call</p>
// //                 <p className="text-sm text-gray-600">
// //                   Get expert travel help now!
// //                 </p>
// //                 <a
// //                   href="tel:+919259205032"
// //                   className="text-orange-600  text-[19px] font-semibold block mt-1"
// //                 >
// //                 +91-6239092532
// //                 <br></br>
// //                 +91-7466028080
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="flex items-start gap-4">
// //               <Mail className="text-orange-600" />
// //               <div>
// //                 <p className="font-medium">Email Us</p>
// //                 <p className=" text-gray-600  text-sm">
// //                   Send us your queries anytime!
// //                 </p>
// //                 <a
// //                   href="mailto:booking@travelmybharat.com"
// //                   className="text-orange-600 font-semibold block mt-1  text-[19px]"
// //                 >
// //                   booking@mountainmytrip.com
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="flex items-start gap-4">
// //               <MapPin className="text-orange-600" />
// //               <div>
// //                 <p className="font-medium">Address</p>
// //                 <p className="text-sm text-gray-600">
// //                   Jhajhra near Subharti Hospital Chakrata Road Dehradun, Uttarakhand 248001
// //                 </p>
// //                 <a
// //                   href="https://goo.gl/maps/DG8c9nUKF1fSgFMu7"
// //                   target="_blank"
// //                   className="text-orange-600 font-semibold block mt-1  text-[19px]"
// //                 >
// //                   Get Direction
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="flex gap-4 pt-4">
// //               <a
// //                 href="#"
// //                 className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
// //               >
// //                 <FaFacebookF className="text-gray-600 hover:text-white" />
// //               </a>
// //               <a
// //                 href="#"
// //                 className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
// //               >
// //                 <FaTwitter className="text-gray-600 hover:text-white" />
// //               </a>
// //               <a
// //                 href="#"
// //                 className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
// //               >
// //                 <FaInstagram className="text-gray-600 hover:text-white" />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Contact Form - Right Side */}
// //           <form
// //             onSubmit={handleSubmit}
// //             className="md:w-1/2 bg-white p-8 rounded-lg shadow-md"
// //           >
// //             <h3 className="text-2xl font-bold text-gray-800 mb-6">
// //               Send Us a Message
// //             </h3>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 placeholder="Your Name"
// //                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 placeholder="Email Address"
// //                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
// //                 required
// //               />
// //               <input
// //                 type="tel"
// //                 name="number"
// //                 value={formData.number}
// //                 onChange={handleChange}
// //                 placeholder="Phone Number"
// //                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //                 placeholder="Your Address"
// //                 className="p-3 border rounded-md w-full focus:ring-2 focus:ring-red-400"
// //                 required
// //               />
// //             </div>

// //             <textarea
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               placeholder="Write your message..."
// //               className="w-full p-3 border rounded-md h-32 mt-4 focus:ring-2 focus:ring-red-400"
// //               required
// //             ></textarea>

// //             <button
// //               type="submit"
// //               className="mt-6 w-full bg-[#F54900] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition-all"
// //             >
// //               SEND A MESSAGE
// //             </button>
// //           </form>
// //         </div>
// //       </section>

// //       {/* Embedded Google Map */}
// //       <div className="relative h-[400px] rounded-lg shadow-lg overflow-hidden mb-8">
// //         <iframe
// //           title="Company Location"
// //          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13772.509044190032!2d77.90638915355684!3d30.34733294635578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2bca85431751%3A0x1f09dfefe6b7c064!2ssubcentre%20jhajhra!5e0!3m2!1sen!2sin!4v1745997151064!5m2!1sen!2sin"
// //          width="100%"
// //          height="100%"
// //          style={{ border: 0 }}
// //          allowfullscreen=""
// //           loading="lazy"
// //            referrerpolicy="no-referrer-when-downgrade">
// //             </iframe>"
        
// //       </div>
// //     </>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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
//       {/* Banner */}
//       <div
//         className="bg-cover mt-12 bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('deal95.webp')" }}
//       >
//         <div className=" bg-opacity-50 p-6 md:p-10 rounded-xl">
//           <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">Contact Us</h1>
//           <p className="text-base md:text-lg mt-3 font-light">
//             Discover the Himalayas like never before—one step at a time.
//           </p>
//         </div>
//       </div>

//       {/* Main Contact Section */}
//       <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
//           {/* Contact Details */}
//           <div className="md:w-1/2 space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-sm">
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Contact Details</h3>

//             {/* Phone */}
//             <div className="flex items-start gap-4">
//               <Phone className="text-orange-600 mt-1" />
//               <div>
//                 <p className="font-medium">Give us a call</p>
//                 <p className="text-sm text-gray-600">Get expert travel help now!</p>
//                 <a href="tel:+919259205032" className="text-orange-600 text-[18px] text-base font-semibold block mt-1">
//                   +91-6239092532 <br /> +91-7466028080
//                 </a>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <Mail className="text-orange-600 mt-1" />
//               <div>
//                 <p className="font-medium">Email Us</p>
//                 <p className="text-sm text-gray-600">Send us your queries anytime!</p>
//                 <a href="mailto:booking@mountainmytrip.com" className="text-orange-600 text-[18px] font-semibold block mt-1">
//                   booking@mountainmytrip.com
//                 </a>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="flex items-start gap-4">
//               <MapPin className="text-orange-600 mt-1 " />
//               <div>
//                 <p className="font-medium">Address</p>
//                 <p className="text-sm text-gray-600">
//                   Jhajhra near Subharti Hospital Chakrata Road, Dehradun, Uttarakhand 248001
//                 </p>
//                 <a
//                   href="https://goo.gl/maps/DG8c9nUKF1fSgFMu7"
//                   target="_blank"
//                   className="text-orange-600 text-[18px] font-semibold block mt-1"
//                 >
//                   Get Direction
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4 pt-2">
//               <a
//                 href="#"
//                 className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
//               >
//                 <FaFacebookF className="text-gray-600 hover:text-white" />
//               </a>
//               <a
//                 href="#"
//                 className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
//               >
//                 <FaTwitter className="text-gray-600 hover:text-white" />
//               </a>
//               <a
//                 href="#"
//                 className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-all"
//               >
//                 <FaInstagram className="text-gray-600 hover:text-white" />
//               </a>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-sm"
//           >
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
//               placeholder="Write your message..."
//               className="w-full p-3 border rounded-md h-32 mt-4 focus:ring-2 focus:ring-red-400"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="mt-6 w-full bg-[#F54900] text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition-all"
//             >
//               SEND A MESSAGE
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Google Map */}
//       <div className="relative h-[300px] md:h-[400px] rounded-lg shadow-lg overflow-hidden mb-10 mx-4 md:mx-10">
//         <iframe
//           title="Company Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13772.509044190032!2d77.90638915355684!3d30.34733294635578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2bca85431751%3A0x1f09dfefe6b7c064!2ssubcentre%20jhajhra!5e0!3m2!1sen!2sin!4v1745997151064!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </>
//   );
// }

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
      {/* Banner */}
      <div
        className="bg-cover mt-12 bg-center h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('deal95.webp')" }}
      >
        <div className=" bg-opacity-50 px-4 py-6 sm:px-6 sm:py-10 rounded-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base mt-2 sm:mt-3 font-light">
            Discover the Himalayas like never before—one step at a time.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Contact Details
            </h3>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-orange-600 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="font-medium">Give us a call</p>
                <p className="text-sm text-gray-600">Get expert travel help now!</p>
                <a href="tel:+919259205032" className="text-orange-600 font-semibold block mt-1 text-sm sm:text-base">
                  +91-6239092532 <br /> +91-7466028080
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-orange-600 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-sm text-gray-600">Send us your queries anytime!</p>
                <a
                  href="mailto:booking@mountainmytrip.com"
                  className="text-orange-600 font-semibold block mt-1 text-sm sm:text-base"
                >
                  booking@mountainmytrip.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="text-orange-600 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">
                  Jhajhra near Subharti Hospital Chakrata Road, Dehradun, Uttarakhand 248001
                </p>
                <a
                  href="https://goo.gl/maps/DG8c9nUKF1fSgFMu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-semibold block mt-1 text-sm sm:text-base"
                >
                  Get Direction
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-gray-200 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Icon className="text-gray-600 hover:text-white w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                required
              />
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Address"
                className="p-3 border rounded-md w-full focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 border rounded-md h-32 mt-4 focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-6 w-full bg-[#F54900] text-white py-3 rounded-md text-base font-semibold hover:bg-orange-700 transition-all"
            >
              SEND A MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg shadow-md overflow-hidden mx-4 sm:mx-6 md:mx-10 mb-10">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13772.509044190032!2d77.90638915355684!3d30.34733294635578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2bca85431751%3A0x1f09dfefe6b7c064!2ssubcentre%20jhajhra!5e0!3m2!1sen!2sin!4v1745997151064!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}



