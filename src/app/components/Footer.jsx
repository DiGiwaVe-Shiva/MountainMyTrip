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
//                 <a href="/PrivacyPolicy" className="hover:underline">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="/TermsandConditions" className="hover:underline">
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

"use client";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebookF, href: "https://facebook.com", hoverColor: "hover:text-blue-600" },
  { Icon: FaInstagram, href: "https://instagram.com", hoverColor: "hover:text-pink-500" },
  { Icon: FaYoutube, href: "https://youtube.com", hoverColor: "hover:text-red-600" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com", hoverColor: "hover:text-blue-700" },
];


export default function Footer() {
  return (
    <footer className="bg-[#58535359] text-[17px] font-semibold text-gray-800 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start space-y-3">
          <img
            src="/logo3.png"
            width={200}
            height={239}
            alt="MountainMyTrip Logo"
          />

          <p className="text-[16px] leading-relaxed">
            Conquer the Himalayan Heights on a Budget with MountainMyTrip!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-[19px] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[17px]">
            {[
              { label: "Treks", href: "#" },
              { label: "Stays with us", href: "/StaysWithUs" },
              { label: "Careers", href: "/Careers" },
              { label: "Team", href: "/Team" },
              { label: "Privacy Policy", href: "/PrivacyPolicy" },
              { label: "Terms and Conditions", href: "/TermsandConditions" },
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-[19px] mb-4">Contact Us</h3>
          <ul className="space-y-2 text-[17px]">
            <li>
              <a
                href="mailto:info@mountainmytrip.com"
                className="hover:underline"
              >
                info@mountainmytrip.com
              </a>
            </li>
            <li>
              <a href="tel:+916239092532" className="hover:underline">
                +91-6239092532
              </a>
              <br />
            
              <a href="tel:+917466028080" className="hover:underline">
                +91-7466028080
              </a>
            </li>
          </ul>
        </div>

        
        {/* <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-white transition duration-200"
                >
                  <Icon size={28} />
                </a>
              )
            )}
          </div>
        </div> */}

      <div>
      <h3 className="font-bold text-[19px] mb-4">Follow Us</h3>
      <div className="flex space-x-4 mt-2">
        {socialLinks.map(({ Icon, href, hoverColor }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-700 ${hoverColor} transition duration-200`}
          >
            <Icon size={28} />
          </a>
        ))}
      </div>
    </div>
    </div>

      {/* Copyright */}
      <div className="border-t mt-10 pt-4 text-center text-[17px] text-gray-00">
        © {new Date().getFullYear()} MountainMyTrip. All rights reserved.
      </div>
    </footer>
  );
}
