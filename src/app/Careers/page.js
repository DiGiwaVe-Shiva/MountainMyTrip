// // "use client";
// // import { useState } from "react";
// // import { IoMdClose } from "react-icons/io";

// // export default function CareerSection() {
// //   const [isOpen, setIsOpen] = useState(true); // Modal open by default

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     resume: null,
// //   });

// //   const handleChange = (e) => {
// //     if (e.target.name === "resume") {
// //       setFormData({ ...formData, resume: e.target.files[0] });
// //     } else {
// //       setFormData({ ...formData, [e.target.name]: e.target.value });
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { name, email, phone } = formData;

// //     const message = `Hello, I'm applying for a job.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n(Resume uploaded separately)`;
// //     const whatsappNumber = "+91-6239092532";
// //     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

// //     window.open(url, "_blank");
// //     setIsOpen(false);
// //     setFormData({ name: "", email: "", phone: "", resume: null });
// //   };

// //   return (
// //     <div className="p-4 mt-24 sm:p-6 md:p-10">
// //       {/* Modal */}
// //       {isOpen && (
// //         <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">
// //           <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative">
// //             {/* Close Button */}
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// //             >
// //               <IoMdClose size={24} />
// //             </button>

// //             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
// //               Apply for a Job
// //             </h2>

// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
// //               />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
// //               />

// //               <input
// //                 type="file"
// //                 name="resume"
// //                 accept=".pdf,.doc,.docx"
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
// //               />

// //               <button
// //                 type="submit"
// //                 className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
// //               >
// //                 Submit Application
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   FaRegClock,
//   FaUsers,
//   FaUndo,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";

// [formData, setFormData] = useState({
//   name: "",
//   gender: "",
//   email: "",
//   phone: "",
//   position: "",
//   experience: "",
//   message: "",
//   resumeName: "",
// });

// const handleChange = (e) => {
//   const { name, value, files } = e.target;
//   if (name === "resume") {
//     setFormData((prev) => ({
//       ...prev,
//       resumeName: files[0]?.name || "",
//     }));
//   } else {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   }
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const { name, gender, email, phone, message, position, experience, resumeName } = formData;
//   const phoneRegex = /^[6-9]\d{9}$/;
//   if (!phoneRegex.test(phone)) {
//     alert("Please enter a valid 10-digit Indian phone number.");
//     return;
//   }

//   if (!name.trim() || !gender || !position || !experience || !message) {
//     alert("Please fill out all required fields.");
//     return;
//   }

//   const whatsappMessage = `*New Career Application* 🚀

// *Name:* ${name}
// *Gender:* ${gender}
// *Phone:* ${phone}
// ${email ? `*Email:* ${email}\n` : ""}
// *Position Applied:* ${position}
// *Experience:* ${experience} year(s)
// *Why a Good Fit:* ${message}
// *Resume:* ${resumeName || "Not Uploaded"}

// 📌 Please review and follow up.`;

//   const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(whatsappMessage)}`;
//   window.open(whatsappURL, "_blank");
// };


// export default function UttarakhandTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     setOpenIndex((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, phone, email, tripName, travellers } = formData;

//     // Phone validation: Indian 10-digit starting from 6–9
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//       alert("Please enter a valid 10-digit Indian phone number.");
//       return;
//     }

//     if (!name.trim()) {
//       alert("Please enter your full name.");
//       return;
//     }

//     if (!travellers || isNaN(travellers) || Number(travellers) <= 0) {
//       alert("Please enter a valid number of travellers.");
//       return;
//     }

//     const message = `*New Trek Booking Request* 🏔️✨

// *Name:* ${name}
// *Phone:* ${phone}
// ${email ? `*Email:* ${email}\n` : ""}
// *Trip:* ${tripName}
// *No. of Travellers:* ${travellers}

// 📌 Please follow up for confirmation and details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`; // Replace with your WhatsApp number
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{
//           backgroundImage: "url('deal112.webp')",
//         }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-4xl sm:text-5xl text-white  font-extrabold drop-shadow-lg">  Careers at Mountain My Trip</h1>
//           <h3 className="text-lg font-medium text-white mt-4"></h3>
//         </div>
//       </div>

//       {/* Main Content + Booking Form */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-4">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Left Content */}
//           <div className="flex-1">
            
//             <h2 className="text-2xl md:text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
//             Join the Journey – Careers at Mountain My Trip
//             </h2>

//             <p className="text-gray-600 mb-4">
              // At Mountain My Trip, our journey isn’t just about reaching the
              // summit—it's about everything along the way. We are a passionate
              // team of explorers, storytellers, and travel professionals
              // committed to helping people experience the raw beauty of the
              // mountains through guided treks, curated experiences, and
              // personalized adventures. Working with us means you're not just
              // doing a job—you're becoming a part of something meaningful. Every
              // day, we help travelers connect with nature, push their limits, and
              // return home with unforgettable memories. Whether you're leading a
              // trek through snow-capped peaks or helping a traveler plan their
              // first mountain adventure, your work directly impacts lives.
              // ultimate destination for unforgettable trekking adventures.
//             </p>
            
//             <h3 className="text-3xl md:text-2xl sm:text-4xl font-semibold text-gray-800 mb-4">
//             Here's what makes us different:
//             </h3>
//             <p className="text-gray-600 mb-4">
//               <b>Adventure-Focused Work Culture </b>: We live for the trails, the
//               outdoors, and the thrill of new journeys.
//               <br></br>
//               <b>Hands-On Learning</b>: Grow with real-world experience in tourism,
//               operations, digital marketing, and trek planning.
//               <br></br>
//               <b>Work That Matters</b>: Help people step outside their comfort zones
//               and connect with the great outdoors.
//               <br></br>
//               <b>Community & Sustainability</b>: We care deeply about the environment
//               and local communities and work to promote responsible tourism.
//             </p>
//           </div>

//           {/* <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//             <div className="sticky top-24">
//               <div className="bg-white shadow-lg rounded-2xl p-6 border">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                   Book Now
//                 </h3>

//                 <form onSubmit={handleSubmit} className="space-y-3">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     pattern="^[A-Za-z\s]+$"
//                     title="Please enter letters and spaces only"
//                     className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email (optional)"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <input
//                     type="text"
//                     name="tripName"
//                     value={formData.tripName}
//                     readOnly
//                     className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//                   />
//                   <input
//                     type="number"
//                     name="travellers"
//                     placeholder="No. of Travellers"
//                     value={formData.travellers}
//                     onChange={handleChange}
//                     required
//                     min="1"
//                     className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//                   >
//                     Send Booking via WhatsApp
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div> */}
//            <div className="w-full max-w-2xl mx-auto md:py-12 bg-white border border-orange-500 rounded-2xl p-6 shadow-none mt-10">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//         Join the Team – Apply Now
//       </h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-400"
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Non-binary">Non-binary</option>
//           <option value="Prefer not to say">Prefer not to say</option>
//         </select>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email (optional)"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <textarea
//           name="message"
//           placeholder="What makes you a good fit for our team?"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           rows={4}
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <select
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-400"
//         >
//           <option value="">Which position(s) are you interested in?</option>
//           <option value="Trek Leader">Trek Leader</option>
//           <option value="Marketing">Marketing</option>
//           <option value="Support Staff">Support Staff</option>
//           <option value="Operations">Operations</option>
//           <option value="Other">Other</option>
//         </select>

//         <input
//           type="number"
//           name="experience"
//           placeholder="How many years of experience do you have?"
//           value={formData.experience}
//           onChange={handleChange}
//           required
//           min="0"
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <input
//           type="file"
//           name="resume"
//           accept=".pdf,.doc,.docx"
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 text-gray-600"
//         />

//         <button
//           type="submit"
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
//         >
//           Send Application via WhatsApp
//         </button>
//       </form>
//     </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaRegClock,
  FaUsers,
  FaUndo,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function UttarakhandTrek() {
  const [openIndex, setOpenIndex] = useState([]);

  // Booking form state
  const [bookingFormData, setBookingFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "",
    travellers: "",
  });

  // Career form state
  const [careerFormData, setCareerFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resumeName: "",
  });

  // Accordion toggle (if used elsewhere)
  const toggleAccordion = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Booking form handlers
  const handleBookingChange = (e) => {
    setBookingFormData({ ...bookingFormData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, tripName, travellers } = bookingFormData;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!travellers || isNaN(travellers) || Number(travellers) <= 0) {
      alert("Please enter a valid number of travellers.");
      return;
    }

    const message = `*New Trek Booking Request* 🏔️✨

*Name:* ${name}
*Phone:* ${phone}
${email ? `*Email:* ${email}\n` : ""}
*Trip:* ${tripName}
*No. of Travellers:* ${travellers}

📌 Please follow up for confirmation and details.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  // Career form handlers
  const handleCareerChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setCareerFormData((prev) => ({
        ...prev,
        resumeName: files[0]?.name || "",
      }));
    } else {
      setCareerFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    const { name, gender, email, phone, position, experience, message, resumeName } = careerFormData;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    if (!name.trim() || !gender || !position || !experience || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    const whatsappMessage = `*New Career Application* 🚀

*Name:* ${name}
*Gender:* ${gender}
*Phone:* ${phone}
${email ? `*Email:* ${email}\n` : ""}
*Position Applied:* ${position}
*Experience:* ${experience} year(s)
*Why a Good Fit:* ${message}
*Resume:* ${resumeName || "Not Uploaded"}

📌 Please review and follow up.`;

    const whatsappURL = `https://wa.me/916239092532?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('deal112.webp')" }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl text-white font-extrabold drop-shadow-lg">
            Careers at Mountain My Trip
          </h1>
        </div>
      </div>

      {/* Main Content + Forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Join the Journey – Careers at Mountain My Trip
            </h2>

            <p className="text-gray-600 mb-4">
              {/* At Mountain My Trip, our journey isn’t just about reaching the
              summit—it's about everything along the way... */}
               At Mountain My Trip, our journey isn’t just about reaching the
              summit—it's about everything along the way. We are a passionate
              team of explorers, storytellers, and travel professionals
              committed to helping people experience the raw beauty of the
              mountains through guided treks, curated experiences, and
              personalized adventures. Working with us means you're not just
              doing a job—you're becoming a part of something meaningful. Every
              day, we help travelers connect with nature, push their limits, and
              return home with unforgettable memories. Whether you're leading a
              trek through snow-capped peaks or helping a traveler plan their
              first mountain adventure, your work directly impacts lives.
              ultimate destination for unforgettable trekking adventures.
            </p>

            <h3 className="text-3xl md:text-2xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Here's what makes us different:
            </h3>

            <p className="text-gray-600 mb-4">
              <b>Adventure-Focused Work Culture</b>: We live for the trails...<br />
              <b>Hands-On Learning</b>: Grow with real-world experience...<br />
              <b>Work That Matters</b>: Help people step outside their comfort zones...<br />
              <b>Community & Sustainability</b>: We care deeply about the environment...
            </p>
          </div>

          {/* Career Application Form */}
          <div className="w-full max-w-2xl mx-auto md:py-12 bg-white border border-orange-500 rounded-2xl p-6 shadow-none mt-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Join the Team – Apply Now
            </h3>

            <form onSubmit={handleCareerSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={careerFormData.name}
                onChange={handleCareerChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />

              <select
                name="gender"
                value={careerFormData.gender}
                onChange={handleCareerChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>

              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={careerFormData.email}
                onChange={handleCareerChange}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={careerFormData.phone}
                onChange={handleCareerChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                name="message"
                placeholder="What makes you a good fit for our team?"
                value={careerFormData.message}
                onChange={handleCareerChange}
                required
                rows={4}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />

              <select
                name="position"
                value={careerFormData.position}
                onChange={handleCareerChange}
                required
                className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Which position(s) are you interested in?</option>
                <option value="Trek Leader">Trek Leader</option>
                <option value="Marketing">Marketing</option>
                <option value="Support Staff">Support Staff</option>
                <option value="Operations">Operations</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="number"
                name="experience"
                placeholder="How many years of experience do you have?"
                value={careerFormData.experience}
                onChange={handleCareerChange}
                required
                min="0"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleCareerChange}
                className="w-full border rounded-lg px-4 py-2 text-gray-600"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
              >
                Send Application via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}




// "use client";

// import { useState } from "react";

// export default function CareerApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     gender: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     message: "",
//     resumeName: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "resume") {
//       setFormData((prev) => ({
//         ...prev,
//         resumeName: files[0]?.name || "",
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, gender, email, phone, message, position, experience, resumeName } = formData;
//     const phoneRegex = /^[6-9]\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//       alert("Please enter a valid 10-digit Indian phone number.");
//       return;
//     }

//     if (!name.trim() || !gender || !position || !experience || !message) {
//       alert("Please fill out all required fields.");
//       return;
//     }

//     const whatsappMessage = `*New Career Application* 🚀

// *Name:* ${name}
// *Gender:* ${gender}
// *Phone:* ${phone}
// ${email ? `*Email:* ${email}\n` : ""}
// *Position Applied:* ${position}
// *Experience:* ${experience} year(s)
// *Why a Good Fit:* ${message}
// *Resume:* ${resumeName || "Not Uploaded"}

// 📌 Please review and follow up.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(whatsappMessage)}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto md:py-12 bg-white border border-orange-500 rounded-2xl p-6 shadow-none mt-10">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//         Join the Team – Apply Now
//       </h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-400"
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Non-binary">Non-binary</option>
//           <option value="Prefer not to say">Prefer not to say</option>
//         </select>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email (optional)"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <textarea
//           name="message"
//           placeholder="What makes you a good fit for our team?"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           rows={4}
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <select
//           name="position"
//           value={formData.position}
//           onChange={handleChange}
//           required
//           className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:ring-2 focus:ring-orange-400"
//         >
//           <option value="">Which position(s) are you interested in?</option>
//           <option value="Trek Leader">Trek Leader</option>
//           <option value="Marketing">Marketing</option>
//           <option value="Support Staff">Support Staff</option>
//           <option value="Operations">Operations</option>
//           <option value="Other">Other</option>
//         </select>

//         <input
//           type="number"
//           name="experience"
//           placeholder="How many years of experience do you have?"
//           value={formData.experience}
//           onChange={handleChange}
//           required
//           min="0"
//           className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//         />

//         <input
//           type="file"
//           name="resume"
//           accept=".pdf,.doc,.docx"
//           onChange={handleChange}
//           className="w-full border rounded-lg px-4 py-2 text-gray-600"
//         />

//         <button
//           type="submit"
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
//         >
//           Send Application via WhatsApp
//         </button>
//       </form>
//     </div>
//   );
// }

