// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// const teamMembers = [
//   {
//     name: "Avtar Panwar",
//     role: "Founder & CEO",
//     bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
//     image: "/Avtar.webp",
//     linkedin: "https://linkedin.com/in/aaravmehta",
//     twitter: "https://twitter.com/aaravmehta",
//     instagram: "https://instagram.com/aaravmehta",
//   },
//   {
//     name: "Deepika",
//     role: "Trek Leader",
//     bio: "Certified mountaineer with a love for nature and guiding adventurers safely.",
//     image: "/Dipika.webp",
//     linkedin: "https://linkedin.com/in/priyasharma",
//     twitter: "https://twitter.com/priyasharma",
//     instagram: "https://instagram.com/priyasharma",
//   },
//   {
//     name: "Deepak Singh",
//     role: "Guide",
//     bio: "Manages logistics with precision and ensures every trek is smooth and safe.",
//     image: "/Deepak.webp",
//     linkedin: "https://linkedin.com/in/rohankapoor",
//     twitter: "https://twitter.com/rohankapoor",
//     instagram: "https://instagram.com/rohankapoor",
//   },
//   // {
//   //   name: "Abc Verma",
//   //   role: "Marketing & Outreach",
//   //   bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
//   //   image: "/abc.webp",
//   //   linkedin: "https://linkedin.com/in/snehaverma",
//   //   twitter: "https://twitter.com/snehaverma",
//   //   instagram: "https://instagram.com/snehaverma",
//   // },
//   {
//     name: "Rohit Verma",
//     role: "Marketing & Outreach",
//     bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
//     image: "/Slot.webp",
//     linkedin: "https://linkedin.com/in/snehaverma",
//     twitter: "https://twitter.com/snehaverma",
//     instagram: "https://instagram.com/snehaverma",
//   },
// ];

// const TeamCarousel = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('deal95.webp')" }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Meet Our Team
//           </h1>
//           <h3 className="text-lg font-medium text-gray-200 mt-4">
//             Meet the explorers who make every Himalayan step unforgettable.
//           </h3>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-700">
//           Meet with our experienced team member
//         </h2>
//         <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-700">
//           Our Team
//         </h3>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-2xl bg-white overflow-hidden shadow-lg flex flex-col h-full">
//                 <div className="w-full h-64 flex justify-center items-center bg-gray-100">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="max-h-full object-contain"
//                   />
//                 </div>
//                 <div className="p-5 flex flex-col justify-between flex-grow text-center">
//                   <h3 className="text-xl font-bold text-gray-800 mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-orange-600 font-medium mb-2">
//                     {member.role}
//                   </p>
//                   <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
//                   <div className="flex justify-center gap-4 text-xl text-gray-500">
//                     <a
//                       href={member.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaLinkedin className="hover:text-blue-600 transition" />
//                     </a>
//                     <a
//                       href={member.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaTwitter className="hover:text-sky-500 transition" />
//                     </a>
//                     {member.instagram && (
//                       <a
//                         href={member.instagram}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaInstagram className="hover:text-pink-500 transition" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default TeamCarousel;


// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import HimTrek from "../components/HimTrek";

// const teamMembers = [
//   {
//     name: "Avtar Panwar",
//     role: "Founder & CEO",
//     bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
//     image: "/Avtar.webp",
//     linkedin: "https://linkedin.com/in/aaravmehta",
//     twitter: "https://twitter.com/aaravmehta",
//     instagram: "https://instagram.com/aaravmehta",
//   },
//   {
//     name: "Deepika",
//     role: "Trek Leader",
//     bio: "Certified mountaineer with a love for nature and guiding adventurers safely.",
//     image: "/Dipika.webp",
//     linkedin: "https://linkedin.com/in/priyasharma",
//     twitter: "https://twitter.com/priyasharma",
//     instagram: "https://instagram.com/priyasharma",
//   },
//   {
//     name: "Deepak Singh",
//     role: "Guide",
//     bio: "Manages logistics with precision and ensures every trek is smooth and safe.",
//     image: "/Deepak.webp",
//     linkedin: "https://linkedin.com/in/rohankapoor",
//     twitter: "https://twitter.com/rohankapoor",
//     instagram: "https://instagram.com/rohankapoor",
//   },
//   {
//     name: "Rohit Verma",
//     role: "Marketing & Outreach",
//     bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
//     image: "/Slot.webp",
//     linkedin: "https://linkedin.com/in/snehaverma",
//     twitter: "https://twitter.com/snehaverma",
//     instagram: "https://instagram.com/snehaverma",
//   },
// ];

// const TeamCarousel = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('deal95.webp')" }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Meet Our Team
//           </h1>
//           <h3 className="text-lg font-medium text-gray-200 mt-4">
//             Meet the explorers who make every Himalayan step unforgettable.
//           </h3>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
//           Our Team
//         </h2>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white max-w-sm mx-auto rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col items-center text-center transition-transform hover:scale-[1.03] duration-300">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-100 shadow-sm"
//                 />
//                 <h3 className="text-lg font-bold text-gray-800 mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm text-orange-600 font-medium mb-2">
//                   {member.role}
//                 </p>
//                 <p className="text-sm text-gray-600 mb-4 px-2">{member.bio}</p>
//                 <div className="flex justify-center gap-4 text-lg text-gray-500">
//                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin className="hover:text-blue-600 transition" />
//                   </a>
//                   <a href={member.twitter} target="_blank" rel="noopener noreferrer">
//                     <FaTwitter className="hover:text-sky-500 transition" />
//                   </a>
//                   {member.instagram && (
//                     <a href={member.instagram} target="_blank" rel="noopener noreferrer">
//                       <FaInstagram className="hover:text-pink-500 transition" />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
      
//       </section>
//       <HimTrek/>
//     </>
//   );
// };

// export default TeamCarousel;




"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import HimTrek from "../components/HimTrek";

const teamMembers = [
  {
    name: "Vikash Panwar",
    role: "Founder & CEO",
    bio: "Leads the vision and operations behind every Himalayan adventure.",
    image: "/vikash.jpg",
  },
  {
    name: "Akhil Panwar",
    role: "Trek Leader",
    bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
    image: "/1.webp",
  },
  {
    name: "Deepika",
    role: "Assistant Trek Leader",
    bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
    image: "/dipika2.jpeg",
  },
  // {
  //   name: "Deepak Singh",
  //   role: "Guide",
  //   bio: "Experienced guide focused on flawless logistics and trek safety.",
  //   image: "/Deepak.webp",
  // },
  {
    name: "Shubham Panwar",
    role: "Marketing Manager",
    bio: "Drives marketing efforts to bring treks to passionate explorers.",
    image: "/Slot.webp",
  },
  {
    name: "Kapil Rana",
    role: "Cook",
    bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
    image: "/Kapil.jpg",
  },
  {
    name: "Pardeep Sherpa",
    role: "High Altitude Porter",
    bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
    image: "/deal 103.jpg",
  }
  
  // {
  //   name:"Vikash panwar",
  //   role: "Founder Ceo",
  //   bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
  //   image: "/vikash.jpg",
  // },
  // {
  //   name: "Akhil Panwar",
  //   role: "Trek Leader",
  //   bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
  //   image: "/1.webp",
  // },
  // {
  //   name: "Deepika",
  //   role: "assistant trek leader",
  //   bio: "Certified mountaineer with a love for nature and guiding adventurers safely.",
  //   image: "/Dipika.webp",
  // },
  // {
  //   name: "Deepak Singh",
  //   role: "Guide",
  //   bio: "Manages logistics with precision and ensures every trek is smooth and safe.",
  //   image: "/Deepak.webp",
  // },
  // {
  //   name: "Shubham Panwar",
  //   role: "Marketing Manager",
  //   bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
  //   image: "/Slot.webp",
  // },
  // {
  //   name: "Kapil Rana",
  //   role: "cook",
  //   bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
  //   image: "/Kapil.jpg",
  // },
  // {
  //   name: "Pardeep Sherpa",
  //   role: "High altitude Porter",
  //   bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
  //   image: "/deal 103.jpg",
  // },
];

const TeamCarousel = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('deal95.webp')" }}
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
            Meet Our Team
          </h1>
          <h3 className="text-lg font-medium text-gray-200 mt-4">
            Meet the explorers who make every Himalayan step unforgettable.
          </h3>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Our Team
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white max-w-sm mx-auto rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.03] duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-100 shadow-sm"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-2 px-2">{member.bio}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <HimTrek />
    </>
  );
};

export default TeamCarousel;




// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// const teamMembers = [
//   {
//     name: "Avtar Panwar",
//     role: "Founder & CEO",
//     bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
//     image: "/Avtar.webp",
//     linkedin: "https://linkedin.com/in/aaravmehta",
//     twitter: "https://twitter.com/aaravmehta",
//     instagram: "https://instagram.com/aaravmehta",
//   },
//   {
//     name: "Deepika",
//     role: "Trek Leader",
//     bio: "Certified mountaineer with a love for nature and guiding adventurers safely.",
//     image: "/Dipika.webp",
//     linkedin: "https://linkedin.com/in/priyasharma",
//     twitter: "https://twitter.com/priyasharma",
//     instagram: "https://instagram.com/priyasharma",
//   },
//   {
//     name: "Deepak Singh",
//     role: "Guide",
//     bio: "Manages logistics with precision and ensures every trek is smooth and safe.",
//     image: "/Deepak.webp",
//     linkedin: "https://linkedin.com/in/rohankapoor",
//     twitter: "https://twitter.com/rohankapoor",
//     instagram: "https://instagram.com/rohankapoor",
//   },
//   {
//     name: "Rohit Verma",
//     role: "Marketing & Outreach",
//     bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
//     image: "/Slot.webp",
//     linkedin: "https://linkedin.com/in/snehaverma",
//     twitter: "https://twitter.com/snehaverma",
//     instagram: "https://instagram.com/snehaverma",
//   },
// ];

// const TeamCarousel = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('deal95.webp')" }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Meet Our Team
//           </h1>
//           <h3 className="text-lg font-medium text-gray-200 mt-4">
//             Meet the explorers who make every Himalayan step unforgettable.
//           </h3>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
//           Our Team
//         </h2>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-orange-100 shadow-md"
//                 />
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm text-orange-600 font-medium mb-2">
//                   {member.role}
//                 </p>
//                 <p className="text-sm text-gray-600 mb-4 px-2">{member.bio}</p>
//                 <div className="flex justify-center gap-4 text-xl text-gray-500">
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedin className="hover:text-blue-600 transition" />
//                   </a>
//                   <a
//                     href={member.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaTwitter className="hover:text-sky-500 transition" />
//                   </a>
//                   {member.instagram && (
//                     <a
//                       href={member.instagram}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <FaInstagram className="hover:text-pink-500 transition" />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default TeamCarousel;




// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// const teamMembers = [
//   {
//     name: "Aatar Panwar",
//     role: "Founder & CEO",
//     bio: "Visionary trekker, passionate about creating unforgettable experiences in the Himalayas.",
//     image: "/Avtar.webp",
//     linkedin: "https://linkedin.com/in/aaravmehta",
//     twitter: "https://twitter.com/aaravmehta",
//     instagram: "https://instagram.com/aaravmehta",
//   },
//   {
//     name: "Dipika Assistant",
//     role: "Trek Leader",
//     bio: "Certified mountaineer with a love for nature and guiding adventurers safely.",
//     image: "/Dipika.webp",
//     linkedin: "https://linkedin.com/in/priyasharma",
//     twitter: "https://twitter.com/priyasharma",
//     instagram: "https://instagram.com/priyasharma",
//   },
//   {
//     name: "Deepak Singh",
//     role: "Guide",
//     bio: "Manages logistics with precision and ensures every trek is smooth and safe.",
//     image: "/Deepak.webp",
//     linkedin: "https://linkedin.com/in/rohankapoor",
//     twitter: "https://twitter.com/rohankapoor",
//     instagram: "https://instagram.com/rohankapoor",
//   },
//   {
//     name: "Abc Verma",
//     role: "Marketing & Outreach",
//     bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
//     image: "/abc.webp",
//     linkedin: "https://linkedin.com/in/snehaverma",
//     twitter: "https://twitter.com/snehaverma",
//     instagram: "https://instagram.com/snehaverma",
//   },
//   {
//     name: "Rohit Verma",
//     role: "Marketing & Outreach",
//     bio: "Crafts compelling campaigns to bring trekking adventures to the world.",
//     image: "/Slot.webp",
//     linkedin: "https://linkedin.com/in/snehaverma",
//     twitter: "https://twitter.com/snehaverma",
//     instagram: "https://instagram.com/snehaverma",
//   },
// ];

// const TeamCarousel = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('deal95.webp')" }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Meet Our Team
//           </h1>
//           <h3 className="text-lg font-medium text-gray-200 mt-4">
//             Meet the explorers who make every Himalayan step unforgettable.
//           </h3>
//         </div>
//       </div>

//       {/* Carousel Section */}
//       <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-700">
//           Meet with our experienced team member
//         </h2>
//         <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-700">
//           Our Team
//         </h3>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="rounded-2xl bg-white overflow-hidden shadow-lg flex flex-col h-full">
//                 {/* Image wrapper with consistent aspect ratio and containment */}
//                 <div className="w-full aspect-[4/5] bg-gray-100 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* Info Section */}
//                 <div className="p-5 flex flex-col justify-between flex-grow text-center">
//                   <h3 className="text-xl font-bold text-gray-800 mb-1">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm text-orange-600 font-medium mb-2">
//                     {member.role}
//                   </p>
//                   <p className="text-sm text-gray-600 mb-4">{member.bio}</p>

//                   {/* Social Icons */}
//                   <div className="flex justify-center gap-4 text-xl text-gray-500">
//                     {member.linkedin && (
//                       <a
//                         href={member.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaLinkedin className="hover:text-blue-600 transition" />
//                       </a>
//                     )}
//                     {member.twitter && (
//                       <a
//                         href={member.twitter}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaTwitter className="hover:text-sky-500 transition" />
//                       </a>
//                     )}
//                     {member.instagram && (
//                       <a
//                         href={member.instagram}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaInstagram className="hover:text-pink-500 transition" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default TeamCarousel;

