

// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import HimTrek from "../components/HimTrek";

// const teamMembers = [
//   {
//     name: "Vikash Panwar",
//     role: "Founder & CEO",
//     bio: "Leads the vision and operations behind every Himalayan adventure.",
//     image: "/vikash.jpg",
//   },
//   {
//     name: "Akhil Panwar",
//     role: "Trek Leader",
//     bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
//     image: "/1.webp",
//   },
//   {
//     name: "Deepika",
//     role: "Assistant Trek Leader",
//     bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
//     image: "/dipika2.jpeg",
//   },
//   {
//     name: "Kunal Gosh",
//     role: "Founder",
//     bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
//     image: "/kunal.jpg",
//   },
//   {
//     name: "Avtar Panwar",
//     role: "Slot Manager",
//     bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
//     image: "/Avtar.jpg",
//   },
//   {
//     name: "Shubham Panwar",
//     role: "Marketing Manager",
//     bio: "Drives marketing efforts to bring treks to passionate explorers.",
//     image: "/Slot.webp",
//   },
//   {
//     name: "Kapil Rana",
//     role: "Cook",
//     bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
//     image: "/kapil.jpg",
//   },
//   {
//     name: "Pardeep Sherpa",
//     role: "High Altitude Porter",
//     bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
//     image: "/deal 103.jpg",
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
//         <div className=" bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Meet Our Team
//           </h1>
//           <h3 className="text-lg font-medium text-gray-200 mt-4">
//             Meet the explorers who make every Himalayan step unforgettable.
//           </h3>
//         </div>
//       </div>

//       {/* Carousel Section */}
      
//        <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//       <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
//         Meet Our Team
//       </h2>

//       <Swiper
//         modules={[Autoplay]}
//         loop={true}
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         spaceBetween={20}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 1.2 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {teamMembers.map((member, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white max-w-sm mx-auto rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center text-center transition-transform">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-100"
//               />
//               <h3 className="text-lg font-bold text-gray-800 mb-1">
//                 {member.name}
//               </h3>
//               <p className="text-sm text-orange-600 font-medium mb-2">
//                 {member.role}
//               </p>
//               <p className="text-sm text-gray-600 mb-2 px-2">{member.bio}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>

//       <HimTrek />
//     </>
//   );
// };

// export default TeamCarousel;


// "use client";

// import React from "react";
// import HimTrek from "../components/HimTrek";

// const teamMembers = [
//   {
//     name: "Vikash Panwar",
//     role: "Founder & CEO",
//     bio: "Leads the vision and operations behind every Himalayan adventure.",
//     image: "/vikash.jpg",
//   },
//   {
//     name: "Kunal Gosh",
//     role: "Founder",
//     bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
//     image: "/kunal.jpg",
//   },
//   {
//     name: "Akhil Panwar",
//     role: "Trek Leader",
//     bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
//     image: "/1.webp",
//   },
//   {
//     name: "Deepika",
//     role: "Assistant Trek Leader",
//     bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
//     image: "/dipika2.jpeg",
//   },
//   {
//     name: "Avtar Panwar",
//     role: "Slot Manager",
//     bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
//     image: "/Avtar.jpg",
//   },
//   {
//     name: "Shubham Panwar",
//     role: "Marketing Manager",
//     bio: "Drives marketing efforts to bring treks to passionate explorers.",
//     image: "/Slot.webp",
//   },
//   {
//     name: "Kapil Rana",
//     role: "Cook",
//     bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
//     image: "/kapil.jpg",
//   },
//   {
//     name: "Pardeep Sherpa",
//     role: "High Altitude Porter",
//     bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
//     image: "/deal 103.jpg",
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

//       {/* Team Section */}
//       <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
//           Meet Our Core Team
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className={`bg-white border-2 p-6 rounded-xl text-center transition-all duration-300 shadow-sm hover:shadow-md ${
//                 member.role.includes("Founder") ? "border-green-500" : "border-orange-500"
//               }`}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-28 h-28 mx-auto object-cover rounded-full mb-4 border-4 border-orange-100"
//               />
//               <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
//               <p className="text-sm font-medium text-orange-600 mt-1 mb-2">
//                 {member.role}
//               </p>
//               <p className="text-sm text-gray-600">{member.bio}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <HimTrek />
//     </>
//   );
// };

// export default TeamCarousel;

// "use client";

// import React from "react";
// import HimTrek from "../components/HimTrek";

// const teamMembers = [
//   {
//     name: "Vikash Panwar",
//     role: "Founder & CEO",
//     bio: "Leads the vision and operations behind every Himalayan adventure.",
//     image: "/vikash.jpg",
//   },
//   {
//     name: "Kunal Gosh",
//     role: "Founder",
//     bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
//     image: "/kunal.jpg",
//   },
//   {
//     name: "Akhil Panwar",
//     role: "Trek Leader",
//     bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
//     image: "/1.webp",
//   },
//   {
//     name: "Deepika",
//     role: "Assistant Trek Leader",
//     bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
//     image: "/dipika2.jpeg",
//   },
//   {
//     name: "Avtar Panwar",
//     role: "Slot Manager",
//     bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
//     image: "/Avtar.jpg",
//   },
//   {
//     name: "Shubham Panwar",
//     role: "Marketing Manager",
//     bio: "Drives marketing efforts to bring treks to passionate explorers.",
//     image: "/Slot.webp",
//   },
//   {
//     name: "Kapil Rana",
//     role: "Cook",
//     bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
//     image: "/kapil.jpg",
//   },
//   {
//     name: "Pardeep Sherpa",
//     role: "High Altitude Porter",
//     bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
//     image: "/deal 103.jpg",
//   },
// ];

// const TeamCard = ({ member }) => (
//   <div
//     className={`bg-white border-2 p-12 rounded-xl text-center  transition-all duration-300 shadow-sm hover:shadow-md ${
//       member.role.includes("Founder") ? "border-green-500" : "border-orange-500"
//     }`}
//   >
//     <img
//       src={member.image}
//       alt={member.name}
//       className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-orange-100"
//     />
//     <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
//     <p className="text-sm text-orange-600 font-medium mb-2">{member.role}</p>
//     <p className="text-sm text-gray-600 px-2">{member.bio}</p>
//   </div>
// );

// const TeamCarousel = () => {
//   const firstRow = teamMembers.filter((m) =>
//     m.role.toLowerCase().includes("founder")
//   );
//   const otherMembers = teamMembers.filter(
//     (m) => !m.role.toLowerCase().includes("founder")
//   );
//   const secondRow = otherMembers.slice(0, 3);
//   const thirdRow = otherMembers.slice(3, 5);

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{ backgroundImage: "url('/deal95.webp')" }}
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

//       {/* Team Grid Section */}
//       <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
//           Meet Our Team
//         </h2>

//         {/* Founders Row (No gap on desktop) */}
//         <div className="flex flex-wrap lg:flex-nowrap w-full max-w-6xl mx-auto mb-10 gap-0">
//           {firstRow.map((member, index) => (
//             <div key={index} className="w-full lg:w-1/2">
//               <TeamCard member={member} />
//             </div>
//           ))}
//         </div>

//         {/* Second Row: 3 members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
//           {secondRow.map((member, index) => (
//             <TeamCard key={index} member={member} />
//           ))}
//         </div>

//         {/* Third Row: 2 members */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {thirdRow.map((member, index) => (
//             <TeamCard key={index} member={member} />
//           ))}
//         </div>
//       </section>

//       <HimTrek />
//     </>
//   );
// };

// export default TeamCarousel;


// "use client";

// import React from "react";
// import HimTrek from "../components/HimTrek";

// const teamMembers = [
//   {
//     name: "Vikash Panwar",
//     role: "Founder & CEO",
//     bio: "Leads the vision and operations behind every Himalayan adventure.",
//     image: "/vikash.jpg",
//   },
//   {
//     name: "Kunal Gosh",
//     role: "Founder",
//     bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
//     image: "/kunal.jpg",
//   },
//   {
//     name: "Akhil Panwar",
//     role: "Trek Leader",
//     bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
//     image: "/1.webp",
//   },
//   {
//     name: "Deepika",
//     role: "Assistant Trek Leader",
//     bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
//     image: "/dipika2.jpeg",
//   },
//   {
//     name: "Avtar Panwar",
//     role: "Slot Manager",
//     bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
//     image: "/Avtar.jpg",
//   },
//   {
//     name: "Shubham Panwar",
//     role: "Marketing Manager",
//     bio: "Drives marketing efforts to bring treks to passionate explorers.",
//     image: "/Slot.webp",
//   },
//   {
//     name: "Kapil Rana",
//     role: "Cook",
//     bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
//     image: "/kapil.jpg",
//   },
//   {
//     name: "Pardeep Sherpa",
//     role: "High Altitude Porter",
//     bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
//     image: "/deal 103.jpg",
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

//       {/* Team Section */}
//       <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
//           Our Team
//         </h2>

//         {/* Founders with gap between two cards */}
//         <div className="flex flex-col md:flex-row justify-center md:space-x-[10px] mb-10">
//           {teamMembers
//             .filter((member) => member.role.toLowerCase().includes("founder"))
//             .map((member, index) => (
//               <TeamCard key={index} member={member} />
//             ))}
//         </div>

//         {/* Rest of the team in grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {teamMembers
//             .filter((member) => !member.role.toLowerCase().includes("founder"))
//             .map((member, index) => (
//               <TeamCard key={index} member={member} />
//             ))}
//         </div>
//       </section>

//       <HimTrek />
//     </>
//   );
// };

// const TeamCard = ({ member }) => (
//   <div className="bg-white rounded-2xl border-2 border-orange-500 p-8 flex flex-col items-center text-center shadow-sm transition-transform">
//     <img
//       src={member.image}
//       alt={member.name}
//       className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-100"
//     />
//     <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
//     <p className="text-sm text-green-600 font-medium mb-2">{member.role}</p>
//     <p className="text-sm text-gray-600 mb-2 px-2">{member.bio}</p>
//   </div>
// );

// export default TeamCarousel;


"use client";

import React from "react";
import HimTrek from "../components/HimTrek";

const teamMembers = [
  {
    name: "Vikash Panwar",
    role: "Founder & CEO",
    bio: "Leads the vision and operations behind every Himalayan adventure.",
    image: "/vikash.jpg",
  },
  {
    name: "Kunal Gosh",
    role: "Founder",
    bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
    image: "/kunal.jpg",
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
  {
    name: "Avtar Panwar",
    role: "Slot Manager",
    bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
    image: "/Avtar.jpg",
  },
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
    image: "/kapil.jpg",
  },
  {
    name: "Pardeep Sherpa",
    role: "High Altitude Porter",
    bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
    image: "/deal 103.jpg",
  },
];

const TeamCard = ({ member }) => (
  <div
    className={`bg-white border-2 p-6 rounded-xl text-center transition-all duration-300 shadow-sm hover:shadow-md ${
      member.role.includes("Founder") ? "border-green-500" : "border-orange-500"
    } w-full max-w-xs mx-auto`}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-28 h-28 mx-auto object-cover rounded-full mb-4 border-4 border-orange-100"
    />
    <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
    <p className="text-sm font-medium text-orange-600 mt-1 mb-2">{member.role}</p>
    <p className="text-sm text-gray-600">{member.bio}</p>
  </div>
);

const TeamCarousel = () => {
  const founders = teamMembers.filter((m) => m.role.toLowerCase().includes("founder"));
  const others = teamMembers.filter((m) => !m.role.toLowerCase().includes("founder"));

  const firstRow = founders;
  const secondRow = others.slice(0, 3);
  const thirdRow = others.slice(3);

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('deal95.webp')" }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
            Meet Our Team
          </h1>
          <h3 className="text-lg font-medium text-gray-200 mt-4">
            Meet the explorers who make every Himalayan step unforgettable.
          </h3>
        </div>
      </div>

      {/* Team Layout */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">
          Our Team
        </h2>

        {/* Row 1: 2 Founders */}
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-4 mb-10">
          {firstRow.map((member, index) => (
            <TeamCard key={`founder-${index}`} member={member} />
          ))}
        </div>

        {/* Row 2: 3 Members */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {secondRow.map((member, index) => (
            <TeamCard key={`second-${index}`} member={member} />
          ))}
        </div>

        {/* Row 3: Remaining Members */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {thirdRow.map((member, index) => (
            <TeamCard key={`third-${index}`} member={member} />
          ))}
        </div>
      </section>

      <HimTrek />
    </>
  );
};

export default TeamCarousel;





