// "use client";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <>
//       <footer className="bg-[#393849] text-gray-200 py-8 px-6 md:px-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//           {/* Logo & Description */}
//           <div className="flex flex-col items-start">
//             <img
//                src="/logo2.png"
//                width={140}
//                height={10}
//               className="w-32 text-white"
//             />
//             <p className="text-sm ">
//               Conquer the Himalayan Heights on a Budget with MountainMyTrip!
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="#" className="hover:underline">
//                   Treks
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                 Stays with us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="/Team" className="hover:underline">
//                   Team
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">
//                   Terms and Conditions
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="mailto:info@himaliyemytrip.com">
//                   info@MountainMytrip.com
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+ 916239092532">+91-6239092532</a>
//                 <br></br>
//                 <a href="tel:+ 7466028080">+91-7466028080</a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="mx-2  font-semibold text-lg mb-2">Follow Us</h3>
//             <div className="flex space-x-4  mt-2">
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF size={30} className="text-gray-300" />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram size={30} className="text-gray-300" />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaYoutube size={30} className="text-gray-300" />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedinIn size={30} className="text-gray-300" />
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* <div className="sticky top-16 z-50 flex px-4 justify-center pr-2 py-1">
//         <a
//           href="https://wa.me/9837218345"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-left  gap-2 bg-white text-blue-700 px-4 py-1 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
//           title="Chat with us on WhatsApp"
//         >
//           <h1 className="font-medium">Click Now</h1>
//         </a>
//       </div> */}
//         {/* <div className="sticky top-16 z-50 flex justify-start mt-6  md:justify-center px-4">
//           <a
//             href="https://wa.me/6239092532"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2  bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#847ce0] hover:text-white transition-all duration-300 ease-in-out"
//             title="Chat with us on WhatsApp"
//           >
//             <h1 className="font-medium text-sm md:text-base">Click Now</h1>
//           </a>
//         </div> */}

//         {/* Copyright */}
//         <div className="border-t mt-10 pt-4 text-center text-sm text-gray-400">
//           © Copyright MountainMyTrip {new Date().getFullYear()}
//         </div>
//         {/* <div className="sticky  top-20 z-50 flex px-4 justify-center pr-2 py-2">
//         <a
//           href="https://wa.me/9837218345"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-left  gap-2 bg-white text-blue-700 px-4 py-1 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
//           title="Chat with us on WhatsApp"
//         >
//           <h1 className="font-medium">Click Now</h1>
//         </a>
//       </div> */}
//       </footer>
//       {/* <div className="sticky  top-20 z-50 flex px-4 justify-center pr-2 py-4">
//         <a
//           href="https://wa.me/9837218345"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-left border-blue-950 gap-2 bg-gray-400 text-blur-700 px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
//           title="Chat with us on WhatsApp"
//         >
//           <h1 className="font-medium">Click Now</h1>
//         </a>
//       </div> */}
//     </>
//   );
// }

// "use client";
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

// const socialLinks = [
//   { Icon: FaFacebookF, href: "https://facebook.com", hoverColor: "hover:text-blue-600" },
//   { Icon: FaInstagram, href: "https://instagram.com", hoverColor: "hover:text-pink-500" },
//   { Icon: FaYoutube, href: "https://youtube.com", hoverColor: "hover:text-red-600" },
//   { Icon: FaLinkedinIn, href: "https://linkedin.com", hoverColor: "hover:text-blue-700" },
// ];


// export default function Footer() {
//   return (
//     <footer className="bg-[#58535359] text-[16px] font-semibold text-gray-800 py-10 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Logo & Description */}
//         <div className="flex flex-col items-start space-y-3">
//           <img
//             src="/logo3.png"
//             width={200}
//             height={239}
//             alt="MountainMyTrip Logo"
//           />

//           <p className="text-sm leading-relaxed">
//             Conquer the Himalayan Heights on a Budget with MountainMyTrip!
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             {[
//               { label: "Treks", href: "#" },
//               { label: "Stays with us", href: "#" },
//               { label: "Careers", href: "/Careers" },
//               { label: "Team", href: "/Team" },
//               { label: "Privacy Policy", href: "/PrivacyPolicy" },
//               { label: "Terms and Conditions", href: "/TermsandConditions" },
//             ].map((link) => (
//               <li key={link.label}>
//                 <a href={link.href} className="hover:underline">
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a
//                 href="mailto:info@mountainmytrip.com"
//                 className="hover:underline"
//               >
//                 info@mountainmytrip.com
//               </a>
//             </li>
//             <li>
//               <a href="tel:+916239092532" className="hover:underline">
//                 +91-6239092532
//               </a>
//               <br />
//               <a href="tel:+917466028080" className="hover:underline">
//                 +91-7466028080
//               </a>
//             </li>
//           </ul>
//         </div>

        
//         {/* <div>
//           <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
//           <div className="flex space-x-4 mt-2">
//             {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
//               (Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className=" hover:text-white transition duration-200"
//                 >
//                   <Icon size={28} />
//                 </a>
//               )
//             )}
//           </div>
//         </div> */}

//       <div>
//       <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
//       <div className="flex space-x-4 mt-2">
//         {socialLinks.map(({ Icon, href, hoverColor }, index) => (
//           <a
//             key={index}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`text-gray-700 ${hoverColor} transition duration-200`}
//           >
//             <Icon size={28} />
//           </a>
//         ))}
//       </div>
//     </div>
//     </div>

//       {/* Copyright */}
//       <div className="border-t mt-10 pt-4 text-center text-sm text-gray-00">
//         © {new Date().getFullYear()} MountainMyTrip. All rights reserved.
//       </div>
//     </footer>
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
        <div className="bg-black bg-opacity-50 px-4 py-6 sm:px-6 sm:py-10 rounded-xl">
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

