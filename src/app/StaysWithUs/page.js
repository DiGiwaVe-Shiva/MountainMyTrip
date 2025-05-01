// "use client";

// import React from "react";
// export default function NagTibbaTrek() {
//     const [openIndex, setOpenIndex] = useState([]);
//     const [formData, setFormData] = useState({
//       name: "",
//       phone: "",
//       email: "",
//       tripName: "Nag Tibba Weekend Trek – Quick Himalayan Getaway",
//       travellers: "",
//     });

// const toggleAccordion = (index) => {
//   setOpenIndex((prev) =>
//     prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//   );
// };

// const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const message = `*New Trip Booking Request* 🏕️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//   const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//     message
//   )}`;
//   window.open(whatsappURL, "_blank");
// };

// const stays = [
//   {
//     title: "Scenic Homestays",
//     description:
//       "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Cozy rooms, warm hospitality, and stunning views await.",
//     image: "deal99.jpg",
//   },
//   {
//     title: "Adventure Camps",
//     description:
//       "Experience the thrill of camping under the stars with all modern amenities. Our camps are located at safe and scenic spots ideal for trekkers and explorers.",
//     image: "/deal100.jpg",
//   },
//   {
//     title: "Eco Resorts",
//     description:
//       "Stay close to nature in our eco-resorts that blend comfort with sustainability. Perfect for travelers looking for a mindful and rejuvenating stay.",
//     image: "/deal102.jpg",
//   },
//   {
//     title: "Heritage Guesthouses",
//     description:
//       "Relive history in our traditional guesthouses offering rustic charm with modern comforts. Ideal for cultural explorers and history lovers.",
//     image: "/deal101.jpg",
//   },
// ];

// const StaysWithUs = () => {
//   return (
    // <>
    //   <div className="bg-white text-gray-800">
    //     {/* <section className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/stays/hero-stay.jpg')" }}>
    //     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    //       <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
    //         Stays With Us
    //       </h1>
    //     </div>
    //   </section> */}
    //     <div
    //       className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
    //       style={{ backgroundImage: "url('deal97.webp')" }}
    //     >
    //       <div className="bg-opacity-50 p-12 rounded-xl">
    //         <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
    //           Stays With Us
    //         </h1>
    //       </div>
    //     </div>

    //     {/* Intro */}
    //     <section className="max-w-6xl mx-auto px-4 py-12 text-center">
    //       <h2 className="text-3xl font-bold mb-4">Comfort Meets Adventure</h2>
    //       <p className="text-gray-600 text-lg">
    //         Whether you crave cozy comfort or rugged adventure, MountainMyTrip
    //         offers curated accommodations to match every explorer’s spirit.
    //       </p>
    //     </section>

    //     {/* Stays Grid */}
    //     <section className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 pb-16">
    //       {stays.map((stay, idx) => (
    //         <div
    //           key={idx}
    //           className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
    //         >
    //           <img
    //             src={stay.image}
    //             alt={stay.title}
    //             className="w-full h-60 object-cover"
    //           />
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold text-gray-800 mb-2">
    //               {stay.title}
    //             </h3>
    //             <p className="text-gray-600">{stay.description}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </section>

    //     {/* CTA Section */}
    //     <section className="bg-orange-100 py-12 text-center px-4">
    //       <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
    //         Ready to Book Your Stay?
    //       </h2>
    //       <p className="text-gray-700 mb-6">
    //         Let us help you find the perfect place to relax after your trek.
    //         Comfortable, scenic, and unforgettable.
    //       </p>
    //       <a
    //         href="/contact"
    //         className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
    //       >
    //         Contact Us Now
    //       </a>
    //     </section>

    //     <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
    //       <div className="sticky top-24">
    //         <div className="bg-white shadow-lg rounded-2xl p-6 border">
    //           <h3 className="text-lg font-semibold text-gray-800 mb-1">
    //             Book Your Trek Today
    //           </h3>
    //           <div className="text-sm text-green-600 font-bold mb-2">
    //             Weekend Departure Available
    //           </div>
    //           <div className="text-xl font-bold text-red-600 mb-4">
    //             Starting From: <span className="text-gray-600">₹2,499</span>/Per
    //             Person
    //           </div>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email (optional)"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="text"
//                   name="tripName"
//                   value={formData.tripName}
//                   readOnly
//                   className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="number"
//                   name="travellers"
//                   placeholder="No. of Travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//                 >
//                   Send Booking via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StaysWithUs;

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
// const stays = [
//     {
//       title: "Scenic Homestays",
//       description:
//         "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Cozy rooms, warm hospitality, and stunning views await.",
//       image: "deal99.jpg",
//     },
//     {
//       title: "Adventure Camps",
//       description:
//         "Experience the thrill of camping under the stars with all modern amenities. Our camps are located at safe and scenic spots ideal for trekkers and explorers.",
//       image: "/deal100.jpg",
//     },
//     {
//       title: "Eco Resorts",
//       description:
//         "Stay close to nature in our eco-resorts that blend comfort with sustainability. Perfect for travelers looking for a mindful and rejuvenating stay.",
//       image: "/deal102.jpg",
//     },
//     {
//       title: "Heritage Guesthouses",
//       description:
//         "Relive history in our traditional guesthouses offering rustic charm with modern comforts. Ideal for cultural explorers and history lovers.",
//       image: "/deal101.jpg",
//     },
//   ];



// export default function NagTibbaTrek() {
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
//     const message = `*New Trip Booking Request* 🏕️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
    
//     <div className="bg-white text-gray-800">
//         {/* <section className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/stays/hero-stay.jpg')" }}>
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
//             Stays With Us
//           </h1>
//         </div>
//       </section> */}
//         <div
//           className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//           style={{ backgroundImage: "url('deal97.webp')" }}
//         >
//           <div className="bg-opacity-50 p-12 rounded-xl">
//             <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//               Stays With Us
//             </h1>
//           </div>
//         </div>
//         </div>
    

//         {/* Intro */}
//         <section className="max-w-6xl mx-auto px-4 py-12 text-center">
//           <h2 className="text-3xl font-bold mb-4">Comfort Meets Adventure</h2>
//           <p className="text-gray-600 text-lg">
//             Whether you crave cozy comfort or rugged adventure, MountainMyTrip
//             offers curated accommodations to match every explorer’s spirit.
//           </p>
//         </section>

//         {/* Stays Grid */}
//         <section className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 pb-16">
//           {stays.map((stay, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300"
//             >
//               <img
//                 src={stay.image}
//                 alt={stay.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {stay.title}
//                 </h3>
//                 <p className="text-gray-600">{stay.description}</p>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* CTA Section */}
//         <section className="bg-orange-100 py-12 text-center px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
//             Ready to Book Your Stay?
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Let us help you find the perfect place to relax after your trek.
//             Comfortable, scenic, and unforgettable.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
//           >
//             Contact Us Now
//           </a>
//         </section>

//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Trek Today
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Weekend Departure Available
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹2,499</span>/Per
//                 Person
//               </div>
//               </div>
//               </div>
//               </div>
      
//       {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           {[1, 2, 3, 4].map(
//             (i) =>
//               i % 2 === 1 && (
//                 <div className="flex gap-2" key={i}>
//                   {[i, i + 1].map(
//                     (j) =>
//                       destinations[j] && (
//                         <div
//                           key={j}
//                           className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
//                         >
//                           <Image
//                             src={destinations[j].src}
//                             alt={`Nag Tibba Trek ${j + 1}`}
//                             fill
//                             className="object-cover"
//                             sizes="50vw"
//                           />
//                         </div>
//                       )
//                   )}
//                 </div>
//               )
//           )}
//         </div>

//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
//                 item.gridClass || ""
//               }`}
//             >
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image
//                   src={item.src}
//                   alt={`Nag Tibba Trek ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section> */}


//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         {/* Left Section */}
//         {/* <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             NAG TIBBA WEEKEND TREK – QUICK HIMALAYAN GETAWAY
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />1 Night 2 Days
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               Easy & Beginner Friendly
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               Free Cancellation: Upto 5 Days
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Trek
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Nag Tibba Trek is a perfect weekend adventure for beginners and
//             nature lovers. Located near Mussoorie, it offers dense forests, open
//             meadows, and a summit with breathtaking views of Swargarohini,
//             Bandarpoonch, and Kedarnath peaks.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Quick weekend escape into the Himalayas</li>
//             <li>Stunning summit views of Himalayan ranges</li>
//             <li>Ideal for beginners and first-time trekkers</li>
//             <li>Scenic drive through Mussoorie and Pantwari</li>
//             <li>Experience camping under the stars</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transport from/to Dehradun</li>
//               <li>Accommodation in tents</li>
//               <li>All meals during the trek</li>
//               <li>Local guide and trek leader</li>
//               <li>Permits and medical assistance</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Any personal items or gear</li>
//               <li>Insurance or emergency costs</li>
//               <li>Porters for personal bags</li>
//               <li>Snacks or beverages</li>
//               <li>Anything not mentioned above</li>
//             </ul>
//           </div>

//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Itinerary
//             </h2>
//             <button
//               onClick={() =>
//                 setOpenIndex(
//                   openIndex.length === itinerary.length
//                     ? []
//                     : itinerary.map((_, i) => i)
//                 )
//               }
//               className="mb-4 text-orange-600 font-medium hover:underline"
//             >
//               {openIndex.length === itinerary.length ? "Close All" : "Open All"}
//             </button>

//             <div className="flex flex-col gap-4">
//               {itinerary.map((item, index) => {
//                 const isOpen = openIndex.includes(index);
//                 return (
//                   <div
//                     key={index}
//                     className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
//                   >
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full px-4 py-4 flex justify-between rounded-xl  items-center hover:bg-gray-100"
//                     >
//                       <span className="text-base md:text-lg font-semibold text-gray-800">
//                         {item.title}
//                       </span>
//                       {isOpen ? (
//                         <FaChevronUp className="text-orange-500" />
//                       ) : (
//                         <FaChevronDown className="text-orange-500" />
//                       )}
//                     </button>
//                     {isOpen && (
//                       <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
//                         {item.content}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div> */}

//         {/* Right Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Trek Today
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Weekend Departure Available
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹2,499</span>/Per
//                 Person
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email (optional)"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="text"
//                   name="tripName"
//                   value={formData.tripName}
//                   readOnly
//                   className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="number"
//                   name="travellers"
//                   placeholder="No. of Travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//                 >
//                   Send Booking via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
        
        
//         </section>
//         </>
//   )
// };



// "use client";

// import React, { useState } from "react";
// import HimTrek from "../components/HimTrek";

// const StayWithUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     daysoftravel: "",
//     travellers: "",
//   });

//   const stays = [
//     {
//       title: "Scenic Homestays",
//       description:
//         "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Cozy rooms, warm hospitality, and stunning views await.",
//       image: "/deal99.jpg",
//     },
//     {
//       title: "Adventure Camps",
//       description:
//         "Experience the thrill of camping under the stars with all modern amenities. Our camps are located at safe and scenic spots ideal for trekkers and explorers.",
//       image: "/deal100.jpg",
//     },
//     {
//       title: "Eco Resorts",
//       description:
//         "Stay close to nature in our eco-resorts that blend comfort with sustainability. Perfect for travelers looking for a mindful and rejuvenating stay.",
//       image: "/deal102.jpg",
//     },
//     {
//       title: "Heritage Guesthouses",
//       description:
//         "Relive history in our traditional guesthouses offering rustic charm with modern comforts. Ideal for cultural explorers and history lovers.",
//       image: "/deal101.jpg",
//     },
//   ];

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🏕️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.daysoftravel}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <div
//         className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('/deal97.webp')" }}
//       >
//         <div className=" bg-opacity-50 p-10 rounded-xl">
//           <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
//             Stay With Us
//           </h1>
//         </div>
//       </div>

//       {/* Intro Section */}
//       <section className="max-w-6xl mx-auto px-4 py-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Comfort Meets Adventure</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Whether you crave cozy comfort or rugged adventure, MountainMyTrip
//           offers curated accommodations to match every explorer’s spirit.
//         </p>
//       </section>

//       {/* Main Grid Section */}
//       <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Left: Stay Cards */}
//         <div className="lg:col-span-2 space-y-8">
//           {stays.map((stay, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
//             >
//               <img
//                 src={stay.image}
//                 alt={stay.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {stay.title}
//                 </h3>
//                 <p className="text-gray-600">{stay.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right: Booking Form */}
//         <div className="w-full">
//           <div className="lg:sticky lg:top-24">
//             <div className="bg-white shadow-xl rounded-2xl p-8 border h-full flex flex-col justify-between">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   Book Now
//                 </h3>
//                 <p className="text-sm text-green-600 font-medium mb-4">
//                   Weekend Departures Available
//                 </p>
//                 <div className="text-lg font-bold text-red-600 mb-6">
//                   Starting From:{" "}
//                   <span className="text-gray-800">₹2,499</span> / Person
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email (optional)"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <input
//                     type="text"
//                     name="tripName"
//                     readOnly
//                     value={formData.daysoftravel}
//                     className="w-full border bg-gray-100 text-gray-600 rounded-lg px-4 py-3"
//                   />
//                   <input
//                     type="number"
//                     name="travellers"
//                     placeholder="No. of Travellers"
//                     value={formData.travellers}
//                     onChange={handleChange}
//                     required
//                     className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
//                   >
//                     Send Booking via WhatsApp
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

    
//       <HimTrek/>
//     </div>
//   );
// };

// export default StayWithUs;


"use client";

import React, { useState } from "react";
import HimTrek from "../components/HimTrek";

const StayWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    daysoftravel: "",
    travellers: "",
  });

  const stays = [
    {
      title: "Scenic Homestays",
      description:
        "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Cozy rooms, warm hospitality, and stunning views await.",
      image: "/deal99.jpg",
    },
    {
      title: "Adventure Camps",
      description:
        "Experience the thrill of camping under the stars with all modern amenities. Our camps are located at safe and scenic spots ideal for trekkers and explorers.",
      image: "/deal100.jpg",
    },
    {
      title: "Eco Resorts",
      description:
        "Stay close to nature in our eco-resorts that blend comfort with sustainability. Perfect for travelers looking for a mindful and rejuvenating stay.",
      image: "/deal102.jpg",
    },
    {
      title: "Heritage Guesthouses",
      description:
        "Relive history in our traditional guesthouses offering rustic charm with modern comforts. Ideal for cultural explorers and history lovers.",
      image: "/deal101.jpg",
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Stay Inquiry* 🏕️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ""}
*Days of Travel / Trip Plan:* ${formData.daysoftravel}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and more details.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/deal97.webp')" }}
      >
        <div className=" bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Stay With Us
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Comfort Meets Adventure</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're seeking cozy relaxation or an adrenaline-packed getaway,
          MountainMyTrip offers handpicked accommodations that elevate your Himalayan experience.
        </p>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Stay Cards */}
        <div className="lg:col-span-2 space-y-8">
          {stays.map((stay, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{stay.title}</h3>
                <p className="text-gray-600">{stay.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="w-full">
          <div className="lg:sticky lg:top-24">
            <div className="bg-white shadow-xl rounded-2xl p-8 border h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Book Your Stay</h3>
                <p className="text-sm text-green-600 font-medium mb-4">
                  Weekend Departures Available
                </p>
                <div className="text-lg font-bold text-red-600 mb-6">
                  Starting From:{" "}
                  <span className="text-gray-800">₹2,499</span> 
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (optional)"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="text"
                    name="daysoftravel"
                    placeholder="Days of Travel / Trip Name"
                    value={formData.daysoftravel}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="number"
                    name="travellers"
                    placeholder="Number of Travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
                  >
                    Send Booking via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* <section className="bg-orange-100 py-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Ready to Book Your Stay?
        </h2>
        <p className="text-gray-700 mb-6">
          Let us help you find the perfect place to relax after your trek—scenic, cozy, and unforgettable.
        </p>
        <a
          href="/contact"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
        >
          Contact Us Now
        </a>
      </section> */}
      <HimTrek/>
    </div>
  );
};

export default StayWithUs;





// "use client";

// import React, { useState } from "react";
// import HimTrek from "../components/HimTrek";

// const StaysWithUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "staywithus",
//     travellers: "",
//   });

//   const stays = [
//     {
//       title: "Scenic Homestays",
//       description:
//         "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Cozy rooms, warm hospitality, and stunning views await.",
//       image: "/deal99.jpg",
//     },
//     {
//       title: "Adventure Camps",
//       description:
//         "Experience the thrill of camping under the stars with all modern amenities. Our camps are located at safe and scenic spots ideal for trekkers and explorers.",
//       image: "/deal100.jpg",
//     },
//     {
//       title: "Eco Resorts",
//       description:
//         "Stay close to nature in our eco-resorts that blend comfort with sustainability. Perfect for travelers looking for a mindful and rejuvenating stay.",
//       image: "/deal102.jpg",
//     },
//     {
//       title: "Heritage Guesthouses",
//       description:
//         "Relive history in our traditional guesthouses offering rustic charm with modern comforts. Ideal for cultural explorers and history lovers.",
//       image: "/deal101.jpg",
//     },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🏕️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('/deal97.webp')" }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Stays With Us
//           </h1>
//         </div>
//       </div>

//       {/* Intro */}
//       <section className="max-w-6xl mx-auto px-4 py-12 text-center">
//         <h2 className="text-3xl font-bold mb-4">Comfort Meets Adventure</h2>
//         <p className="text-gray-600 text-lg">
//           Whether you crave cozy comfort or rugged adventure, MountainMyTrip
//           offers curated accommodations to match every explorer’s spirit.
//         </p>
//       </section>

//       {/* Grid Layout: Left (Cards) - Right (Form) */}
//       <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* Left: Stay Cards */}
//         <div className="lg:col-span-2 space-y-8">
//           {stays.map((stay, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
//             >
//               <img
//                 src={stay.image}
//                 alt={stay.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {stay.title}
//                 </h3>
//                 <p className="text-gray-600">{stay.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right: Sticky Booking Form */}
//         <div className="w-full ">
//           <div className="lg:sticky lg:top-24">
//             <div className="bg-white shadow-xl rounded-2xl p-6 border">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Trek Today
//               </h3>
//               <div className="text-sm text-green-600 font-bold mb-2">
//                 Weekend Departure Available
//               </div>
//               <div className="text-xl font-bold text-red-600 mb-4">
//                 Starting From: <span className="text-gray-600">₹2,499</span>/Per
//                 Person
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email (optional)"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="text"
//                   name="tripName"
//                   value={formData.tripName}
//                   readOnly
//                   className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="number"
//                   name="travellers"
//                   placeholder="No. of Travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//                 >
//                   Send Booking via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       {/* <section className="bg-orange-100 py-12 text-center px-4">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
//           Ready to Book Your Stay?
//         </h2>
//         <p className="text-gray-700 mb-6">
//           Let us help you find the perfect place to relax after your trek.
//           Comfortable, scenic, and unforgettable.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
//         >
//           Contact Us Now
//         </a>
//       </section> */}
//        <HimTrek />
//     </div>
//   );
// };

// export default StaysWithUs;
