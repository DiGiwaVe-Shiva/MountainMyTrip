// "use client";

// import { useState } from "react";
// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// // install modules
// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [location, setLocation] = useState("");
//   const [checkout, setCheckout] = useState("");
//   const [checkin, setCheckin] = useState("");

//   const slides = [
//     {
//       image: "/deal2.webp",
//       title: "ADVENTUROUS TREK",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/deal4.webp",
//       title: "MOUNTAIN ESCAPE",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/deal5.webp",
//       title: "WILDERNESS RETREAT",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-[100svh]   overflow-hidden">
//       {/* Background Swiper */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop={true}
//           speed={1000}
//           className="h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-6 pt-[18rem]">
//         {/* Title (from first slide since Swiper doesn't expose current index easily) */}
//         <div className="mb-4">
//           <h1 className="text-3xl md:text-5xl font-bold py-1">{slides[0].title}</h1>
//           <p className="text-base md:text-lg py-1">{slides[0].subtitle}</p>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="flex flex-col">
//             <label htmlFor="location" className="text-xs text-gray-500 mb-1">Location</label>
//             <div className="relative">
//               <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="location"
//                 type="text"
//                 placeholder="Where are you going?"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="checkin" className="text-xs text-gray-500 mb-1">Check-In</label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="checkin"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
//                 value={checkin}
//                 onChange={(e) => setCheckin(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="checkout" className="text-xs text-gray-500 mb-1">Check-Out</label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="checkout"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
//                 value={checkout}
//                 onChange={(e) => setCheckout(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex items-end">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full"
//             >
//               <button className="bg-orange-500 text-white px-6 py-3 rounded-md w-full text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
//                 Send
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState();

  // const slides = [
  //   {
  //     image: "/W1A.png",
  //     title: "ADVENTUROUS TREK",
  //     subtitle: "Explore Stunning Hiking Trails in India",
  //   },
  //   {
  //     image: "/deal4.webp",
  //     title: "MOUNTAIN ESCAPE",
  //     subtitle: "Breathe the fresh mountain air",
  //   },
  //   {
  //     image: "/deal5.webp",
  //     title: "WILDERNESS RETREAT",
  //     subtitle: "Reconnect with nature on a thrilling trek",
  //   },
  // ];

//   const uttarakhandOptions = [
//     "Valley of Flowers",
//     "Kedarkantha Trek",
//     "Dodital Trek",
//     "Dayara Bugyal",
//     "Pindari Glacier",
//     "Har Ki Dun",
//   ];

//   const uttaranchalOptions = [
//     "Hampta Pass Trek",
//     "Laka Glacier Trek",
//     "Friendship Peak Trek",

//   ];

//   const handleDropdown = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop={true}
//           speed={1000}
//           className="h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-6 pt-[18rem]">
//         <div className="mb-4">
//           <h1 className="text-3xl md:text-5xl font-bold py-1">{slides[0].title}</h1>
//           <p className="text-base md:text-lg py-1">{slides[0].subtitle}</p>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Dropdown 1 - Uttarakhand */}
//           <div className="flex flex-col relative">
//             <label className="text-xs text-gray-500 mb-1">Uttarakhand</label>
//             <button
//               type="button"
//               onClick={() => handleDropdown("uttarakhand")}
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <span>{location || "Select a trek"}</span>
//               <FaChevronDown />
//             </button>
//             {activeDropdown === "uttarakhand" && (
//               <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-300 w-full rounded shadow z-10">
//                 {uttarakhandOptions.map((option, i) => (
//                   <li
//                     key={i}
//                     onClick={() => {
//                       setLocation(option);
//                       setActiveDropdown(null);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Dropdown 2 - Uttaranchal Pradesh */}
//           <div className="flex flex-col relative">
//             <label className="text-xs text-gray-500 mb-1">Uttaranchal Pradesh</label>
//             <button
//               type="button"
//               onClick={() => handleDropdown("uttaranchal")}
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <span>{location || "Select a trek"}</span>
//               <FaChevronDown />
//             </button>
//             {activeDropdown === "uttaranchal" && (
//               <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-300 w-full rounded shadow z-10">
//                 {uttaranchalOptions.map((option, i) => (
//                   <li
//                     key={i}
//                     onClick={() => {
//                       setLocation(option);
//                       setActiveDropdown(null);
//                     }}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">Travel Date</label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Number of Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">Passengers</label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="md:col-span-4">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200 mt-2">
//                 Send
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState();

//   const uttarakhandLocations = [
//     "Gulabikantha",
//     "DinaraTop",
//     "Brahmatal",
//     "BaliPass",
//     "Dodital",
//     "Harki",
//   ];

//   const uttaranchalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {["/W1A.png", "/deal4.webp", "/deal5.webp"].map((img, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img})` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[18rem]">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2">
//           ADVENTUROUS TREK
//         </h1>
//         <p className="text-base md:text-lg mb-6">
//           Explore Stunning Hiking Trails in India
//         </p>

//         {/* Seekbar-style Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || <span className="text-gray-400">Where are you going?</span>}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 <li className="px-4 py-2 font-semibold text-gray-600">
//                   Uttarakhand
//                 </li>
//                 {uttarakhandLocations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//                 <li className="px-4 py-2 font-semibold text-gray-600">
//                   Uttaranchal Pradesh
//                 </li>
//                 {uttaranchalLocations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <div className="w-full">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200">
//                 Send
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha",
//     "DinaraTop",
//     "Brahmatal",
//     "BaliPass",
//     "Dodital",
//     "Harki",
//     "BaliPass",
//     "Dodital",
//     "Harki",
//   ];

//   const HimachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations =
//     activeTab === "uttarakhand" ? HimachalLocations : HimachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation(""); // Reset location on tab switch
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {["/deal2.webp", "/deal4.webp", "/deal5.webp"].map((img, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img})` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[18rem]">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2">ADVENTUROUS TREK</h1>
//         <p className="text-base md:text-lg mb-6">
//           Explore Stunning Hiking Trails in India
//         </p>
        

//         {/* Tabs */}
//         <div className="flex space-x-2 mb-4">
//           <button
//             onClick={() => switchTab("uttarakhand")}
//             className={`px-4 py-2 rounded-t-md text-sm font-medium ${
//               activeTab === "uttarakhand"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Uttarakhand
//           </button>
//           <button
//             onClick={() => switchTab("Himachal Pradesh")}
//             className={`px-4 py-2 rounded-t-md text-sm font-medium ${
//               activeTab === "Himachal Pradesh"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Himachal Pradesh
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || (
//                   <span className="text-gray-400">Where are you going?</span>
//                 )}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 {locations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <div className="w-full">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200">
//                 Send
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha Trek",
//     "Chardham Trek",
//     "Chopta Tungnath Trek",
//     "Kedarkantha Trek",
//     "Brahmatal Trek",
//     "Dayara Bugyal Trek",
//     "Kuari pass Trek",
//     "BaliPass Trek",
//     "Dodital Trek",
//     "Chandrashila Trek",
//     "Harki Trek",
//     "Dinara Bugyal Trek",
//     "Sarutal Trek",
//     "Vally of Flowers Trek",
//   ];

//   const himachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations = activeTab === "uttarakhand" ? uttarakhandLocations : himachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation("");
//     setActiveDropdown(null);
//   };

//   const slides = [
//     {
//       image: "/W1A.png",
//       title: "ADVENTUROUS TREK",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/deal4.webp",
//       title: "MOUNTAIN ESCAPE",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/deal5.webp",
//       title: "WILDERNESS RETREAT",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       <Swiper
//         modules={[EffectFade, Autoplay]}
//         effect="fade"
//         autoplay={{ delay: 5000 }}
//         loop
//         speed={1000}
//         className="h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-[100svh] bg-cover bg-center relative"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/50" />

//               {/* Content */}
//               <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//                 {/* Text */}
//                 <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>
//                 <p className="text-sm md:text-lg max-w-xl mb-8">{slide.subtitle}</p>

//                 {/* Form */}
//                 <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-800">
//                   {/* Tabs */}
//                   <div className="flex justify-center gap-4 mb-6">
//                     <button
//                       onClick={() => switchTab("uttarakhand")}
//                       className={`px-4 py-2 rounded-md text-sm font-semibold ${
//                         activeTab === "uttarakhand"
//                           ? "bg-orange-500 text-white"
//                           : "bg-gray-200 text-gray-700"
//                       }`}
//                     >
//                       Uttarakhand
//                     </button>
//                     <button
//                       onClick={() => switchTab("himachal")}
//                       className={`px-4 py-2 rounded-md text-sm font-semibold ${
//                         activeTab === "himachal"
//                           ? "bg-orange-500 text-white"
//                           : "bg-gray-200 text-gray-700"
//                       }`}
//                     >
//                       Himachal Pradesh
//                     </button>
//                   </div>

//                   {/* Form Inputs */}
//                   <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4">
//                     {/* Location Dropdown */}
//                     <div className="relative">
//                       <label className="text-xs text-gray-600 mb-1 block">Location</label>
//                       <div
//                         onClick={() => handleDropdownToggle("location")}
//                         className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//                       >
//                         <div className="flex items-center gap-2 text-sm truncate">
//                           <FaMapMarkerAlt className="text-gray-500" />
//                           {location || (
//                             <span className="text-gray-400">Where are you going?</span>
//                           )}
//                         </div>
//                         <FaChevronDown />
//                       </div>
//                       {activeDropdown === "location" && (
//                         <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-30 max-h-60 overflow-y-auto text-sm">
//                           {locations.map((loc, i) => (
//                             <li
//                               key={i}
//                               onClick={() => handleLocationSelect(loc)}
//                               className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                             >
//                               <FaMapMarkerAlt className="text-gray-500" />
//                               {loc}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>

//                     {/* Travel Date */}
//                     <div>
//                       <label className="text-xs text-gray-600 mb-1 block">Travel Date</label>
//                       <div className="relative">
//                         <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//                         <input
//                           type="date"
//                           value={travelDate}
//                           onChange={(e) => setTravelDate(e.target.value)}
//                           className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                         />
//                       </div>
//                     </div>

//                     {/* Passengers */}
//                     <div>
//                       <label className="text-xs text-gray-600 mb-1 block">Number of Passengers</label>
//                       <input
//                         type="number"
//                         min={1}
//                         placeholder="e.g. 2"
//                         value={passengers}
//                         onChange={(e) => setPassengers(e.target.value)}
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                       />
//                     </div>

//                     {/* Send Button */}
//                     <div className="self-end">
//                       <a
//                         href="https://wa.me/6239092532"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-orange-600 transition block text-center"
//                       >
//                         Send
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha Trek",
//     "Chardham Trek",
//     "Chopta Tungnath Trek",
//     "Kedarkantha Trek",
//     "Brahmatal Trek",
//     "Dayara Bugyal Trek",
//     "Kuari pass Trek",
//     "BaliPass Trek",
//     "Dodital Trek",
//     "Chandrashila Trek",
//     "Harki Trek",
//     "Dinara Bugyal Trek",
//     "Sarutal Trek",
//     "Vally of Flowers Trek",
//   ];

//   const himachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations = activeTab === "uttarakhand" ? uttarakhandLocations : himachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation("");
//     setActiveDropdown(null);
//   };

//   const slides = [
//     {
//       image: "/2.png",
//       title: "GULABI KANTHA TREK",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/4.png",
//       title: "CHARDHAM TREK",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/6.png",
//       title: "CHOPTA TUNGNATH TREK",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper with text overlays */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               >
//                 <div className="absolute inset-0 opacity-50" />
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
//                   <div className="bg-opacity-30 p-4 rounded-md">
//                     <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow mb-2">
//                       {slide.title}
//                     </h2>
//                     <p className="text-white text-sm sm:text-base md:text-xl drop-shadow max-w-md mx-auto">
//                       {slide.subtitle}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Form Content */}
//       <div className="relative z-10 flex flex-col md:mt-24 justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[20rem] pb-10 md:pb-0">
//         {/* Tabs */}
//         <div className="flex space-x-2 mb-6 md:mt-16">
//           <button
//             onClick={() => switchTab("uttarakhand")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               activeTab === "uttarakhand"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Uttarakhand
//           </button>
//           <button
//             onClick={() => switchTab("himachal")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               activeTab === "himachal"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Himachal Pradesh
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || (
//                   <span className="text-gray-400">Where are you going?</span>
//                 )}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 {locations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <div className="w-full">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
//             >
//               Send
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperCore from "swiper";
import { EffectFade, Autoplay } from "swiper/modules";

SwiperCore.use([EffectFade, Autoplay]);

export default function Form() {
  const [activeTab, setActiveTab] = useState("uttarakhand");
  const [location, setLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [Travellers,setTravellers] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const uttarakhandLocations = [
    "Gulabikantha Trek",
    "Chardham Trek",
    "Chopta Tungnath Trek",
    "Kedarkantha Trek",
    "Brahmatal Trek",
    "Dayara Bugyal Trek",
    "Kuari pass Trek",
    "BaliPass Trek",
    "Dodital Trek",
    "Chandrashila Trek",
    "Harki Trek",
    "Dinara Bugyal Trek",
    "Sarutal Trek",
    "Vally of Flowers Trek",
  ];

  const himachalLocations = [
    "Hampta pass Trek",
    "Triund Trek",
    "Laka Glacier Trek",
  ];

  const locations =
    activeTab === "uttarakhand" ? uttarakhandLocations : himachalLocations;

  const handleDropdownToggle = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleLocationSelect = (value) => {
    setLocation(value);
    setActiveDropdown(null);
  };

  const switchTab = (tabName) => {
    setActiveTab(tabName);
    setLocation("");
    setActiveDropdown(null);
  };

  const slides = [
    {
      image: "/2.png",
      title: "GULABI KANTHA TREK",
      subtitle: "Explore Stunning Hiking Trails in India",
    },
    {
      image: "/4.png",
      title: "CHARDHAM TREK",
      subtitle: "Breathe the fresh mountain air",
    },
    {
      image: "/6.png",
      title: "CHOPTA TUNGNATH TREK",
      subtitle: "Reconnect with nature on a thrilling trek",
    },
  ];

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Background Swiper with text overlays */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop
          speed={1000}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                  <div className="bg-opacity-30 p-4 rounded-md">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-xl drop-shadow max-w-md mx-auto">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Form Content */}
      <div className="relative z-10 flex flex-col md:mt-24 justify-start items-center text-center text-white min-h-[100svh] px-4 pt-40 sm:pt-60 md:pt-[20rem] pb-10 md:pb-0">
        {/* Tabs */}
        <div className="flex space-x-2 mb-6 md:mt-16">
          <button
            onClick={() => switchTab("uttarakhand")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "uttarakhand"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Uttarakhand
          </button>
          <button
            onClick={() => switchTab("himachal")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "himachal"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Himachal Pradesh
          </button>
        </div>

        {/* Form */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
  {/* Location Dropdown */}
  <div className="flex flex-col w-full items-start">
    <label className="text-xs text-gray-500 mb-1 block">Location</label>
    <div
      onClick={() => handleDropdownToggle("location")}
      className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
    >
      <div className="flex items-center gap-2 text-sm truncate">
        <FaMapMarkerAlt className="text-gray-500" />
        {location || (
          <span className="text-gray-400">Where are you going?</span>
        )}
      </div>
      <FaChevronDown />
    </div>
    {activeDropdown === "location" && (
      <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
        {locations.map((loc, i) => (
          <li
            key={i}
            onClick={() => handleLocationSelect(loc)}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          >
            <FaMapMarkerAlt className="text-gray-500" />
            {loc}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Travel Date */}
  <div className="flex flex-col w-full items-start">
    <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1 block">
      Travel Date
    </label>
    <div className="relative w-full">
      <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      {!travelDate && (
        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
          Select travel date
        </span>
      )}
      <input
        id="travelDate"
        type="date"
        className="w-full border appearance-none border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
        value={travelDate}
        onChange={(e) => setTravelDate(e.target.value)}
      />
    </div>
  </div>

  {/* Number of Travellers */}
  <div className="flex flex-col w-full items-start">
    <label htmlFor="passengers" className="text-xs text-gray-500 mb-1 block">
      Number of Travellers
    </label>
    <input
      id="passengers"
      type="number"
      min={1}
      placeholder="e.g. 2"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
      value={Travellers}
      onChange={(e) => setTravellers(e.target.value)}
    />
  </div>

  {/* Send Button */}
  <div className="w-full">
    <a
      href="https://wa.me/6239092532"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
    >
      Send
    </a>
  </div>
</div>

      </div>
    </div>
  );
}




// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha Trek",
//     "Chardham Trek",
//     "Chopta Tungnath Trek",
//     "Kedarkantha Trek",
//     "Brahmatal Trek",
//     "Dayara Bugyal Trek",
//     "Kuari pass Trek",
//     "BaliPass Trek",
//     "Dodital Trek",
//     "Chandrashila Trek",
//     "Harki Trek",
//     "Dinara Bugyal Trek",
//     "Sarutal Trek",
//     "Vally of Flowers Trek",
//   ];

//   const himachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations = activeTab === "uttarakhand" ? uttarakhandLocations : himachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation("");
//     setActiveDropdown(null);
//   };

//   const slides = [
//     {
//       image: "/2.png",
//       title: "GULABI KANTHA TREK",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/4.png",
//       title: "CHARDHAM TREK",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/6.png",
//       title: "CHOPTA TUNGNATH TREK",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper with text overlays */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               >
//                 <div className="absolute inset-0 opacity-50" />
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
//                   <div className="bg-opacity-30 p-4 rounded-md">
//                     <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow mb-2">
//                       {slide.title}
//                     </h2>
//                     <p className="text-white text-sm sm:text-base md:text-xl drop-shadow max-w-md mx-auto">
//                       {slide.subtitle}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Form Content */}
//       <div className="relative z-10 flex flex-col md:mt-24 justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[20rem]">
//         {/* Tabs */}
//         <div className="flex space-x-2 mb-6 md:mt-16">
//           <button
//             onClick={() => switchTab("uttarakhand")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               activeTab === "uttarakhand"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Uttarakhand
//           </button>
//           <button
//             onClick={() => switchTab("himachal")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               activeTab === "himachal"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Himachal Pradesh
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || (
//                   <span className="text-gray-400">Where are you going?</span>
//                 )}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 {locations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <div className="w-full">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
//             >
//               Send
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha Trek",
//     "Chardham Trek",
//     "Chopta Tungnath Trek",
//     "Kedarkantha Trek",
//     "Brahmatal Trek",
//     "Dayara Bugyal Trek",
//     "Kuari pass Trek",
//     "BaliPass Trek",
//     "Dodital Trek",
//     "Chandrashila Trek",
//     "Harki Trek",
//     "Dinara Bugyal Trek",
//     "Sarutal Trek",
//     "Vally of Flowers Trek",
//   ];

//   const himachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations = activeTab === "uttarakhand" ? uttarakhandLocations : himachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation("");
//     setActiveDropdown(null);
//   };

//   const slides = [
//     {
//       image: "/2.png",
//       title: " GULABI KANTHA TREK ",
//       subtitle: "Explore Stunning Hiking Trails in India",
//     },
//     {
//       image: "/4.png",
//       title: "CHARDHAM TREK",
//       subtitle: "Breathe the fresh mountain air",
//     },
//     {
//       image: "/6.png",
//       title: "CHOPTA TUNGNATH TREK",
//       subtitle: "Reconnect with nature on a thrilling trek",
//     },
//   ];

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper with text overlays */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               >
//                 <div className="absolute inset-0 bg-black opacity-50" />
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
//                   <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow mb-2">
//                     {slide.title}
//                   </h2>
//                   <p className="text-white text-lg md:text-xl drop-shadow">
//                     {slide.subtitle}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Form Content */}
//       <div className="relative z-10 flex flex-col  md:mt-24  justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[20rem]">
//         {/* Tabs */}
//         <div className="flex space-x-2 mb-6  md:mt-16">
//           <button
//             onClick={() => switchTab("uttarakhand")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               activeTab === "uttarakhand"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Uttarakhand
//           </button>
//           <button
//             onClick={() => switchTab("himachal")}
//             className={`px-4 py-2 rounded-md text-sm font-medium ${
//               activeTab === "himachal"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Himachal Pradesh
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || (
//                   <span className="text-gray-400">Where are you going?</span>
//                 )}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 {locations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <div className="w-full">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
//             >
//               Send
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha Trek",
//     "Chardham Trek",
//     "Chopta Tungnath Trek",
//     "Kedarkantha Trek",
//     "Brahmatal Trek",
//     "Dayara Bugyal Trek",
//     "Kuari pass Trek",
//     "BaliPass Trek",
//     "Dodital Trek",
//     "Chandrashila Trek",
//     "Harki Trek",
//     "Dinara Bugyal Trek",
//     "Sarutal Trek",
//     "Vally of Flowers Trek"
  
//   ];

//   const HimachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations =
//     activeTab === "uttarakhand" ? uttarakhandLocations : HimachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation(""); // Reset location on tab switch
//     setActiveDropdown(null);
//   };


//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper */}
//       <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {["/deal112.png", "/deal4.webp", "/deal5.webp"].map((img, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img})` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[18rem]">
//         {/* <h1 className="text-3xl md:text-5xl font-bold mb-2">ADVENTUROUS TREK</h1>
//         <p className="text-base md:text-lg mb-6">
//           Explore Stunning Hiking Trails in India
//         </p> */}

//         {/* Tabs */}
//         <div className="flex space-x-2 mb-4 md:mt-44 ">
//           <button
//             onClick={() => switchTab("uttarakhand")}
//             className={`px-4 py-2 rounded-t-md text-sm font-medium ${
//               activeTab === "uttarakhand"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Uttarakhand
//           </button>
//           <button
//             onClick={() => switchTab("Himachal Pradesh")}
//             className={`px-4 py-2 rounded-t-md text-sm font-medium ${
//               activeTab === "Himachal Pradesh"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Himachal Pradesh
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || (
//                   <span className="text-gray-400">Where are you going?</span>
//                 )}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 {locations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button (as anchor styled like button) */}
//           <div className="w-full">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
//             >
//               Send
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import SwiperCore from "swiper";
// import { EffectFade, Autoplay } from "swiper/modules";

// SwiperCore.use([EffectFade, Autoplay]);

// export default function Form() {
//   const [activeTab, setActiveTab] = useState("uttarakhand");
//   const [location, setLocation] = useState("");
//   const [travelDate, setTravelDate] = useState("");
//   const [passengers, setPassengers] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const uttarakhandLocations = [
//     "Gulabikantha Trek",
//     "Chardham Trek",
//     "Chopta Tungnath Trek",
//     "Kedarkantha Trek",
//     "Brahmatal Trek",
//     "Dayara Bugyal Trek",
//     "Kuari pass Trek",
//     "BaliPass Trek",
//     "Dodital Trek",
//     "Chandrashila Trek",
//     "Harki Trek",
//     "Dinara Bugyal Trek",
//     "Sarutal Trek",
//     "Vally of Flowers Trek",
//   ];

//   const HimachalLocations = [
//     "Hampta pass Trek",
//     "Triund Trek",
//     "Laka Glacier Trek",
//   ];

//   const locations =
//     activeTab === "uttarakhand" ? uttarakhandLocations : HimachalLocations;

//   const handleDropdownToggle = (name) => {
//     setActiveDropdown((prev) => (prev === name ? null : name));
//   };

//   const handleLocationSelect = (value) => {
//     setLocation(value);
//     setActiveDropdown(null);
//   };

//   const switchTab = (tabName) => {
//     setActiveTab(tabName);
//     setLocation(""); // Reset location on tab switch
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="relative w-full min-h-[100svh] overflow-hidden">
//       {/* Background Swiper */}
//       {/* <div className="absolute inset-0 -z-10">
//         <Swiper
//           effect="fade"
//           autoplay={{ delay: 5000 }}
//           loop
//           speed={1000}
//           className="h-full w-full"
//         >
//           {["/W1A.png", "/deal4.webp", "/deal5.webp"].map((img, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${img})` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 bg-black opacity-50" />
//       </div> */}
//       <div className="absolute inset-0 -z-10 h-[100vh] sm:h-[600px]">
//   <Swiper
//     effect="fade"
//     autoplay={{ delay: 5000 }}
//     loop
//     speed={1000}
//     className="h-full w-full"
//   >
//     {["/W1A.png", "/deal4.webp", "/deal5.webp"].map((img, index) => (
//       <SwiperSlide key={index}>
//         <div
//           className="w-full h-full bg-cover bg-center sm:bg-top"
//           style={{ backgroundImage: `url(${img})` }}
//         />
//       </SwiperSlide>
//     ))}
//   </Swiper>

//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black/50" />
// </div>

   

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-4 pt-[12rem] md:pt-[18rem]">
//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center space-x-2 mb-6 md:mt-20 mt-10">
//           <button
//             onClick={() => switchTab("uttarakhand")}
//             className={`px-4 py-2 rounded-t-md text-sm font-medium ${
//               activeTab === "uttarakhand"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Uttarakhand
//           </button>
//           <button
//             onClick={() => switchTab("Himachal Pradesh")}
//             className={`px-4 py-2 rounded-t-md text-sm font-medium ${
//               activeTab === "Himachal Pradesh"
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Himachal Pradesh
//           </button>
//         </div>

//         {/* Form */}
//         <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
//           {/* Location Dropdown */}
//           <div className="relative">
//             <label className="text-xs text-gray-500 mb-1 block">Location</label>
//             <div
//               onClick={() => handleDropdownToggle("location")}
//               className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
//             >
//               <div className="flex items-center gap-2 text-sm truncate">
//                 <FaMapMarkerAlt className="text-gray-500" />
//                 {location || (
//                   <span className="text-gray-400">Where are you going?</span>
//                 )}
//               </div>
//               <FaChevronDown />
//             </div>
//             {activeDropdown === "location" && (
//               <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-20 max-h-60 overflow-y-auto text-sm">
//                 {locations.map((loc, i) => (
//                   <li
//                     key={i}
//                     onClick={() => handleLocationSelect(loc)}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
//                   >
//                     <FaMapMarkerAlt className="text-gray-500" />
//                     {loc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Travel Date */}
//           <div className="flex flex-col">
//             <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
//               <input
//                 id="travelDate"
//                 type="date"
//                 className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//                 value={travelDate}
//                 onChange={(e) => setTravelDate(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Passengers */}
//           <div className="flex flex-col">
//             <label htmlFor="passengers" className="text-xs text-gray-500 mb-1">
//               Number of Passengers
//             </label>
//             <input
//               id="passengers"
//               type="number"
//               min={1}
//               placeholder="e.g. 2"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
//               value={passengers}
//               onChange={(e) => setPassengers(e.target.value)}
//             />
//           </div>

//           {/* Send Button */}
//           <div className="w-full lg:w-auto">
//             <a
//               href="https://wa.me/6239092532"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-full lg:w-auto bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
//             >
//               Send
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Optional: Swiper slide fix for background images */}
//       <style jsx global>{`
//         .swiper-slide div {
//           background-size: cover !important;
//           background-position: center !important;
//         }
//       `}</style>
//     </div>
//   );
// }



